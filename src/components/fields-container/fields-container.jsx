import React, {useState, useEffect, useCallback} from 'react';
import Field from '../field/field';
import { useDrop } from 'react-dnd';
import {ItemTypes} from '../../ItemTypes.js';
import './fields-container.scss';
import update from 'immutability-helper';

export const FieldsContainer = ({fields, size = 'wide'}) => {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: size }),
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
    const [fieldsState, setFieldsState] = useState(fields);
    useEffect(() => {
        setFieldsState(fields);
    }, [fields]);

    const moveField = useCallback((dragIndex, hoverIndex) => {
        const dragField = fields[dragIndex];
        setFieldsState(update(fields, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragField],
            ],
        }));
        //const newFields = [...fieldsState];
        
        //console.log(newFields);
    }, [fields]);
    
    return (
        <div className={`m-fields ${size === 'thin' ? '-thin' : '-wide'} ${dragClass}`} ref={drop}>
            {fieldsState.map((field, index) => (
                <Field key={field.id} size={size} field={field} index={index} moveField={moveField}/>  
            ))}
        </div>
    );
};