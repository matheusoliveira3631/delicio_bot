const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config")

const messageHandler = require("./handlers/messageHandling")
const memberHandler = require("./handlers/memberHandling")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    await messageHandler.handleMessage(client, message)
});

client.on('guildMemberAdd', async member => {
    await memberHandler.handleMemberAction(client, member)
});

client.login(config.token);