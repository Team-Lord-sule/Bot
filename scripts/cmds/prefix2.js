module.exports = {
 config: {
   name: "prefix",
   version: "1.0",
   author: "Lord king",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "𝑆𝑇𝑈𝑃𝐼𝐷",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "lord") {
 return message.reply({
 body: `
 𝑆𝑈𝑃 𝑀𝑌 𝐺𝑈𝑌𝑆, 𝑆𝑂 𝑇𝐻𝐼𝑆 𝐼𝑆 𝑀𝑌 𝑃𝑅𝐸𝐹𝐼𝑋 𝑆𝑂 𝐼𝑁𝐽𝑂𝑌 𝑇𝐻𝐸 𝐽𝑈𝑁𝐼𝑂𝑅 𝐵𝑂𝑇[.] 𝑃𝐸𝐴𝐶𝐸\n
`,
  attachment: await global.utils.getStreamFromURL("https://i.imgur.com/AubbSUX.mp4")
 });
 }
 }
}
