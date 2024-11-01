import "./index.scss";
import { useState } from "react";

import { Link } from 'react-router-dom';


export default function Sobre() {


    return (

        <div className="Sobre">

           
            <div className="titulo">
                <h1>Agende já sua festa!!!</h1>
            </div>

            

            <div className="repertorio">

            
                <div className="card1">


                    <h2>Bricadeiras</h2>

                    <img className="foto" src="/assets/img/brincadeira.jpg" alt="" />

                    <p>Contamos com dezenas de brincadeiras de diversos tipos com diferentes materiais como: corda, cone, bambolê, argola, bolas, cone chapéu, entre muitas outras. Além disso contamos com muitas outras brincadeiras sem materiais todas as brincadeiras no nosso repertório são muito inclusive abrindo todas as idades e incluindo todas as crianças.</p>
                </div>

                <div className="card2">

                    <h2>Baladinha</h2>

                    <img className="foto" src="/assets/img/bl.jpg" alt="" />

                    <p>Na baladinha contamos com muita energia,e muita muita animação,temos dezenas de música de todos os gêneros e tipos
                        para todas as idades, desde músicas infantis até música atuais, trends virais do tik Tok ou até mesmo músicas antigas como  anos 60, Rock, Samba, Pagode, Funk, Pop, Kpop, Rap e entre muitas outras, (sempre de acordo com a preferencia da contratante!)
                    </p>
                </div>

                <div className="card3">
                    <h2>Premios</h2>
                    <img className="foto" src="/assets/img/balao.jpg" alt="" />

                    <p> repertório também contamos com entrega de prêmios como escultura de balões todos os tipos temos uma variedade muito grande, além disso tá me fazendo colagem de tatuagem removível a base de água e pintura simples de variados tipos</p>
                </div>



            </div>
            <div className="s2">

                <div className="card4">
                    <h2>Oficinas</h2>
                    <img className="foto" src="/assets/img/oficinas.jpg" alt="" />
                    <p>Também faz parte do nosso repertório as famosas oficinas que são oficinas de criações com as crianças de diversas coisas como slime pulseira boneca ecológico e entre outros sempre muito divertido estimulando sempre o aprendizado da criança em conjunto da maneira mais divertida possível</p>

                </div>

                <div className="card5">

                    <h2>Gincanas</h2>
                    <img className="foto" src="/assets/img/imagem-2.jpg" alt="" />
                    <p>Além das brincadeiras nosso repertorio também é recheada de gincanas de diversos tipos com várias e várias brincadeiras sempre estimulando a atividade física em uma competição da maneira mais saudável possível com todas as crianças e adultos
                    </p>
                </div>


            </div>

        </div>

    )
}