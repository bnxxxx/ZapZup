import con from "./connection.js"


export async function inserirUsuario(usuario){
    const comando = `
        insert into usuario (nome,email,senha)
            values (?,?,?)
    `;

    let resposta = await con.query(comando, [usuario.nome,usuario.email,usuario.senha])
    let info = resposta[0];

    return info.insertId;
}

export async function consultarUsuario (usuario){
    const comando = `
    select id_usuario       id,
                nome        nome,
                email       email,
                senha       senha
    from usuario
    where id_usuario = ?
    `;

    let resposta = await con.query(comando, [usuario]);
    let registro = resposta[0];

    return registro;
}

export async function consultarUsuarioporId (Id){
    const comando = `
    select id_usuario       id,
                nome        nome,
                email       email,
                senha       senha,
    from usuario
    where id_usuario = ?
    `;

    let resposta = await con.query(comando, [0]);
    let registro = resposta[0];

    return registro;
}

export async function alterarUsuario(id,usuario){
    const comnando = `
        update usuario
            set nome = ?,
                email = ?,
                senha = ?
            where id_usuario = ? 
    `;

    let resposta = await con.query(comnando, [usuario.nome,usuario.email,usuario.senha,id])
    let info = resposta[0]

    return info.affectedRows;
}

export async function removerUsuario(id){
    const comando = `
        delete from usuario
        where id_usuario = ?    
    `
    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows

}


export async function verificarLogin(email, senha) {
    const comando = `
        select  id_usuario  id,
                nome,
                email
        from usuario
        where email = ? and senha = ?
    `;
    const resposta = await con.query(comando, [email, senha]); 
    const usuario = resposta[0];

    return usuario[0]
}