const { ImageUploadService } = require('node-upload-images')
require("../settings.js")

async function uploaderImg (buffer) {
try {
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(buffer, 'skyzo.png');
return {
status: true, 
creator: global.creator,
url: directLink
}
} catch (error) {
return {
status: false, 
creator: global.creator,
message: "error"
}
}
}


module.exports = { uploaderImg }