const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "owner",
    aliases: ["info","MR PERFECT"],
    author: " Mr perfect ", 
    version: "2.0",
    cooldowns: 0,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "get bot owner info"
    },
    category: "owner",
    guide: {
      en: "{p}{n}"
    }
  },
  onStart: async function ({ api, event }) {
      try {
        const loadingMessage = "𝑃𝑟𝑜𝑐𝑒𝑠𝑠𝑖𝑛𝑔......ジ";
        await api.sendMessage(loadingMessage, event.threadID);

        const ownerInfo = {
          name: '𝑳𝑶𝑹𝑫 𝑲𝑰𝑵𝑮',
          gender: '𝑩𝑶𝒀',
          hobby: '𝑮𝑼𝑵 𝑭𝑰𝑹𝑰𝑵𝑮 𝑨𝑵𝑫 𝑪𝑶𝑫𝑰𝑵𝑮 ',
          relationship: '𝑵𝑶𝑷𝑬',
          facebookLink: 'https://m.me/lordjaydenSmith.1',
          bio: '𝑳𝑰𝑭𝑬 𝑰𝑺 𝑭𝑼𝑳𝑳 𝑶𝑭 𝑾𝑶𝑵𝑫𝑬𝑹𝑺'
        };

        const videoUrl = 
["https://i.imgur.com/DQjXVtv.mp4","","","","","",];
        const tmpFolderPath = path.join(__dirname, 'tmp');

        if (!fs.existsSync(tmpFolderPath)) {
          fs.mkdirSync(tmpFolderPath);
        }

        const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
        const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

        fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

        const response = `
       𝕆𝕨𝕟𝕖𝕣 𝕀𝕟𝕗𝕠𝕣𝕞𝕒𝕥𝕚𝕠𝕟
««««««««««««««»»»»»»»»»»»»»»  
☆☆☆☆☆☆(◠‿◠)☆☆☆☆☆☆     
𝙉𝙖𝙢𝙚:${ownerInfo.name}          
𝙂𝙚𝙣𝙙𝙚𝙧:${ownerInfo.gender}
𝙃𝙤𝙗𝙗𝙮:${ownerInfo.hobby}
𝙍𝙚𝙡𝙚𝙖𝙩𝙞𝙤𝙣𝙨𝙝𝙞𝙥:${ownerInfo.relationship}
𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙡𝙞𝙣𝙠:${ownerInfo.facebookLink}
𝙂𝙤𝙖𝙡𝙨:${ownerInfo.bio} 
        `;

        await api.sendMessage({
          body: response,
          attachment: fs.createReadStream(videoPath)
        }, event.threadID);
      } catch (error) {
        console.error('Error in owner command:', error);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
      }
    },
    onChat: async function({ api, event }) {
      try {
        const lowerCaseBody = event.body.toLowerCase();

        if (lowerCaseBody === "owner" || lowerCaseBody.startsWith("{p}owner")) {
          await this.onStart({ api, event });
        }
      } catch (error) {
        console.error('Error in onChat function:', error);
      }
    }
  };
