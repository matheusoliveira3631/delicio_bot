const messageHandler = {
    handleMessage:async (client, message)=>{
        for (handler of Object.values(messageHandler.Handlers)){
            await handler(client, message)
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
}
}

module.exports = messageHandler