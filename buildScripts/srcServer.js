import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
    // Hard coded examples for simplicity. This could be connected to a real DB
    res.json([
        {'id': 1, 'firstName':'long', 'lastName': 'boi', 'email':'long@boi.com'},
        {'id': 2, 'firstName':'fat', 'lastName': 'boi', 'email':'fat@boi.com'},
        {'id': 3, 'firstName':'sad', 'lastName': 'boi', 'email':'sad@boi.com'}
    ]);
});

app.listen(port, function (err) {
    if(err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
