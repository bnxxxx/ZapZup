
import "./index.scss";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import Sobre from "../Sobre";
<<<<<<< HEAD
import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
=======
import Cabecalho from "../../components";
>>>>>>> e99752726de4e14e5ad26930bf6962909b7dc679



const data = [

    { id: '1', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503878009360515/imagem-3.jpg?ex=6733891e&is=6732379e&hm=59cbb7eee9bfe619aab77fdaea8d2770d14a088b25e5490d09d9104377b48848&=&format=webp&width=503&height=671' },
    { id: '2', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503877656903750/imagem-2.jpg?ex=6733891e&is=6732379e&hm=820e4165d4ffbcff8a6a6783dbfc9830ccdc8e3397a54c2c2399756982bcb2b9&=&format=webp&width=503&height=671' },
    { id: '3', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503878365745152/imagem-4.jpg?ex=6733891e&is=6732379e&hm=c22778baa0bba9bbaf6e099d3396817478c028aa839e79ea1fea2caa0b495bdb&=&format=webp&width=503&height=671' },
    { id: '4', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303321331550650389/imagem-12.jpg?ex=672b5413&is=672a0293&hm=070dc194fd6a378bfff6587e44f78cce582cd69e9ddc31b4c22de32660a6ff2f&=&format=webp&width=503&height=671' },
    { id: '5', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303322411160305664/imagem-16.jpg?ex=672b5515&is=672a0395&hm=0410fad6f9fe196d9b1f93b916fa79972fc06a9cc89583786559e2e5d958ee70&=&format=webp&width=503&height=671' },
    { id: '6', image: 'https://media.discordapp.net/attachments/1239531615596707891/1300503878671798413/imagem-5.jpg?ex=6733891e&is=6732379e&hm=c6255af584be69aac6b3fb75af78d08b5190cf5a1b3a1de48647e465c6920336&=&format=webp&width=503&height=671' },
    { id: '7', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303321334528606248/imagem-15.jpg?ex=672b5414&is=672a0294&hm=e71b6731b78cdcaf371e6cf66b8da35a22c25d892c1b95d3a49a8a33d7143e1b&=&format=webp&width=503&height=671' },
    { id: '8', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303322412477059103/imagem-17.jpg?ex=672b5515&is=672a0395&hm=f8f3fa361d8beb66628f8aac71b050d0f794822ab2fa09d24df29ed191b64466&=&format=webp&width=503&height=671' },
    { id: '9', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303322412477059103/imagem-17.jpg?ex=6733e6d5&is=67329555&hm=ceb7ef297b4bbca247721e15fb2e30dc6d04fa86cf825afd3d1c3c0c098f4250&=&format=webp&width=503&height=671' },
    { id: '10', image: 'https://media.discordapp.net/attachments/1239531615596707891/1303321333656059924/imagem-14.jpg?ex=672b5414&is=672a0294&hm=05c174c8634f985814bf9c519e83f16a9506db36f01a79c6bcf5838fdb02ef1f&=&format=webp&width=503&height=671' }
];



export default function Inicio() {


    return (

<<<<<<< HEAD
        <div className="Inicio">
             
             <Cabecalho/>



            <div className="titulo">                                                                                                                                                                    
=======
        <div className="agendamento">

            <Cabecalho />

            <div className="titulo">
>>>>>>> e99752726de4e14e5ad26930bf6962909b7dc679
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
            <Rodape/>

        </div>



    )

}