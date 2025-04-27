/* SimSimi (Artificial Intelligence)
 * Text, language
 * By *Jaxzy* (Aing ubah pake axios doang)
 */

const axios = require('axios')

async function SimSimi(text, language = 'id') {
  const { data } = await axios.post("https://api.simsimi.vn/v1/simtalk", new URLSearchParams({
    text,
    lc: language
  }).toString(), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
  })

  return data.message
}

module.exports = { SimSimi }