import React from 'react';
import Field from '../field/field';
import { useDrop } from 'react-dnd';
import {ItemTypes} from '../../ItemTypes.js';
import './fields-container.scss';

export const FieldsContainer = ({fields, size = 'wide'}) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Fields' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });
    const isActive = canDrop && isOver;
    let dragClass = '';
    if (isActive) {
        dragClass = '-holdingOn';
    }
    else if (canDrop) {
        dragClass = '-dragging';
    }
    return (
        <div className={`m-fields ${size === 'thin' ? '-thin' : '-wide'} ${dragClass}`} ref={drop}>
            {fields.map((field) => (
                <Field key={field.id} removeMe={()=>this.removeItem(field.id, 'wide')} field={field}/>  
            ))}
        </div>
    );
};