import React from 'react';
import {ReactComponent as Logo} from '../../assets/img/samply.svg'
import './header-top.scss';
import HeaderButton from '../header-button/header-button.component';
import { faUser, faBullseye, faTh, faGripHorizontal, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

const HeaderTop = ({currentPersona}) => (
    <div className="m-header-top">
        <nav className="m-header-top_left">
            <Logo className="a-logo"/>
            <HeaderButton circle={'3'} icon={faUser} type="button">3</HeaderButton>
            <HeaderButton circle={'1'} icon={faBullseye} type="button">1</HeaderButton>
            <HeaderButton circle={'1'} icon={faTh} type="button">1</HeaderButton>
        </nav>
        <div className="m-header-top_breadcrumbs">
            dashboard / My Project / {currentPersona ? <b>{currentPersona.name}</b>: null}
        </div>
        <nav>
            <HeaderButton icon={faGripHorizontal} type="button">My organization</HeaderButton>
            <HeaderButton icon={faUser} type="button">Joe Doe</HeaderButton>
            <HeaderButton icon={faSignOutAlt} type="button"></HeaderButton>
        </nav> 
    </div>
);

const mapStateToProps = ({persona}) => ({
    currentPersona: persona.currentPersona
});

export default connect(mapStateToProps)(HeaderTop);