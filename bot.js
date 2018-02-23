const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"
const version = "1.0a"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); // console login message
});

client.on('message', msg => { // simple command
  message.channel.send("RocketBot Online"+)

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 
  
  if(command == 'ping') {
  message.channel.send('Pong!');
  } else
  if (command == 'blah') {
  message.channel.send('Meh.');
}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
