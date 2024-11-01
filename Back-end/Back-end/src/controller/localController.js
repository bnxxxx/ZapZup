import * as db from './repository/localRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.get('/local', async (req, resp) => {
    try {
        let local = req.body;

        let id = await db.consultarLocal(local);
        resp.send(id)

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/local/:id', async (req, resp) => {
    try {
        let local = req.body;

        let id = await db.consultarLocalporId(local);
        resp.send(id(0))

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.post('/local/', async (req, resp) => {
    try {
        let local = req.body;

        let id = await db.inserirlocal(local);

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

endpoints.put('/local/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let local = req.body

        let linhasAfetadas = await db.alterarLocal(id, local);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encrontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

}
)

endpoints.delete('/local/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let local = req.body

        let linhasAfetadas = await db.removerLocal(id, local);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encrontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

}
)



export default endpoints;