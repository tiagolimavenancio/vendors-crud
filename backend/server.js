require('dotenv').config();

process.env.VENDOR_NODE_ENV = process.env.VENDOR_NODE_ENV || 'development';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const errorHandler = require('errorhandler');

const dbConfig = require('./database/db');
const routes = require('./routes');
const config = require('./environment');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/v1', routes);

mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connected');
}).catch(err => {
    console.log('Can not connect to the database. ' + err);
})

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    if (!err.statusCode) 
        err.statusCode = 500;

    res.status(err.statusCode).send(err.message);
});

const env = app.get('env');
if('development' === env || 'test' === env) {
    app.use(morgan('dev'));
    app.use(errorHandler()); 
}

app.listen(config.port, config.ip, () => {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});





