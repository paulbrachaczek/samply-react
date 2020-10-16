import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTrash}  from '@fortawesome/free-solid-svg-icons';
import './field.scss';  

const Field = ({field, editable = true, removeMe}) => {
    const {title, data, field_type} = field;
    let error = false;
    let icon = {faCog};
    const [editMode, setEditMode] = useState(false);

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
                <button onClick={()=> setEditMode(true)} className="m-field_button"><FontAwesomeIcon icon={faCog}/></button>  
                : 
                <button onClick={()=> removeMe} className="m-field_button"><FontAwesomeIcon icon={faTrash}/></button> 
            }    
        </div>
    );
};

export default Field;