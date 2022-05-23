const search = require("youtube-search")
const discord = require("discord.js")
const config = require("../config")

const ytSearch = async(client, message) =>{
    var opts = {
        maxResults: 100,
        key: config.YOUTUBE_API_KEY
    };
    const embed = new discord.MessageEmbed()
    search("toninho tornado", opts, function(err, results) {
    if(err) return console.log(err);
        message.channel.send(results[Math.floor((Math.random()*results.length))].link)
    });
}

module.exports = ytSearch