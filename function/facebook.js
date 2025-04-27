const getFbVideoInfo = require("imon-videos-downloader")
require("../settings.js")

async function fbdl(fbUrl) {
try {
    const res = await getFbVideoInfo.ndown(fbUrl);
    return res.data
    } catch (error) {
    return console.log(error)
    }
}

module.exports = { fbdl }

