module.exports = {
  config: {
    name: "muji",
    aliases: ["muji"],
    version: "1.0",
    author: "Strawhat Luffy",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription:"",
    category: "",
    guide: "{p}",
  },
  
  onStart: async function({ 
      
  }) {
   
  },
  onChat: async function () {
   if (event.body && event.body.toLowerCase() === "muji") {
 return message.reply("k bolya fuchhey jhyamma hannunparla")
   }   
  }
};