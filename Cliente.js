import conexao from './db.js'

export class Cliente {
    listar() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM cliente';

            conexao.query(sql, (erro, retorno) => {
                if(erro) {
                    reject('Erro ao consultar: ' + erro);
                    return;
                }

                resolve(retorno);
            })
        });
    }

    criar(usuario) {
        return new Promise((resolve, reject) => {
            const { nome, senha, nome_empresa, cnpj, cep, endereco, telefone, email } = usuario;
            const sql = `INSERT INTO cliente (nome, senha, nome_empresa, cnpj, cep, endereco, telefone, email) VALUES ('${nome}', '${senha}', '${nome_empresa}', '${cnpj}', '${cep}', '${endereco}', '${telefone}', '${email}')`;

            conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject('Erro ao consultar: ' + erro);
                    return;
                }

                resolve(retorno);
            })
        });
    }

    editar(id, usuario) {
        return new Promise((resolve, reject) => {
            const { nome, senha, nome_empresa, cnpj, cep, endereco, telefone, email } = usuario;
            const sql = 
            `UPDATE cliente
                SET 
                    nome = '${nome}',
                    senha = '${senha}',
                    nome_empresa = '${nome_empresa}',
                    cnpj = '${cnpj}',
                    cep = '${cep}',
                    endereco = '${endereco}',
                    telefone = '${telefone}',
                    email = '${email}'
                WHERE id = ${id}`;
            
            conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject('Erro ao consultar: ' + erro);
                    return;
                }

                resolve(retorno);
            })
        });
    }


    deletar(id) {
        return new Promise((resolve, reject) => {
           const sql = `delete from cliente where id = ${id}`
            
           conexao.query(sql, (erro, retorno) => {
                if (erro) {
                    reject('Erro ao consultar: ' + erro);
                    return;
                }

                resolve(retorno);
            })
        });
    }
}