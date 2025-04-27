const axios = require("axios")

async function shortUrl(links) {
return new Promise(async (resolve, reject) => {
try {
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(links))
resolve(res.data.toString())
} catch (error) {
reject(error)
}
})
}

async function shortUrl2(links) {
return axios.get(`https://is.gd/create.php?format=simple&url=${links}`).then(response => response.data)
}

module.exports = { shortUrl, shortUrl2 }