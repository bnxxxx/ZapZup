import "./index.scss"
import { useState } from "react";

import { Link } from 'react-router-dom';
import Cabecalho from "../../components";


export default function Login() {


    return (


        <div className="login">
            <Cabecalho/>

            <div className="container">
                <div className="titulo">
                    <h1>Login <br />
                        Zap Zup</h1>
                </div>

                <div className="inputs">

                <div className="email">
                    <h2>Email</h2>
                    <input type="text" />
                </div>
                <div className="senha">

                    <h2>Senha</h2>
                    <input type="text" />
                </div>

                </div>
                <button className="botao">Entra</button>
            </div>




        </div>














    )


}