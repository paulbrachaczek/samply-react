import React, {useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTrash}  from '@fortawesome/free-solid-svg-icons';
import './field.scss';  
import {deleteWideField} from '../../redux/wideFields/wide-fields.actions';
import {connect} from 'react-redux';
import { deleteThinField } from '../../redux/thinFields/thin-fields.actions';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../../ItemTypes.js';

const Field = ({field, editable = true, deleteWideField, size, deleteThinField, index, moveField}) => {
    const {id, title, data, field_type} = field;
    let input;
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState(false);
    const deleteField = (_id) => {
        if(size === 'wide') {
            deleteWideField(id);
        } else if(size === 'thin') {
            deleteThinField(id);
        }
    };
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: ItemTypes.FIELD,
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            
            moveField(dragIndex, hoverIndex);
           
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.FIELD, id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    drag(drop(ref));

    if(field_type === 'short_text') {
        input = <input defaultValue={data}  onChange={(e) => (!e.target.value.length) && !editable ? setError(true): setError(false)} type="text"/>; 
    } else if(field_type === 'long_text') {
        input = <textarea>{data}</textarea>; 
    } else if(field_type === 'number') {
        input = <input defaultValue={data}  type="number"/>; 
    } else if(field_type === 'image_gallery') {
        input = data.map((img, index)=> img.image ? <figure key={index}><img src={img.image} alt=''/></figure> : <figure key={index} className="-empty"></figure>)
    } else {
        input = <figure><img src={data} alt={title}/></figure>
    };

    return(
        <div ref={ref} className={`m-field ${error ?'-error' : ''}`}>
            <label>{title}</label>
            {input}
            {editable ? 
                <button onClick={()=> !editMode ? setEditMode(true) : deleteField(id)} className="m-field_button"><FontAwesomeIcon icon={!editMode ? faCog : faTrash}/></button>  
                : 
                null 
            }    
        </div>
    );
};

const mapDispachToProps = dispatch => ({
    deleteWideField: id => dispatch(deleteWideField(id)),
    deleteThinField: id => dispatch(deleteThinField(id))  
});

export default connect(null, mapDispachToProps)(Field);