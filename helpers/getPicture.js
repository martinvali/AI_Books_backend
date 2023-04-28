const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});


async function getPicture(text) {
    let type = `Make a photo based on the following text: ${text}`
    const openai = new OpenAIApi(configuration);
    const res = await openai.createImage({
      prompt:type,
      n: 1,
      size: "512x512",
    });

    return res.data.data[0].url
  };

module.exports = getPicture;
