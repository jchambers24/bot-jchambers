const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"
const version = "1.0a"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); // console login message
});

client.on('message', msg => { // simple command
  if(message.content.startsWith(prefix+command)){
    if(command === 'ping') {
  message.channel.send('Pong!');
  } else
  if (command === 'blah') {
  message.channel.send('Meh.');
}
   }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
