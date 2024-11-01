import { alterarUsuario, consultarUsuario, inserirUsuario } from '../repository/usuarioRepository';
import * as db from './repository/usuarioRepository.js'

import { Router } from 'express';
const endpoints = Router()

endpoints.get('/usuario', async (req, resp) => {
    try {
        let usuario = req.user.id;
        let registro = await db.consultarUsuario(usuario)
        resp.send(registro);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/usuario', async (req, resp) => {
    try {
        let id = req.user.id;
        let registro = await db.consultarUsuario(id)
        resp.send(registro[0]);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/reserva', async (req, resp) => {
    try {
        let reserva = req.body;
        reserva.idreserva = req.user.id;

        let id = await db.inserirUsuario(reserva)

        resp.send({
            novoId: id
        })
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/reserva/:id', async (req,resp) => {
    try{
        let id = req.params.id;
        let reserva = req.body;

        let linhasAfetadas = await db.alterarUsuario(id, reserva)
        if (linhasAfetadas >= 1 ){
            resp.send();
        }
        else {
            resp.status(404).send({erro:'Reserva não encontrada'})

        }
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

endpoints.delete('/reserva/:id', async (req,resp) => {
    try{
        let id = req.params.id;
        let reserva = req.body;

        let linhasAfetadas = await db.removerUsuario(id, reserva)
        if (linhasAfetadas >= 1 ){
            resp.send();
        }
        else {
            resp.status(404).send({erro:'Reserva deletada'})

        }
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

endpoints.post('/usuario/login', async (req, resp) => {
    try {
        const { email, senha } = req.body; 
        const usuario = await verificarLogin(email, senha); 

        if (usuario) {
            resp.send({ success: true, usuario });
        } else {
            resp.status(401).send({ erro: 'Credenciais inválidas' });
        }
    } catch (err) {
        resp.status(400).send({ erro: err.message }); 
    }
});