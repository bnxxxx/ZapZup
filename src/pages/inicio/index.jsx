
import "./index.scss";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import Sobre from "../Sobre";



const data = [

    { id: '1', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503878009360515/imagem-3.jpg?ex=67245fde&is=67230e5e&hm=8cbf496771ffa90215265f052b0b47379e07c6067cbb0d29f4104641d40350c2&=&format=webp&width=438&height=585' },
    { id: '2', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503877656903750/imagem-2.jpg?ex=67245fde&is=67230e5e&hm=3500325b59537730a6e2a7531c3cc55152d1e3e15ed6626848127c20d9763b14&=&format=webp&width=438&height=585' },
    { id: '3', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503878671798413/imagem-5.jpg?ex=67245fde&is=67230e5e&hm=637138e9af492b6367d8c1854eb8148801de32cc1aec233028b717c5951cf521&=&format=webp&width=438&height=585' },
    { id: '4', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503879376703498/imagem-7.jpg?ex=67245fdf&is=67230e5f&hm=aae6afdc97f8a21a0f7485cc217dfaf852bbc90296b4be4f04ce343d6ba25722&=&format=webp&width=666&height=585' },
    { id: '5', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503879972163684/imagem-9.jpg?ex=67245fdf&is=67230e5f&hm=c4b79da25f4e3cccb90878e332350bb92def770fabf337cfecf3177ca788120e&=&format=webp&width=590&height=585' },
    { id: '6', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503878365745152/imagem-4.jpg?ex=67245fde&is=67230e5e&hm=199cda64cd0303f83bbabe0ff9f82ec6ccdc754616e29b1501da195a1b76b467&=&format=webp&width=438&height=585' },
    { id: '7', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300538171850883132/brincadeira.jpg?ex=67247fcf&is=67232e4f&hm=a6a67855786b28a105dd3612dd79b239e7bcd0934dd2e2a89d063fc7f2a15b87&=&format=webp&width=602&height=585' },
    { id: '8', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300504685224005784/imagem-11.jpg?ex=6724609f&is=67230f1f&hm=c3f1a984504af8852f0fd860a18e2f7e1ad1933413a0b5171b61bf6ae9bf5cf9&=&format=webp&width=445&height=437' },
    { id: '9', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503879036833843/imagem-6.jpg?ex=67245fde&is=67230e5e&hm=b15b16a2c6291eb7fe2e12f391796461469859f5969bd9e6836a5866a9e41527&=&format=webp&width=438&height=585' },
    { id: '10', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503877656903750/imagem-2.jpg?ex=6721141e&is=671fc29e&hm=625b8a7cd39f5c8d53e4e3d7777dcc1f0f766ed4cb7f214d5168c6fa45feca1c&' }
];



export default function Inicio() {


    return (

        <div className="Inicio">
            <div className="cabecalho">

                <img className="logo" src="/assets/img/zap_zup_logo_CURVA.png" alt="" />
                <h1>Zap Zup</h1>
            </div>

            <div className="links">
             

                <Link to="/" className='link' >Inicio</Link>
                <Link to="/login" className="link">Login</Link>

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

            <div className="container">
                <h1 className="t1">Eternizando Momentos</h1>

                <Swiper
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    navigation

                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="recreaçao"
                                className="fotos"

                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>


            <Sobre />

        </div>



    )

}