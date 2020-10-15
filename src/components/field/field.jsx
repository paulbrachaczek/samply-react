import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTrash}  from '@fortawesome/free-solid-svg-icons';
import './field.scss';

const Field = ({field, editable = true, removeMe}) => {
    const {title, data, field_type} = field;
    let error = false;
    let icon = {faCog};
    let editMode = false;

    let input;
    if(field_type === 'short_text') {
        input = <input defaultValue={data}  onChange={(e)=>alert(e.target.value)} type="text"/>; 
    } else if(field_type === 'long_text') {
        input = <textarea>{data}</textarea>; 
    } else {
        input = <figure><img src={data} alt={title}/></figure>
    };

    return(
        <div className="m-field">
            <label>{title}</label>
            {input}
            {!editMode ? 
                <FontAwesomeIcon onClick={()=> console.log(editMode=true)} icon={faCog}/> : 
                <FontAwesomeIcon icon={faTrash}/> 
            }
            {editable ? <button onClick={removeMe} className="m-field_button"><FontAwesomeIcon icon={faTrash}/></button> : null}
        </div>
    );
};

export default Field;