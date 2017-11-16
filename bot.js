const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log('Bot Online');
    client.user.setGame('with my balls');
});


client.on('message', message => {
    if (message.content === '!ping') {
    	message.channel.send('pong');
  	}
    
    if (message.content === '!botname') {
        message.channel.send(client.user.username);
    }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
