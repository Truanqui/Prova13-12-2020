import React from 'react';
import './Header.css';
import logo from '../Image/logo.png';
import Menu from './Menu';
function Header(){
    return(
        <div>
        <header class="caixa">
            <nav id="container">
                <div id="logo">  
                    <img src={logo} alt="logo" width="220px"/>
                </div>
                <Menu/>
            </nav>
        </header>
    </div>
    );
}
export default Header;