import React from 'react';
import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCog, faImage, faImages } from '@fortawesome/free-solid-svg-icons';
import SidebarElement from '../sidebar-element/sidebar-element';

const Sidebar = ()=> {
    const elements = [
        {
            id: 1,
            title: 'short text',
            icon: '123' 
        },
        {
            id: 2,
            title: 'long text',
            icon: 'lorem ipsum dolor amet'
        },
        {
            id: 3,
            title: 'image',
            icon: faImage

        },
        {
            id: 4,
            title: 'images gallery',
            icon: faImages
        },
        {
            id: 5,
            title: 'number',
            icon: 123
        }
    ];
    
    return (
        <aside className="m-sidebar">
            <header className="m-sidebar_header">
                <span>Add element</span>  
                <button className="m-sidebar_close" type="button">
                    close
                    <FontAwesomeIcon icon={faTimes}/>
                </button>    
            </header>
            <h3 className="m-sidebar_title">Add element to persona</h3>
            <p className="m-sidebar_desc">
                Click or drag & drop one of the element types below to add 
                it to the persona.
                <br/>Click on the  <FontAwesomeIcon icon={faCog}/>  icon of each element to edit its settings.
                You can reorder the elements by dragging them.
            </p>
            <div className="m-sidebar_elements">
                {elements[0].title}
                <ul className="m-sidebar_list">
                    
                    {elements.map((element) => (
                        <SidebarElement key={element.id} element={element}/>
                    ))}
                </ul>
            </div>
        </aside>
)};

export default Sidebar;
