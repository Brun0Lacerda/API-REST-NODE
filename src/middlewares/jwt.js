/* eslint-disable no-undef */
require('dotenv').config();
const jwt = require('jsonwebtoken');

function protectRoute(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
        return res.status(401).json({ sucesso: false, mensagem: 'Token não fornecido.' });
    }

    const partesToken = bearerHeader.split(' ');
    if (partesToken.length !== 2 || partesToken[0] !== 'Bearer') {
        return res.status(401).json({ sucesso: false, mensagem: 'Formato de token inválido.' });
    }

    const token = partesToken[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = payload;
        next();
    } catch (error) {
        return res.status(401).json({ sucesso: false, mensagem: 'Token inválido.' });
    }
}

module.exports = protectRoute;
