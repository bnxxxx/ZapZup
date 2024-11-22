


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/inicio';
import Sobre from './pages/Sobre';
import { register } from "swiper/element/bundle";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Agendamento from './pages/agendamento';
import Login from './pages/login';
import Admin from './pages/admin';
import Comeco from './pages/inicio';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Comeco/>} />z
        <Route path='/agendamento' element={<Agendamento/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<Admin/>} />
      
        
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);