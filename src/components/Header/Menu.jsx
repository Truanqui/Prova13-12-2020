import React,{ useState} from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';


function Menu(){
    const[Home,setHome] = useState(false);
    const[Produto,setProduto] = useState(false);
    const[Suporte,setSuporte] = useState(false);
    const[Conta,setConta] = useState(false);
    const[black,setBlack] = useState(false);

    const clickHome = () => setHome(!setHome)
    const clickProduto = () => setProduto(!setProduto)
    const clickSuporte = () => setSuporte(!setSuporte)
    const clickConta = () => setConta(!setConta)
    const clickBlack = () => setBlack(!setBlack)
        
    return(
        <div id="menu">
            <ul class="lista">
                <Link onClick={clickHome} to='/' className="linkHeader">
                    <li>
                        <a  href="" className={Home ? "linkHeaderAtivado" :"linkHeader"}>
                            <span></span>
                            <strong>Home</strong>
                        </a>
                    </li>
                </Link>
                <Link to='/produto' className="linkHeader">
                    <li>
                        <a onClick={clickProduto} href="" className={Produto ? "linkHeaderAtivado" :"linkHeader"}>
                            <span></span>
                            <strong>Produto</strong>
                        </a>
                    </li>
                </Link>
                <Link to='/suporte' className="linkHeader">
                    <li> 
                        <a onClick={clickSuporte} href="" className={Suporte ? "linkHeaderAtivado" :"linkHeader"}>
                            <span></span>
                            <strong>Suporte</strong>
                        </a>
                    </li>
                </Link>
                <Link to='/conta' className="linkHeader">                  
                    <li> 
                        <a  onClick={clickConta} href="" className={Conta ? "linkHeaderAtivado" :"linkHeader"}>
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