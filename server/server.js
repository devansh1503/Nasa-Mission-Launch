const http = require('http')
const app = require('./app')
const {getPlanets} = require('./model/planetdata/index')
const PORT = process.env.PORT || 8000

async function serve(){
    await getPlanets();
    const server = http.createServer(app);
    server.listen(PORT, ()=>{console.log(`Listening on http://localhost:${PORT}/`)})
}
serve()