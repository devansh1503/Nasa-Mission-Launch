const express = require('express')
const {planetRouter} = require('./routes/planets/planets.route')
const {launchRouter} = require('./routes/launches/launches.route')
const cors = require('cors')

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
}))
app.use(express.json())
app.use(planetRouter)
app.use(launchRouter)

module.exports = app