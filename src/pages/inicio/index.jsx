
import "./index.scss";

import { Link } from 'react-router-dom';







export default function Inicio() {


    return (

        <div className="Inicio">
            <div className="cabecalho">

                <img className="logo" src="/assets/img/zap_zup_logo_CURVA.png" alt="" />
                <h1>Zap Zup</h1>
            </div>

            <div className="links">
                <Link to="/Sobre" className='link' >Sobre</Link>
                   
                        <Link to="/" className='link' >Inicio</Link>
                        
                        <Link to="/agendamento" className='link' >Cental de agendamento</Link>
                </div>



                <div className="titulo">
                    <h2>Zap Zup Recreação</h2>
                </div>

            <div className="contado">
                <div className="whats">
                    <img className="logoWhats" src="/assets/img/logo-whatszap.avif" alt="" />
                    <p>11 98013-3912</p>
                </div>
                <div className="insta">

                    <img className="logoInsta" src="/assets/img/instagram-logo.webp" alt="" />
                    <p>@ZAPZUPRECREACAO</p>

                </div>
            </div>


            <div className="tudo">

                <div className="sessao">
                    <p>A Zap Zup é uma empresa de recreação que esta no mercado a mais de 10 anos! Temos como  alvo o publico infantil e juvenil entre
                        tanto também somos exepicionais com todos os públicos desde o infantil até o os públicos mais velhos , nos contamos  com um
                        repertorio, contamos com centenas de bricadeirar de variados tiopos com materias como: corda, cone, chapeuzinho, bolas...
                        também temos muitas bricadeiras sem material todas muito incluvivaspara tod e qualquer publico. Outro ponto forte no noosso
                        repertorio são as baladinhas temos dezenas de coreografias para diversos estilos musicais sem com muita agitação e muita energia
                        e alegria. Aqui na zap zup trabalhamos com muito alto nive para fazer a felicidade de todos nossos contratante!!</p>
                </div>

            </div>

            <div className="imagens">
                <div className="s1">
                    <p>1</p>
                </div>
                <div className="s2">
                    <p>2</p>
                </div>
                <div className="s3">
                    <p>3</p>
                </div>
                <div className="s4">
                    <p>4</p>
                </div>
            </div>


            <div className="rodaPe">
                <img className="logo" src="/assets/img/zap_zup_logo_CURVA.png" alt="" />
                <h1>Zap Zup</h1>

            </div>
        </div>



    )

}