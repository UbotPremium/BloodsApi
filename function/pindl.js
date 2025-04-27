const axios = require("axios")

async function pindlVideo(urls) {
  const payload = {
    "endpoint": "/v1/scraper/pinterest/video-downloader", 
    "url": urls
  };
 
  const config = {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
  };
 
  try {
    const { data } = await axios.post("https://www.famety.com/v2/fallout-api", payload, config);
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("Error during the request:", error);
  }
};
 
module.exports = { pindlVideo }