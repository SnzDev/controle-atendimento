const connection = require('../config/knex');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secret = 'iOB0dfU$7';

module.exports = {
    async store(req, res) {
        const { email, senha } = req.body;
        try {
            const response = await connection('usuarios').where({ email });
            const id = response[0].id;

            bcrypt.compare(senha, response[0].senha, function (err, respon) {
                if (respon) {
                    const token = jwt.sign({ id }, secret, {
                        expiresIn: 1440
                    });
                    return res.json({ auth: true, token: token, usuario: response[0] });
                } else {
                    return res.json({ auth: false });
                }
            });

        } catch (err) {
            res.json('erro')
        }

    }
}