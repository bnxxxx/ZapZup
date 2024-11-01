import * as db from './repository/reservaRepository.js'

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/reserva', async (req, resp) => {
    try {
        let idreserva = req.user.id;
        let registro = await db.consultarReserva(idreserva);
        resp.send(registro);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/reserva/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let registro = await db.consultarReservaporId(id);
        resp.send(registro(0));
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
        pessoa.idreserva = req.user.id

        let id = await db.inserirReserva(reserva)

        resp.send({
            novoId: Id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/reserva/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let reserva = req.body;

        let linhasAfetadas = await db.alterarReserva(id, reserva)
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'nenhuma reserva encontrada' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/reserva/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let reserva = req.body;

        let linhasAfetadas = await db.removerReserva(id, reserva)
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'nenhuma reserva encontrada' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;