const {launches, addElement, deleteEle} = require('../../model/launchdata/index')

function getLaunches(req, res){
    res.json(Array.from(launches.values()))
}

function postLaunch(req, res){
    const launch = req.body
    console.log(launch)
    launch.launchDate = new Date(launch.launchDate)
    addElement(launch)
    return res.status(201).json(Array.from(launches.values()))
}

function deleteLaunch(req, res){
    const id = req.params.id
    console.log(id)
    deleteEle(id)
    return res.status(200).json(Array.from(launches.values()))

}


module.exports = {
    getLaunches,
    postLaunch,
    deleteLaunch,
}