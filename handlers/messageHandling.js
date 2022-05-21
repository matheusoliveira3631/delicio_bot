const troteGenerator = require("../commands/trote")

const messageHandler = {
    handleMessage:async (client, message)=>{
        let content=message.content.toLowerCase()
        if (content.startsWith("!") && content.length>1)
        {
            if(!messageHandler.Commands[content])
            {
                message.channel.send("Tá panguando no bagulho?")
            }
            else
            {
                await messageHandler.Commands[content](client, message)
            }
        }
        else
        {
            for (handler of Object.values(messageHandler.Handlers))
            {
                await handler(client, message)
            }
        }
        
    },
    Handlers:{
    acho:async (client, message) =>{
        if((message.content.toLowerCase().includes("acha") || 
        message.content.toLowerCase().includes("acho")) && 
        message.author.username != client.user.username)
            {   
                await message.channel.send(`${message.author.toString()}, Tá achando? Pega 1 alho lá`)          
            }
    }
    },
    Commands:{
        "!trote": async (client, message)=>{
            await troteGenerator(client, message)
        }
    }
}

module.exports = messageHandler