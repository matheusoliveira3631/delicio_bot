const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    console.log(`Message: ${message}`)
    if(message.content.toLowerCase().includes("acho"))
    {   
        message.channel.send("Tá achando? Pega 1 alho lá")          
    }
});


client.on('guildMemberAdd', async member => {
    const channel = await member.guild.channels.fetch('973759236356050957')
    channel.send({
        files: [{
          attachment: 'file.jpg',
          name: 'file.jpg',
          description: 'A description of the file'
        }]
      })
        .then(console.log("Image sent"))
        .catch(console.error);
        
    await channel.send(`Fala ${member.displayName}, belê?`)

});

client.login(config.token);