const {Router} = require('express');
const launchesRouter = Router();
const {httpGetAllLaunches, httpAddNewLaunches} = require('./launches.controller');

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunches);


module.exports = launchesRouter;