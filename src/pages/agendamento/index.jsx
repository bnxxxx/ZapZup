import "./index.scss"
import { useState, useEffect } from "react";


import { Link } from 'react-router-dom';
import Cabecalho from "../../components/cabecalho";


export default function Agendamento() {


    const[total,setTotal] = useState(0)
    const[quantidade, setquantidade] =  useState(0)
    const[quantidade2, setquantidade2] =  useState(0)


    function somarTotal(qtd1, qtd2){
        const resultado = qtd1 * 100 + qtd2 * 80


        setTotal(resultado)
    }


    useEffect(() => {
        somarTotal(quantidade,quantidade2)


    }, [quantidade,quantidade2])


    


    return (

        <div className="agendamento">

            <Cabecalho />
            
            <div className="titulo">
                <h1>Central de Agendamento</h1>
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

            <div className="container">

            <div className="precos">

                <h1 className="titulo">Pacotes</h1>


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

                        <h2 className="t1">Iformações do Contratante</h2>

                        <div className="inputs">

                            <div className="nome">
                                <h2>Nome completo</h2>
                                <input type="text" placeholder="digite seu nome" />
                            </div>


                            <div className="email">
                                <h2>Email</h2>
                                <input type="text" placeholder="digite seu email"/>
                            </div>


                            <div className="telefone">
                                <h2>Telefone</h2>
                                <input type="text"  placeholder="digite seu numero"/>
                            </div>

                        </div>


                    </div>






                    <div className="evento">

                        <h2 className="t1">Iformações do Eventos</h2>

                        <div className="inputs">

                            <div className="recreadores">
                                <h2>Quantos recreadores você deseja</h2>
                                <input type="text" onChange={ e=> setquantidade (e.target.value)}
                                value={quantidade} placeholder="digite aqui" />
                            </div>


                            <div className="horario">
                                <h2>Quantas horas de evento</h2>
                                <input type="text" onChange={ e=> setquantidade2 (e.target.value)}
                                value={quantidade2} placeholder="digite aqui"  />
                            </div>


                            <div className="data">
                                <h2>Data do evento</h2>
                                <input type="date" placeholder="00/00/00"  />
                            </div>

                        </div>


                    </div>




                    <div className="observacoes">
                        <h2 className="t1">Observações</h2>


                        <div className="endereco">
                            <h2>Endereco</h2>
                            <input type="text" placeholder="informe o endereço"  />
                        </div>

                        <div className="observaçoes">
                            <h2>Observações</h2>
                            <input type="text" placeholder="digite aqui" />
                        </div>

                        <div className="baladinha check">
                            <h2>Deseja baladinha</h2>
                         <select name="baladinha?" id="">
                            <option value='sim'>Sim</option>
                            <option value='sim'>Não</option>
                         </select>
                        </div>

                        <div className="concluir">
                      
                            {total > 0 && (
                                <span className="total" > Total: R$ {total.toFixed(2).replace('.', ',')} 
                                </span>
                            )}
                            <button> Concluir </button>
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

                    <h2>Conheça nossas redes</h2>

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