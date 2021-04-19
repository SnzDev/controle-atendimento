const connection = require('../../knexfile');

module.exports = {
    async index(req, res) {
        res.json('teste');
    },
    async store(req, res) {
        res.json('teste');
    },
    async show(req, res) {
        res.json('teste');
    },
    async delete(req, res) {
        res.json('teste');
    },
}