import React from 'react';
import Field from '../field/field';
import './persona-header.scss';

const PersonaHeader = ({persona}) => {
    const {name} = persona;
    const headerData = [
        {
            "id": 1,
            "title": "Persona name",
            "field_type": "short_text",
            "data": name,
            "column_id": null,
            "prev_id": {},
            "next_id": null
        },
        {
            "id": 2,
            "title": "Short name",
            "field_type": "short_text",
            "data": name.slice(0,3),
            "column_id": null,
            "prev_id": {},
            "next_id": null
        }
    ];

    return(
    <header className="m-persona-header">
        <figure  className="m-persona-header_figure">
            <img alt={name} src="../images/persona.png"/>
        </figure>
        <div className="m-persona-header_name">
           <Field field={headerData[0]} editable={false} />
        </div>
        <div className="m-persona-header_short-name">
        <Field field={headerData[1]} editable={false} />
        </div>
    </header>
)};

export default PersonaHeader;