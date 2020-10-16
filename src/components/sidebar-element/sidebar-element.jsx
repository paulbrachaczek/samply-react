import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar-element.scss';
import {ItemTypes} from '../../ItemTypes';
import { useDrag } from 'react-dnd';

const SidebarElement = ({element}) => {
    const {title, icon} = element;
    const [{ isDragging }, drag] = useDrag({
        item: {title, type: ItemTypes.BOX },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                alert(`You dropped ${item.title} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0.4 : 1;
    return (
    <div className="m-sidebar-element" style={{opacity}} ref={drag}>
        <figure className="m-sidebar-element_icon">
            {
                typeof(icon)==="string" ? 
                    <figcaption className={`${icon.length>5? 'long':null}`}>{icon}</figcaption>
                : <FontAwesomeIcon icon={icon}/>
            }
        </figure>
        <p className="m-sidebar-element_title">{title}</p>
    </div>
    )
};

export default SidebarElement;