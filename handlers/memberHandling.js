const memberHandler = {
    handleMemberAction :async (client, member)=>{
        for (handler of Object.values(memberHandler.Handlers)){
            await handler(client, member)
        }
    },
    Handlers:{
        add: async (client, member)=>{
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
        }
    }
}

module.exports = memberHandler