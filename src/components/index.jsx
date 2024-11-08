import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'; 

export default function Cabecalho () {
    return (
        <div className="cabecalho">

                <img className="logo" src="/assets/img/zap_zup_logo_CURVA.png" alt="" />
                <h2>Zap Zup</h2>

                <div className="links">
                    <Link to="/login" className='links' >Login</Link>

                    <Link to="/" className='links' >Inicio</Link>

                    <Link to="/agendamento" className='links' >Cental de agendamento</Link>
                </div>


            </div>
    );
}



