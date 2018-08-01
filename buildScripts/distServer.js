import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
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
