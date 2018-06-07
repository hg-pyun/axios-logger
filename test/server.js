import http from 'http';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import axios from 'axios';
import {requestLogger} from '../src/index';

const app = new express();
const server = http.Server(app);
const port = process.env.PORT || 3000;

app.set('etag', false);
app.set('x-powered-by', false);
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());

app.get('/get', (req, res, next) => {
    const instance = axios.create();
    instance.interceptors.request.use(requestLogger);

    instance.get('http://localhost:3000/echo/get?echo=hello').then((data)=>{
        res.json(200);
    });
});

app.get('/echo/get', (req, res, next)=>{
    res.json({
        status: 201,
        message: 'echo'
    });
});

app.post('/post', (req, res, next) => {

});

process.on('SIGINT', function () {
    server.on('close', function () {
        process.exit(0);
    });
    server.close(function () {
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
