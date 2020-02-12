const dbConfig = require('../database/db');

module.exports = {
    ip: '0.0.0.0',
    DEBUG: '',
    port: 8080,
    mongo: {
        uri: 'mongodb://localhost:27017/vendor_test_erp'
    },
    selfURL: 'http://localhost',
    webApp: {
        url: 'http://localhost:80'
    }
}