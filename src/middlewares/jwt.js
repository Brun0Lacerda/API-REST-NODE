/* eslint-disable no-undef */
require('dotenv').config();
const jwt = require('jsonwebtoken');

function protectRoute(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (!bearerHeader) {
        return res.status(401).json({ success: false, message: 'Token not provided.' });
    }

    const tokenParts = bearerHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        return res.status(401).json({ success: false, message: 'Invalid token format.' });
    }

    const token = tokenParts[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid token.' });
    }
}

module.exports = protectRoute;
