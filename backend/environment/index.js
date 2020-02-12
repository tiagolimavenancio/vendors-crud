const path = require('path');
const _ = require('lodash');

if(!process.env.VENDOR_NODE_ENV) {
    requiredProcessEnv(VENDOR_NODE_ENV);
    process.exit(2);
}

function requiredProcessEnv(name) {
    if(!process.env[name]) {
        throw new Error('You must set the ' + name + ' environment variable');
    }
    return process.env[name];
}

const config = {
    env: process.env.VENDOR_NODE_ENV,
    root: path.normalize(__dirname + '/../../'),
    port: process.env.PORT || 8000,
    ip: process.env.IP || '0.0.0.0',
    seedDB: false,
    mongo: {
        options: {
            useNewUrlParser: true
        }
    },
    selfDomain: 'erpfs.com'
}

module.exports = _.merge(
    config,
    require('./' + process.env.VENDOR_NODE_ENV + '.js') || {},
    require('../database/db'),
    require('../config/secrets'),
);