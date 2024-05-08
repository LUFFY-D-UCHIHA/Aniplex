module.exports = {
  config: {
    name: "changenick",
    aliases: ["cnick"],
    version: "1.0",
    author: "Strawhat Luffy",
    role: 1,
    shortDescription: "Change the nickname of a user",
    longDescription: "This command that allows to change the nickname of a user.",
    category: "name",
    guide: "{p}changenick [newNickname]",
  },

  onStart: async function ({ event, args, api }) {
    const newNickname = args.join(" ").split("=").map(item => item.trim());

    if (!newNickname) {
      return api.sendMessage("Please provide the new nickname.", event.threadID);
    }
else{
    api.changeNickname(`${newNickname}`, event.threadID, event.senderID);
    }
  }
}