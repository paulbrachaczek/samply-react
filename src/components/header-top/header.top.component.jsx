import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/samply.svg'
import './header-top.scss';
import HeaderButton from '../header-button/header-button.component';
import { faUser, faBullseye, faTh, faGripHorizontal, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const HeaderTop = () => (
    <div className="m-header-top">
        <nav className="m-header-top_left">
            <Logo className="a-logo"/>
            <HeaderButton circle={'3'} icon={faUser} type="button"></HeaderButton>
            <HeaderButton circle={'1'} icon={faBullseye} type="button"></HeaderButton>
            <HeaderButton circle={'1'} icon={faTh} type="button"></HeaderButton>
        </nav>
        <div className="m-header-top_breadcrumbs">
            dashboard / My Project / <b>Persona Tess</b>
        </div>
        <nav>
            <HeaderButton icon={faGripHorizontal} type="button">My organization</HeaderButton>
            <HeaderButton icon={faUser} type="button">Joe Doe</HeaderButton>
            <HeaderButton icon={faSignOutAlt} type="button"></HeaderButton>
        </nav> 
    </div>
);

export default HeaderTop;