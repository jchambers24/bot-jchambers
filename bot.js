const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on('ready', () => { 
    client.log("Ready!")
});


client.on('message', msg => {
       if (msg.content == "!ping") {
           msg.channel.send("pong");
       };    
           
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
