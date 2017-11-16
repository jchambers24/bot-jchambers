const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('Bot Online');
});


client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.send('pong');
  	}
    
    if (message.content === '!status') {
        message.channel.send(client.status);
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
