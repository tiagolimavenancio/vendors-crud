const dbConfig = require('../database/db');

module.exports = {
    ip: process.env.IP || undefined,
    DEBUG: '',
    port: 8080,
    mongo: {
        uri: dbConfig.db
    },
    selfURL: 'http://localhost',
    webApp: {
        url: 'http://localhost:80'
    }
}