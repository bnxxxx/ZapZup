
import "./index.scss";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import Sobre from "../Sobre";



const data = [

    { id: '1', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503878009360515/imagem-3.jpg?ex=67245fde&is=67230e5e&hm=8cbf496771ffa90215265f052b0b47379e07c6067cbb0d29f4104641d40350c2&=&format=webp&width=438&height=585' },
    { id: '2', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503877656903750/imagem-2.jpg?ex=67245fde&is=67230e5e&hm=3500325b59537730a6e2a7531c3cc55152d1e3e15ed6626848127c20d9763b14&=&format=webp&width=438&height=585' },
    { id: '3', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503878671798413/imagem-5.jpg?ex=67245fde&is=67230e5e&hm=637138e9af492b6367d8c1854eb8148801de32cc1aec233028b717c5951cf521&=&format=webp&width=438&height=585' },
    { id: '4', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303321331550650389/imagem-12.jpg?ex=672b5413&is=672a0293&hm=070dc194fd6a378bfff6587e44f78cce582cd69e9ddc31b4c22de32660a6ff2f&=&format=webp&width=503&height=671' },
    { id: '5', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303322411160305664/imagem-16.jpg?ex=672b5515&is=672a0395&hm=0410fad6f9fe196d9b1f93b916fa79972fc06a9cc89583786559e2e5d958ee70&=&format=webp&width=503&height=671' },
    { id: '6', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503878365745152/imagem-4.jpg?ex=67245fde&is=67230e5e&hm=199cda64cd0303f83bbabe0ff9f82ec6ccdc754616e29b1501da195a1b76b467&=&format=webp&width=438&height=58' },
    { id: '7', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303321334528606248/imagem-15.jpg?ex=672b5414&is=672a0294&hm=e71b6731b78cdcaf371e6cf66b8da35a22c25d892c1b95d3a49a8a33d7143e1b&=&format=webp&width=503&height=671' },
    { id: '8', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303322412477059103/imagem-17.jpg?ex=672b5515&is=672a0395&hm=f8f3fa361d8beb66628f8aac71b050d0f794822ab2fa09d24df29ed191b64466&=&format=webp&width=503&height=671' },
    { id: '9', image: 'https://media.discordapp.net/attachments/1239531615596707891/13033213325572874524/imagem-13.jpg?ex=672b5414&is=672a0294&hm=d4a8b7d1d8f306ca664764f4cb5aa48b29ff85e36c8613eb1089b263fc1ecb21&=&format=webp&width=503&height=671' },
    { id: '10', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303321333656059924/imagem-14.jpg?ex=672b5414&is=672a0294&hm=05c174c8634f985814bf9c519e83f16a9506db36f01a79c6bcf5838fdb02ef1f&=&format=webp&width=503&height=671' }
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