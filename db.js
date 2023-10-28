import { createConnection } from 'mysql';

const conexao = createConnection({
    host: '127.0.0.1',
    user: "root",
    password: "root",
    database: "crud"
})

conexao.connect((err) => {
  if (err) {
        throw err;
    }
  console.log('Connected!');
});

export default conexao;