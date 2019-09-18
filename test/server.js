const http = require('http');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios');
const AxiosLogger = require('../lib/index');

const app = new express();
const server = http.Server(app);
const port = process.env.PORT || 3000;

app.set('etag', false);
app.set('x-powered-by', false);
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());

app.get('/test/get', (req, res, next) => {
    const instance = axios.create({
        headers: { 'X-Custom-Header': 'foobar' },
    });
    instance.interceptors.request.use(AxiosLogger.requestLogger);
    instance.interceptors.response.use(AxiosLogger.responseLogger);

    instance.get('http://localhost:3000/echo/get?echo=hello').then((data) => {
        res.json(200);
    });
});

app.get('/test/post', (req, res, next) => {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosLogger.requestLogger);
    instance.interceptors.response.use(AxiosLogger.responseLogger);

    instance.post('http://localhost:3000/echo/post', { echo: 'hello' }).then((data) => {
        res.json(200);
    });
});

app.get('/test/get/error', (req, res, next) => {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
    instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);

    instance.get('http://localhost:3000/echo/notfound').catch(() => {
        res.sendStatus(404);
    });
});

/**
 *  This is Local echo API for test url.
 *  /test/* -> /echo/*
 */
app.get('/echo/get', (req, res, next) => {
    res.set({
        'X-Custom-Response': 'foobar',
    });
    res.json({
        status: 200,
        message: 'echo get',
    });
});

app.post('/echo/post', (req, res, next) => {
    res.set({
        'X-Custom-Response': 'foobar',
    });
    res.json({
        status: 200,
        message: 'echo post',
    });
});

process.on('SIGINT', function() {
    server.on('close', function() {
        process.exit(0);
    });
    server.close(function() {
        console.log('Server closed.');
    });
});

app.listen(port, () => {
    if (process.env.pm_id) {
        process.send('ready');
        console.log(`Server started. (port: ${port}, cluster_id: ${process.env.pm_id})`);
    } else {
        console.log(`Server started. (port: ${port}, fork mode)`);
    }
});
