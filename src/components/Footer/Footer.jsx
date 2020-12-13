import React from 'react';
import './Footer.css';
import discord from '../Image/discord.png';
import facebook from '../Image/facebook.jpg';
import twitter from '../Image/twitter.png';
import { AiFillFacebook as Facebook } from 'react-icons/ai';
import { AiFillTwitterCircle as Twitter } from 'react-icons/ai';
import { FaDiscord as Discord } from 'react-icons/fa';
import { SiGmail as Email } from 'react-icons/si';
import { AiFillPhone as Telefones } from 'react-icons/ai';



function Footer(){
    return(
        
        <div className="rodape">
            <div className="contatos">
                <div className="Rede-icone">
                    <Email className="icone"/>
                    <span> Email: johannteixeira2@gmail.com</span>
                </div>
                <div className="Rede-icone">
                    <Telefones className="icone"/>
                    <span>Telefones: +55 (45)991015331 e (45)35222223</span>
                </div>
            </div>
            <div className="redesSociais">
                <div className="Rede-icone">
                    <Facebook className="icone"/>
                    <span>Johann Teixeira Maciel</span>
                </div>
                <div className="Rede-icone">
                    <Discord className="icone"/>
                    <span>Truanqui#6263</span>
                </div>
                <div className="Rede-icone">
                    <Twitter className="icone"/>
                    <span>truanqui001</span>
                </div>
            </div>
        </div>
    );
}
export default Footer;