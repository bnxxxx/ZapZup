import con from "./connection.js"


export async function inserirParcipante(participante){
    const comando = `
        insert into ativadades (nome, email,telefone,idade)
            values (?,?,?,?)
    `;

    let resposta = await con.query(comando, [participante.nome, participante.email, participante.idade])
    let info = resposta[0];

    return info.insertId;
}

export async function consultarParticipante (participante){
    const comando = `
    select id_participante  id,
                email       email,
                telefone    telefone,
                idade       idade
    from participante
    where id_participante = ?
    `;

    let resposta = await con.query(comando(participante));
    let registro = resposta[0];

    return registro;
}

export async function consultarParticipantePorId (Id){
    const comando = `
    select id_participante  id,
                email       email,
                telefone    telefone,
                idade       idade
    from participante
    where id_participante = ?
    `;

    let resposta = await con.query(comando(Id));
    let registro = resposta[0];

    return registro;
}

export async function alterarParticipante(id,participante){
    const comnando = `
        uptade participante
            set nome = ?,
                email = ?,
                telefone = ?,
                idade = ?,
            where id_participante    
    `;

    let resposta = await con.query(comnando[participante.nome,participante.email,participante.telefone,participante.idade, id])
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerParticipante(id){
    const comando = `
        delete from participante
        where id_participante = ?    
    `
    let resposta = await con.query(comando,[id]);
    let info = resposta[0];

    return info.affectedRows

}
