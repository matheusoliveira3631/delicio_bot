const randomItem = require("../utils/randomList")

const troteGenerator = async (client, message)=>{
    const trote = randomItem()
    message.channel.send(trote)
}

module.exports = troteGenerator