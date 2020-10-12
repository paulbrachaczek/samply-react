import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './sidebar-element.scss';

const SidebarElement = ({element}) => {
    const {title, icon} = element;
    return (
    <div className="m-sidebar-element">
        <figure className="m-sidebar-element_icon">
            {
                typeof(icon)==="string" ? 
                    <figcaption>{icon}</figcaption>
                : <FontAwesomeIcon icon={icon}/>
            }
        </figure>
        <p className="m-sidebar-element_title">{title}</p>
    </div>
    )
};

export default SidebarElement;