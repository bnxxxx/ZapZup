import "./index.scss"
import { useState } from "react";

import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Rodape from '../../components/rodape'
import Cabecalho from "../../components/cabecalho";
=======
import Cabecalho from "../../components";
>>>>>>> e99752726de4e14e5ad26930bf6962909b7dc679


export default function Login() {


    return (


        <div className="login">
<<<<<<< HEAD

            

=======
            <Cabecalho/>
>>>>>>> e99752726de4e14e5ad26930bf6962909b7dc679

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


            <Rodape/>



        </div>














    )


}