const {join} = require('path');
const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router');
const morgan = require("morgan");

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/planets', planetsRouter);
app.use('/launches',launchesRouter);
app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;