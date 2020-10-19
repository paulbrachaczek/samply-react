import React from 'react';
import HeaderField from '../header-field/header-field';
import './persona-header.scss';
import {connect} from 'react-redux';

class PersonaHeader extends React.Component {
    
    constructor() {
        super();

        this.state = {
            headerData: [
                {
                    "id": 1,
                    "title": "Persona name",
                    "field_type": "name"
                },
                {
                    "id": 2,
                    "title": "Short name",
                    "field_type": "initials"
                }
            ]
        }
    }

    render() {
        const {currentPersona} = this.props;

        return(
            <header className="m-persona-header">
                <figure  className="m-persona-header_figure">
                    <img alt={this.props.currentPersona.name} src="../images/persona.png"/>
                </figure>
                <div className="m-persona-header_name">
                    {this.state.headerData[0] ? <HeaderField field={this.state.headerData[0]} data={currentPersona.name} /> : null}
                </div>
                <div className="m-persona-header_short-name">
                {this.state.headerData[1] ? <HeaderField field={this.state.headerData[1]} data={currentPersona.initials} /> : null}
                </div> 
            </header>
    )}
}

const mapStateToProps = ({persona}) => ({
    currentPersona: persona.currentPersona
});

export default connect(mapStateToProps)(PersonaHeader);