import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'; 




export default function Rodape (){
    return(

        <div className="rodaPe">

        <div className="rodape-titulo">

            <img className="logo" src="/assets/img/zap_zup_logo_CURVA.png" alt="" />
            <h2>Zap Zup</h2>

        </div>

        <div className="contato">

            <h1>Conheça nossas redes</h1>

            <div className="whats">
                <img className="logoWhats" src="/assets/img/logo-whatszap.avif" alt="" />
                <h3>Nosso Whatsapp</h3>
            </div>

            <div className="insta">
                <img className="logoInsta" src="/assets/img/instagram-logo.webp" alt="" />
                <h3>Nosso Instagram</h3>
            </div>

        </div>

    </div>

    )
}
