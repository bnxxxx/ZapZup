
import "./index.scss";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import Sobre from "../Sobre";
import Cabecalho from "../../components/cabecalho";



export default function Admin (){






 
  return (
    <div className="admin">



        <div className="cabecalho">
            <h1>Orçamentos</h1>



        </div>


        <div className="s1">
        <div className="menu">
            <h2>Breno</h2>





            <div className="status">
                <ul>
                    <li> em andamento
                    </li>

                    <li>concluido</li>

                    <li>cancelado</li>
                </ul>
            </div>
        </div>




        <div className="situacao">

            <div className="andamento">
                <h2>Em andamento</h2>
            <div className="amarela"></div>

            </div>

            
              <div className="concluida">
              <h2>Concluida</h2>
            <div className="verde"></div>

            </div>
            
            
            <div className="cancelada">
            <h2>Cancelada</h2>
            <div className="vermelha"></div>

            </div>
        </div>

        </div>





        
        
        
        
        
        
        
        </div>


   

);
}


        
        
        
        