const express = require('express')
const {planetControl} = require('./planets.controller')

const planetRouter = express.Router()

planetRouter.get('/planets', planetControl)

module.exports = {
    planetRouter,
}