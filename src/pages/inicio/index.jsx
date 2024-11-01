
import "./index.scss";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";



const data = [
  
    {id:'1', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503877656903750/imagem-2.jpg?ex=6721141e&is=671fc29e&hm=625b8a7cd39f5c8d53e4e3d7777dcc1f0f766ed4cb7f214d5168c6fa45feca1c&'},
    {id:'2', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503878009360515/imagem-3.jpg?ex=6721141e&is=671fc29e&hm=0d998bff027369f3adfb81b8302c8e3562e76ec3a947eacc85c2de49c7e94e7e&'},
    {id:'3', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503878365745152/imagem-4.jpg?ex=6721141e&is=671fc29e&hm=56d3222d0d3181825dfedcafe79564df976b21225a32aae5c7e3573a662c193f&'},
    {id:'4', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503878671798413/imagem-5.jpg?ex=6721141e&is=671fc29e&hm=dbf187caf6d136745f825a5fe4cac3b3288377a90d52055d85cf81f0da355179&'},
    {id:'5', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503879036833843/imagem-6.jpg?ex=6721141e&is=671fc29e&hm=4177a5e53abbc90a372ede9ef7630ed909f2186c48e30458c076db9d9ea9a903&'},
    {id:'6', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503879376703498/imagem-7.jpg?ex=6721141f&is=671fc29f&hm=eff2a052d93de90f09140c2ff506ca91969465d962b0d9e32171d8ca485a7fe1&'},
    {id:'7', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503879670300753/imagem-8.jpg?ex=6721141f&is=671fc29f&hm=fc8de2c747252c00a8985764c0f4ab57fdfbfe3f8f622271195838dcc1ab3eb5&'},
    {id:'8', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503879972163684/imagem-9.jpg?ex=6721141f&is=671fc29f&hm=07f6b63b983dd664f4f2729e4b272e2d9fc6ea7c39f6149932460b52092e5eae&'},
    {id:'9', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300504685224005784/imagem-11.jpg?ex=672114df&is=671fc35f&hm=cd5719f88887be6240a10cee0114d7273b196061e773258b77b5fc6cb170ea5c&'},
    {id:'10', image: 'https://cdn.discordapp.com/attachments/1239531615596707891/1300503877656903750/imagem-2.jpg?ex=6721141e&is=671fc29e&hm=625b8a7cd39f5c8d53e4e3d7777dcc1f0f766ed4cb7f214d5168c6fa45feca1c&'},
];



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

            <div className="container">
                    <h1 className="t1">Eternizando Momentos</h1>

                    <Swiper 
                    slidesPerView={3}
                    pagination={{clickable:true}}
                    navigation
                    
                    >
                        {data.map( (item) => (
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




        </div>



    )

}