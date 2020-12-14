import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div id="menu">
            <ul class="lista">
                <Link to='/' className="linkHeader">
                    <li>
                        <a href="" className= "linkHeader">
                            <span></span>
                            <strong>Home</strong>
                        </a>
                    </li>
                </Link>
                <Link to='/produto' className="linkHeader">
                    <li>
                        <a href="" className= "linkHeader">
                            <span></span>
                            <strong>Produto</strong>
                        </a>
                    </li>
                </Link>
                <Link to='/suporte' className="linkHeader">
                    <li> 
                        <a href="" className= "linkHeader">
                            <span></span>
                            <strong>Suporte</strong>
                        </a>
                    </li>
                </Link>
                <Link to='/conta' className="linkHeader">                  
                    <li> 
                        <a href="" className= "linkHeader">
                            <span></span>
                            <strong>Conta</strong>
                        </a>
                    </li> 
                </Link>
            </ul>
        </div>
    );
}
export default Menu; 