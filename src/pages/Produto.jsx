import React from 'react';
import './styles/Produto.css';
import gta5 from '../components/Image/gta5.jpg';
import homemaranha from '../components/Image/homemaranha.jpg';
import godofwar from '../components/Image/godofwar.jpg';
import injustice2 from '../components/Image/injustice2.jpg';
import Caixa from './Caixa/Caixa';
import Carrinho from './Botoes/BCarrinho';


function Produto(){
    return(
        <section id="produtoimagens">
            <div className="container2">
                <div className="imagens">
                    <div className="imagens-p">
                        <div className="imagem-p1">
                            <img src={homemaranha} alt="imagem-p1"width="100px" />
                        </div>
                        <div className="imagem-p2">
                            <img src={godofwar} alt="imagem-p2" width="100px" />
                        </div>
                        <div className="imagem-p3">
                            <img src={injustice2} alt="imagem-p3" width="100px" />
                        </div>
                    </div>
                    <div className="imagem-g">
                        <img src={gta5} alt="imagem-g" width="250px" />
                    </div>
                </div>
                <div className="tex"> 
                    <h2>Pacote 2D(2 dias)</h2>
                    <div className="preco">
                        <h1>R$ 9,99</h1>
                    </div> 
                    <div>
                        <h3>CEP</h3>
                        <Caixa funcao="text" name="cep" size="2" maxlength="5" /> - <Caixa funcao="text" name="cep2" size="" maxlength="3" />
                        <Carrinho id="boxInput"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Produto;