require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online!`);
});

client.on("messageCreate", (message) => {
  if (message.content.includes("https://x.com/")) {
    let newMessage = message.content.replace(
      "https://x.com",
      "https://fixupx.com"
    );
    message.reply(newMessage);
  }
});

client.on("messageCreate", (message) => {
  if (message.content.includes("https://twitter.com/")) {
    let newMessage = message.content.replace(
      "https://twitter.com/",
      "https://vxtwitter.com/"
    );
    message.reply(newMessage);
  }
});

client.login(process.env.TOKEN);
