import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar-element.scss';
import {ItemTypes} from '../../ItemTypes';
import { useDrag } from 'react-dnd';
import { connect } from 'react-redux';
import { setWideField} from '../../redux/wideFields/wide-fields.actions'; 
import { setThinField } from '../../redux/thinFields/thin-fields.actions';

const SidebarElement = ({element, setWideField, setThinField}) => {
    const {title, icon, type} = element;
    const [{ isDragging }, drag] = useDrag({
        item: {title, type: ItemTypes.BOX },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                if(dropResult.name === 'thin') {
                    setThinField(type);
                }
                else {
                    setWideField(type);
                }
                
                //alert(`You dropped ${item.name} into ${dropResult.name}!`);
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

const mapDispachToProps = dispatch => ({
    setWideField: type => dispatch(setWideField(type)),
    setThinField: type => dispatch(setThinField(type))
});

export default connect(null, mapDispachToProps)(SidebarElement);