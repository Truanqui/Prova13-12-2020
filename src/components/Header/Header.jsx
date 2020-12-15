import {React, useState} from 'react';
import './Header.css';
import logo from '../Image/logo.png';
import Menu from './Menu';
function Header(){
    const[black,setBlack] = useState(false);
    const clickBlack = () => setBlack(!black)
    return(
        <div>
        <header className={black ? "caixaBlack" : "caixa" }>
            <nav id="container">
                <div id="logo">  
                    <img src={logo} alt="logo" width="220px"/>
                </div>
                <Menu/>
                <button onClick={clickBlack}></button>
            </nav>
        </header>
    </div>
    );
}
export default Header;