import con from "./connection.js"


export async function inserirAtividade(atividade){
    const comando = `
        insert into ativadades (nome, descricao,dia, hora_inicio, hora_fim, id_local)
            values (?,?,?,?,?,?)
    `;

    let resposta = await con.query(comando, [atividade.nome, atividade.descricao, atividade.dia, atividade.hora_inicio, atividade.hora_fim, atividade.id_local])
    let info = resposta[0];

    return info.insertId;
}

export async function consultarAtividade (ativadades){
    const comando = `
    select id_atividade     id,
                nome        nome,
                descricao   descricao,
                hora_inicio hora_inicio,
                hora_fim    hora_fim,
                id_local    local
    from atividades
    where id_atividades = ?
    `;

    let resposta = await con.query(comando(ativadades));
    let registro = resposta[0];

    return registro;
}

export async function consultarAtividadePorId (Id){
    const comando = `
    select id_atividade     id,
                nome        nome,
                descricao   descricao,
                hora_inicio hora_inicio,
                hora_fim    hora_fim,
                id_local    local
    from atividades
    where id_atividades = ?
    `;

    let resposta = await con.query(comando(Id));
    let registro = resposta[0];

    return registro;
}

export async function alterarAtividade(id,ativadade){
    const comnando = `
        uptade ativadades
            set nome = ?,
                descricao = ?,
                hora_inicio = ?,
                hora_fim = ?,
                id_local =?
            where id_ativades    
    `;

    let resposta = await con.query(comnando[ativadade.nome, ativadade.descricao, ativadade.hora_inicio, ativadade.hora_fim, ativadade.id_local, id])
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerAtividade(id){
    const comando = `
        delete from atividades
        where id_atividade = ?    
    `
    let resposta = await con.query(comando,[id]);
    let info = resposta[0];

    return info.affectedRows

}
