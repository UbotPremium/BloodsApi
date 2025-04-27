const formData = require("form-data")
const cheerio = require("cheerio")
const axios = require("axios")

async function doodS(url) {
  try {
    const formData = new FormData();
    formData.append("video_url", url);
 
    const headers = {
      headers: {
        ...formData.getHeaders()
      }
    };
 
    const { data } = await axios.post("https://grabnwatch.com/doods.pro", formData, headers);
    const $ = cheerio.load(data);
 
    const videoTitle = $("#preview p.h5").text().trim();
    const previewImage = $("#preview img.make-it-fit").attr("src");
    const downloadLink = $("#result a").attr("href");
 
    return {
      title: videoTitle || "No title found",
      previewImage: previewImage ? `https://img.doodcdn.co${previewImage}` : null,
      downloadLink: downloadLink ? `https://grabnwatch.com${downloadLink}` : null
    };
  } catch (error) {
    console.error("Error during request:", error);
    throw error;
  }
}
 
module.exports = { doodS }