import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div id="menu">
            <ul class="lista">
                    <p>Home</p>
                    <p>Produto</p>
                    <p>Suporte</p>                    
                    <p> Conta</p>
            </ul>
        </div>
    );
}
export default Menu; 