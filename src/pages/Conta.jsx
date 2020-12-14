import React, { useState } from 'react';
import './styles/Conta.css';
import Caixa from'./Caixa/Caixa';
import BEntrar from './Botoes/BEntrar';
import BCadastro from './Botoes/BCadastro'
import Checkbox from './Botoes/Checkbox'


function Conta(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmarEmail, setConfirmarEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");

    const handleSubmit = (e) =>{
        console.log(nome);
        console.log(email);
        console.log(confirmarEmail);
        console.log(telefone);
        console.log(dia);
        console.log(mes);
        console.log(ano);

        e.preventDefault();
    }
    const handleChangeNome = (e) =>{
        setNome(e.target.value)
        e.preventDefault();
    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
        e.preventDefault();
    }
    const handleChangeConfirmarEmail = (e) =>{
        setConfirmarEmail(e.target.value)
        e.preventDefault();
    }
    const handleChangeTelefone = (e) =>{
        setTelefone(e.target.value)
        e.preventDefault();
    }
    const handleChangeDia = (e) =>{
        setDia(e.target.value)
        e.preventDefault();
    }
    const handleChangeMes = (e) =>{
        setMes(e.target.value)
        e.preventDefault();
    }
    const handleChangeAno = (e) =>{
        setAno(e.target.value)
        e.preventDefault();
    }
    return(
        <section className="PreRegistro">
            <div className="titulo">
                Pré-registro
            </div>
            <form onSubmit={handleSubmit} className="CadastroRegistro">
                <Caixa change={handleChangeNome} valor={nome} funcao="text" texto="Nome Completo:" size="40" id="campo" />
                <Caixa change={handleChangeEmail} valor={email} funcao="text" texto="E-Mail" size="40" />
                <Caixa change={handleChangeConfirmarEmail} valor={confirmarEmail} funcao="text" texto="Confirmar E-Mail" size="40" />
                <Caixa change={handleChangeTelefone} valor={telefone} funcao="text" texto="Telefone" size="12" maxlength="14" />
                <div className="dataNascimento">
                    <Caixa change={handleChangeDia} valor={dia} funcao="text" texto="Dia" size="1" maxlength="2" />
                    <Caixa change={handleChangeMes} valor={mes} funcao="text" texto="Mês" size="1" maxlength="2" />
                    <Caixa change={handleChangeAno} valor={ano} funcao="text" texto="Ano" size="1" maxlength="4" /> 
                </div>

                <div className="boxCadastro">
                    <div className="checkCadastro">
                        <Checkbox className="Check"/>
                    </div>
                    <p> Aceita os termos do contrato, ler contrato</p>
                    </div>
                    <div> 
                        <input className="BotaoCriar" type="submit" value="Enviar"/>  
                    </div>
            </form>
        </section>
    );
}
export default Conta;