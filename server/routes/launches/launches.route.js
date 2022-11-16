const express = require('express')
const app = require('../../app')
const {getLaunches, postLaunch, deleteLaunch} = require('./launches.controller')

const launchRouter = express.Router()

launchRouter.get('/launches', getLaunches)
launchRouter.post('/launches', postLaunch)
launchRouter.delete('/launches/:id', deleteLaunch)

module.exports = {
    launchRouter,
}