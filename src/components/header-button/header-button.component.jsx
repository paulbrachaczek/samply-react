import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header-button.scss';

const HeaderButton = ({children, type, icon, circle, ...other}) => (
    <button type={type} className={`a-hbutton ${!children ? '-no-text' : null}`} {...other}>
        {
            icon ? <FontAwesomeIcon icon={icon} /> : null
        }
        {
            circle ? <span>{children}</span> : null
        }
        {!circle ? children : null} 
    </button>
);

export default HeaderButton;