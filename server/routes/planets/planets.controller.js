const {planet} = require('../../model/planetdata/index')

const rs = []
function planetControl(req,res){
    res.json(planet)
}

module.exports = {
    planetControl
}