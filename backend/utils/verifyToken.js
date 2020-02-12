const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/secrets');

const VerifyToken = express.Router();

VerifyToken.use((req, res, next) => {
    const token = req.headers['x-access-token'];
    
    if(!token) {
        return res.status(403).json({ auth: false, message: "No Token" });
    }

    jwt.verify(token, config.secrets.session, (err, decoded) => {
        if(err) {
            return res.status(401).json({ auth: false, message: "Not An Authorized User" });
        }

        req.body.user_id = decoded.user_id;
        req.body.username = decoded.username;
        next();
    })
})

module.exports = VerifyToken;