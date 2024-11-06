import "./index.scss"
import { useState } from "react";

import { Link } from 'react-router-dom';


export default function Agendamento() {


    return (

        <div className="agendamento">

            <div className="cabecalho">

                <img className="logo" src="/assets/img/zap_zup_logo_CURVA.png" alt="" />
                <h2>Zap Zup</h2>

                <div className="links">
                    <Link to="/login" className='links' >Login</Link>

                    <Link to="/" className='links' >Inicio</Link>

                    <Link to="/agendamento" className='links' >Cental de agendamento</Link>
                </div>


            </div>
            <div className="titulo">
                <h2>Central de Agendamento</h2>
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

            <div className="precos">

                <h2 className="titulo">Pacotes</h2>


                <div className="pacotes">
                    <div className="classico">
                        <h2>Pacote Classico </h2>

                        <p>4 horas <br /> 2 Recreadores</p>
                        <div className="preco">
                            <p>550R$</p>

                        </div>

                    </div>

                    <div className="simples">
                        <h2>Pacote Simples </h2>

                        <p>4 horas <br /> 2 Recreadores</p>
                        <div className="preco">
                            <p>380R$</p>

                        </div>

                    </div>
                    <div className="extra">
                        <h2>Pacote Extra </h2>

                        <p>4 horas <br /> 2 Recreadores</p>
                        <div className="preco">
                            <p>650R$</p>

                        </div>

                    </div>
                    <div className="adicionais">
                        <h2>Pacote Adicionais </h2>

                        <p>acimas de 2 recreadores
                            cada recreador acressentado
                            tem acressimo de 100,00R$
                        </p>

                        <p>cada hora acressentado tem
                            o valor adicional de 80,00R$ </p>



                    </div>
                </div>
                <div className="informacoes">
                    <div className="pessoais">

                        <h1>Iformações do Contratante</h1>

                        <div className="inputs">

                            <div className="nome">
                                <h2>Nome completo</h2>
                                <input type="text" />
                            </div>


                            <div className="email">
                                <h2>Email</h2>
                                <input type="text" />
                            </div>


                            <div className="telefone">
                                <h2>Telefone</h2>
                                <input type="text" />
                            </div>

                        </div>


                    </div>





                    <div className="evento">

                        <div className="titulo">

                            <h1>Iformações do Eventos</h1>

                            <div className="inputs">

                                <div className="recreadores">
                                    <h2>Quantos recreadores você deseja</h2>
                                    <input type="text" />
                                </div>


                                <div className="horario">
                                    <h2>Quantas horas de evento</h2>
                                    <input type="text" />
                                </div>


                                <div className="data">
                                    <h2>Data do evento</h2>
                                    <input type="text" />
                                </div>

                            </div>


                        </div>


                        <div className="s2">

                            <div className="endereco">
                                <h2>Endereco</h2>
                                <input type="text" />
                            </div>

                            <div className="observacoes">
                                <h2>Observações</h2>
                                <input type="text" />
                            </div>
 
                            <div className="baladinha check">
                                <h2>Deseja baladinha</h2>
                                <input type="checkbox" />
                            </div>


                        </div>
                    </div>



                </div>



            </div>
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
        </div>
    )
}