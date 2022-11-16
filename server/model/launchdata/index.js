const launches = new Map()

var lastid = 100;

const data = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 25, 2029'),
    target: 'Kepler-442 b',
    customer: ['NOAA', 'NASA'],
    upcoming: true,
    success: true,
}

launches.set(data.flightNumber, data)

function addElement(launch){
    launches.set(++lastid, Object.assign(launch,{
        flightNumber: lastid,
        customer: ['Ram Rahim', 'Elon Musk'],
        upcoming: true,
        success: true,
    }))
}
function deleteEle(id){
    launches.delete(id)
}

module.exports = {
    launches,
    addElement,
    deleteEle,
}