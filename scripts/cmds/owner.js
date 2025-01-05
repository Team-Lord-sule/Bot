const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"lord king",// Convert By Goatbot-v3 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "𝘖𝘞𝘕𝘌𝘙 𝘐𝘕𝘍𝘖",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: 'Jayden Smith',
      gender: 'Male',
      age: '18+',
      facebookLink: 'https://www.facebook.com/lordjaydenSmith.1',
      nick: 'Jay junior'
    };

    const bold = 'https://i.imgur.com/DDO686J.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
𝑻𝑨𝑲𝑬 𝑨 𝑳𝑶𝑶𝑲 𝑨𝑻 𝑴𝒀 𝑶𝑾𝑵𝑬𝑹 𝑰𝑵𝑭𝑶.
 ☜♡☞
\n❃━━━━━━━━━𝗪𝗛𝗔𝗧━━━━━━━━━━❃\n
❊ 𝑁𝐴𝑀𝐸: ${ownerInfo.name}
❊ 𝐺𝐸𝑁𝐷𝐸𝑅: ${ownerInfo.gender}
❊ 𝐴𝐺𝐸: ${ownerInfo.age}
❊ 𝐹𝐴𝐶𝐸𝐵𝑂𝑂𝐾: ${ownerInfo.facebookLink}
❊ 𝑁𝐼𝐶𝐾: ${ownerInfo.nick}
\n❃━━━━━━━━━━━━━━━━━━━━━━❃\n
𝘏𝘢𝘷𝘦 𝘢 𝘨𝘰𝘰𝘥 𝘵𝘪𝘮𝘦 𝘶𝘴𝘪𝘯𝘨 𝘮𝘺 𝘩𝘦𝘭𝘱 ☆(❁‿❁)☆
\n❁━━━━━━━━━━━━━━━━━━━━━━❁\n
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
