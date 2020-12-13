import React from 'react';
import './BCarrinho.css';

function BCarrinho(){
    function handleClick(Adicionar){
     Adicionar.preventDefault();
     window.alert('Está pagina ainda não está disponível');
     console.log("Está pagina ainda não está disponível");   
    }
    return(
        <button className="carrinho" type="submit" onClick={handleClick}>
            <a className="linkCarrinho" href="">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <strong>Adicionar Carrinho</strong>                               
            </a>
        </button>
    );
} 
export default BCarrinho;
