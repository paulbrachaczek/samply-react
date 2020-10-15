import React from 'react';
import HeaderTop from '../header-top/header.top.component';
import HeaderBottom from '../header-bottom/header-bottom.component';
import './header.scss';
const Header = ()=> (
    <header className="o-header">
        <HeaderTop/>
        <HeaderBottom />
    </header>
);

export default Header;