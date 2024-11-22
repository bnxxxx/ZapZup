import { API_URL } from './config';
import axios from 'axios';

export async function criarAtividade(atividade) {
    const resposta = await api.post("/atividades", atividade);
    return resposta.data;
}

export async function consultarAtividades(id = null) {
    if (id) {
        const resposta = await api.get(`/atividades/${id}`);
        return resposta.data;
    }
    const resposta = await api.get("/atividades");
    return resposta.data;
}

export async function atualizarAtividade(id, atividade) {
    const resposta = await api.put(`/atividades/${id}`, atividade);
    return resposta.data;
}

export async function removerAtividade(id) {
    const resposta = await api.delete(`/atividades/${id}`);
    return resposta.data;
}