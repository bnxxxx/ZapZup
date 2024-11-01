import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

export default function Cabecalho () {
    return (
        <div className="cabecalho">
            <img className="logo" src="/assets/img/zap_zup_logo_CURVA.png" alt="Logo Zap Zup" />
            <h1>Zap Zup</h1>
            <div className="links">
                <Link to="/Sobre" className="link">Sobre</Link>
                <Link to="/" className="link">Início</Link>
                <Link to="/agendamento" className="link">Central de Agendamento</Link>
            </div>
        </div>
    );
}


