const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getBookPage(topic, page, curPage = "") {
  let prompt;
  if (page === 1) {
    prompt = `Write the introductory page of a children's book about ${topic}. In terms of length, it should be between 50 and 100 words.`;
  } else {
    prompt = `Write the next page of a children's book about ${topic} in 50 to 100 words. Here is the current page: ${curPage}. `;
  }
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return completion.data.choices;
}

module.exports = getBookPage;
