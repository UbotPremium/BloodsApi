const axios = require("axios")
const cheerio = require("cheerio")
 
async function lirikLagu(search) {
  try {
    let { data } = await axios.get(`https://www.lyrics.com/lyrics/${search}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache',
        'DNT': '1',
        'Upgrade-Insecure-Requests': '1'
      }
    });
 
    let $ = cheerio.load(data);
    let results = [];
 
    $('.sec-lyric').each((i, el) => {
      let title = $(el).find('.lyric-meta-title a').text().trim();
      let artist = $(el).find('.lyric-meta-album-artist a, .lyric-meta-artists a').text().trim();
      let lyric = $(el).find('.lyric-body').text().trim();
 
      if (title && artist && lyric) {
        results.push({ title, artist, lyricSingkat: lyric });
      }
    });
 
    return results;
  } catch (error) {
    console.error('Error fetching lyrics:', error);
    return [];
  }
}

module.exports = { lirikLagu }