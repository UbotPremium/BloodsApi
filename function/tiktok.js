const cheerio = require("cheerio")
const axios = require("axios")

const headers = {
    "authority": "ttsave.app",
    "accept": "application/json, text/plain, */*",
    "origin": "https://ttsave.app",
    "referer": "https://ttsave.app/en",
    "user-agent": "Postify/1.0.0",
};

const tiktokdl = {
    submit: async function(url, referer) {
        const headerx = { ...headers, referer };
        const data = { "query": url, "language_id": "1" };
        return axios.post('https://ttsave.app/download', data, { headers: headerx });
    },

    parse: function($) {
        const description = $('p.text-gray-600').text().trim();
        const dlink = {
            nowm: $('a.w-full.text-white.font-bold').first().attr('href'),
            audio: $('a[type="audio"]').attr('href'),
        };

        const slides = $('a[type="slide"]').map((i, el) => ({
            number: i + 1,
            url: $(el).attr('href')
        })).get();

        return { description, dlink, slides };
    },

    fetchData: async function(link) {
        try {
            const response = await this.submit(link, 'https://ttsave.app/en');
            const $ = cheerio.load(response.data);
            const result = this.parse($);
            return {
                video_nowm: result.dlink.nowm,
                audio_url: result.dlink.audio,
                slides: result.slides,
                description: result.description
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = { tiktokdl }