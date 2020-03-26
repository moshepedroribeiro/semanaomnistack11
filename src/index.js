const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * MÉTODOS HTTP
 * 
 * GET: Buscar/listar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação do back-end
 */

 /**
  * TIPOS DE PARÂMETROS
  * 
  * Query Params: Parâmetros nomeados enviados na rota com o simbolo "?", podendo utilizar & para juntar mais filtros de busca - (Filtros, paginação)
  * Route Params: Parâmetros utiizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar e alterar recursos
  */

  /**
   * BANCOS DE DADOS
   * 
   * SQL: MySQL, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

app.listen(3333);