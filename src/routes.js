const express = require('express')
const routes = express.Router();

const atendimentosController = require('./controller/atendimentosController');
const cargosController = require('./controller/cargosController');
const clientesController = require('./controller/clientesController');
const tipo_osController = require('./controller/tipo_osController');
const usuariosController = require('./controller/usuariosController');


routes.get('/atendimentos', atendimentosController.index);
routes.post('/atendimentos', atendimentosController.store);
routes.get('/atendimento/:id', atendimentosController.show);
routes.delete('/atendimento/:id', atendimentosController.delete);

routes.get('/cargos', cargosController.index);
routes.post('/cargos', cargosController.store);
routes.get('/cargo/:id', cargosController.show);
routes.delete('/cargo/:id', cargosController.delete);

routes.get('/clientes', clientesController.index);
routes.post('/clientes', clientesController.store);
routes.get('/cliente/:id', clientesController.show);
routes.delete('/cliente/:id', clientesController.delete);

routes.get('/tipo_os', tipo_osController.index);
routes.post('/tipo_os', tipo_osController.store);
routes.get('/tipo_o/:id', tipo_osController.show);
routes.delete('/tipo_os/:id', tipo_osController.delete);

routes.get('/usuarios', usuariosController.index);
routes.post('/usuarios', usuariosController.store);
routes.get('/usuario/:id', usuariosController.show);
routes.delete('/usuarios/:id', usuariosController.delete);

module.exports = routes;