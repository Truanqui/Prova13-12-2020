import React from 'react';
import './styles/Home.css';
import HomeTexto from'./Hometexto/HomeTexto';

function Home(){
    return(
        <div>
            <div className="frase">Teste o seu jogo com qualidade</div>
            <section className="geral">
                <div className="caixaHome">
                    <div className="features">
                        <div id="txt">
                            <h2>Como funciona?</h2> 
                            <HomeTexto/>
                        </div>
                    </div>
                </div>  
            </section>   
        </div>      
    );
}
export default Home;