'use strict';

require('dotenv-extended').load();

const restify = require('restify');
const bot = require('./modules/bot');

const server = restify.createServer();
server.post('/bot', bot.connector('*').listen());
server.listen(process.env.PORT, () => {
    console.log('%s listening to %s', server.name, server.url);
});