import * as db from './repository/atividadeparticipante.js'

import { Router } from "express";
const endpoints = Router();

endpoints.get ('/participar' ,async (req,resp) => {
    try{
        let idparticipante = req.user.id;
        let registro = await db.consultarParticpante(idparticipante);
        resp.send (registro);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/participar/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let registros = await db.consultarParticipantePorId(id);
        resp.send(registros[0]);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.post('/participar/', autenticar, async (req, resp) => {
    try {
        let participante = req.body;
        participante.idparticipante = req.user.id;

        let id = await db.inserirParticipante(participante);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/participar/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
        let participante = req.body;

        let linhasAfetadas = await db.alterarParticipante(id, participante);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



endpoints.delete('/participante/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerParticipante(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;