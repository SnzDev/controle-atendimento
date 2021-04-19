const express = require('express')
const routes = express.Router();

const atendimentosController = require('./controller/atendimentosController');
const cargosController = require('./controller/cargosController');
const clientesController = require('./controller/clientesController');
const tipo_osController = require('./controller/tipo_osController');
const usuariosController = require('./controller/usuariosController');


routes.get('/atendimentos', atendimentosController.index);
routes.post('/atendimentos', atendimentosController.store);
routes.get('/atendimento', atendimentosController.show);
routes.delete('/atendimentos', atendimentosController.delete);

routes.get('/cargos', cargosController.index);
routes.post('/cargos', cargosController.store);
routes.get('/cargo', cargosController.show);
routes.delete('/cargos', cargosController.delete);

routes.get('/clientes', clientesController.index);
routes.post('/clientes', clientesController.store);
routes.get('/cliente', clientesController.show);
routes.delete('/clientes', clientesController.delete);

routes.get('/tipo_os', tipo_osController.index);
routes.post('/tipo_os', tipo_osController.store);
routes.get('/tipo_o', tipo_osController.show);
routes.delete('/tipo_os', tipo_osController.delete);

routes.get('/usuarios', usuariosController.index);
routes.post('/usuarios', usuariosController.store);
routes.get('/usuario', usuariosController.show);
routes.delete('/usuarios', usuariosController.delete);

module.exports = routes;