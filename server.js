import { fastify } from 'fastify'
import { Cliente } from './Cliente.js';

const server = fastify();
const cliente = new Cliente()
server.get('/cliente', (request, response) => {
    cliente.listar().then(lista => {
        response.send(lista)
    })
    .catch(erro => {
        console.log(erro)
        response.status(500).send(erro)
    });
});

server.post('/cliente', (request, response) => {
    const dados = request.body;

    cliente.criar(dados)
        .then(retorno => response.status(201).send(retorno))
        .catch(erro => {
            console.log(erro)
            response.status(500).send(erro)
        });
});

server.put('/cliente/:id', (request, response) => {
    const dados = request.body;
    const id = request.params.id;

    cliente.editar(id, dados)
        .then(retorno => response.status(201).send(retorno))
        .catch(erro => {
            console.log(erro)
            response.status(500).send(erro)
        });
});

server.delete('/cliente/:id', (request, response) => {
    const id = request.params.id;

    cliente.deletar(id)
        .then(retorno => response.status(201))
        .catch(erro => {
            console.log(erro)
            response.status(500).send(erro)
        });
});

server.listen({
    port: 3333
})