import "./index.scss";

import { Link } from 'react-router-dom';



export default function Sobre() {


    return (

        <div className="Sobre">

            <div className="cabecalho">

                <img className="logo" src="/assets/img/zap_zup_logo_CURVA.png" alt="" />
                <h1>Zap Zup</h1>

                <div className="links">
                <Link to="/Sobre" className='links' >Sobre</Link>
                   
                        <Link to="/" className='links' >Inicio</Link>
                        
                        <Link to="/agendamento" className='links' >Cental de agendamento</Link>
                </div>


            </div>
            <div className="titulo">
                <h1>Agende já sua festa!!!</h1>
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

            <div className="repertorio">

                <div className="brincadeiras">
                    <h2>Bricadeiras</h2>
                    <p>Contamos com dezenas de brincadeiras de diversos tipos com diferentes materiais como: corda, cone, bambolê, argola, bolas, cone chapéu, entre muitas outras. Além disso contamos com muitas outras brincadeiras sem materiais todas as brincadeiras no nosso repertório são muito inclusive abrindo todas as idades e incluindo todas as crianças.</p>
                </div>

                <div className="baladinha">

                    <h2>Baladinha</h2>

                    <p>Na baladinha contamos com muita energia,e muita muita animação,temos dezenas de música de todos os gêneros e tipos
                        para todas as idades, desde músicas infantis até música atuais, trends virais do tik Tok ou até mesmo músicas antigas como  anos 60, Rock, Samba, Pagode, Funk, Pop, Kpop, Rap e entre muitas outras, (sempre de acordo com a preferencia da contratante!)
                    </p>
                </div>

                <div className="premios">
                    <h2>Premios</h2>
                    <p> repertório também contamos com entrega de prêmios como escultura de balões todos os tipos temos uma variedade muito grande, além disso tá me fazendo colagem de tatuagem removível a base de água e pintura simples de variados tipos</p>
                </div>



            </div>
            <div className="s2">

                <div className="oficinas">
                    <h2>Oficinas</h2>
                    <p>Também faz parte do nosso repertório as famosas oficinas que são oficinas de criações com as crianças de diversas coisas como slime pulseira boneca ecológico e entre outros sempre muito divertido estimulando sempre o aprendizado da criança em conjunto da maneira mais divertida possível</p>

                </div>

                <div className="gincanas">
                    <h2>Gincanas</h2>
                    <p>Além das brincadeiras nosso repertorio também é recheada de gincanas de diversos tipos com várias e várias brincadeiras sempre estimulando a atividade física em uma competição da maneira mais saudável possível com todas as crianças e adultos
                    </p>
                </div>


            </div>

        </div>

    )
}