const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); // console login message
});

client.on('message', msg => { // simple command
  if (msg.content == '!fag') {
    msg.reply(', quit being a faggot');
  }
  else
    
   if (msg.content.startsWith("!kick")) {
     let member = msg.mentions.members.first();
     member.kick();
   }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
