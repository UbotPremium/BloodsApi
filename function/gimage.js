var gis = require('async-g-i-s');

async function googleImage(query) {
    try {
let res = await gis(query)
return res
    } catch (error) {
        console.log(error)
    }
}

module.exports = { googleImage }