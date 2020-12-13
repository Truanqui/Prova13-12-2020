import React from 'react';
import './Caixa.css';

function Caixa(props){
    return(
        <input className="credinput" type={props.funcao} placeholder={props.texto}></input>
    );
}
export default Caixa;