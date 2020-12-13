import React from 'react';
import './BEntrar.css';

function BEntrar(){
    function handleClick(acao){
     acao.preventDefault();
     window.alert('Está pagina ainda não está disponível');
     console.log("Está pagina ainda não está disponível");   
    }
    return(
        <button className="enviar" type="submit" onClick={handleClick}>
            <a className="linkEnviar" href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <strong>ENTRAR</strong>                               
            </a>
        </button>
    );
} 
export default BEntrar;
