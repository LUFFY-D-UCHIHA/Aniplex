const axios = require('axios');

async function encodeText(text) {
  try {
    const response = await axios.post('https://api.api-ninjas.com/v1/embeddings', {
      texts: [text]
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (response.status === 200) {
      return response.data.embeddings[0];
    } else {
      throw new Error('Failed to encode text');
    }
  } catch (error) {
    throw new Error('Failed to encode text');
  }
}

module.exports = {
  config: {
    name: 'encodes',
    aliases: ['encds'],
    version: '1.0',
    author: 'Strawhat Luffy',
    countDown: 5,
    role: 0,
    shortDescription: {
      en: 'Encode text into a vector',
      ne: 'पाठलाई भेक्टरमा इन्कोड गर्नुहोस्'
    },
    longDescription: {
      en: 'Encode any text into a vector using state-of-the-art NLP machine learning models. This can be used to power semantic search and text comparison tools.',
      ne: 'अत्याधुनिक NLP मेसिन लर्निङ मोडेलहरू प्रयोग गरेर कुनै पनि पाठलाई भेक्टरमा इन्कोड गर्नुहोस्। यो सिमान्टिक खोज र पाठ तुलना उपकरणहरू शक्ति गर्न प्रयोग गर्न सकिन्छ।'
    },
    category: 'text',
    guide: {
      en: '{p}encodes <text>',
      ne: '{p}encodes <sabda>'
    },
  },

  onStart: async function ({ event, message, args }) {
    if (args.length > 0) {
      try {
        const text = args.join(' ');
        const encodedText = await encodeText(text);
        message.reply(`The encoded vector for "${text}" is: ${encodedText}`);
      } catch (error) {
        message.reply('Failed to encode text');
      }
    } else {
      message.reply('Please provide the text you want to encode');
    }
  }
};