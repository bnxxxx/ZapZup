import * as db from './repository/atividadeRepository.js'

import { Router } from "express";
const endpoints = Router();

endpoints.get ('/atividade' ,async (req,resp) => {
    try{
        let idatividade = req.user.id;
        let registro = await db.consultarAtividade(idatividade);
        resp.send (registro);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

 endpoints.get ('/atividade/:id', async (req, resp) => {
    try{
        let id = req.params.id;
        let registro = await db.consultarAtividadePorId(id);
        resp.send(registro(0));
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
 })

 endpoints.post('/atividade/',async (req, resp) => {
    try {
        let atividade = req.body;
        pessoa.idlocal = req.user.id;

        let id = await db.inserirAtividade(atividade);

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


endpoints.put('/atividade/:id',async (req, resp) => {
    try {
        let id = req.params.id;
        let atividade = req.body;

        let linhasAfetadas = await db.alterarAtividade(id, atividade);
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

endpoints.delete('/atividade/:id',async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerAtividade(id);
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





