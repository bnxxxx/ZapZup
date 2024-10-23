


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/inicio';
import Sobre from './pages/Sobre';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>  
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/Sobre' element={<Sobre/>} />
        
        
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);