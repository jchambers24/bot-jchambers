const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => {
    console.log('Bot Online');
    client.user.setGame('with my balls');
});


client.on('message', message => {
       if(message.content.startsWith(prefix+command)) {
            
           if(command === 'ping') {
            message.channel.send('Pong!');
        }else 
            
           if (command === "kick") {
            let member = message.mentions.members.first();
            member.kick();
                } }
           
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
