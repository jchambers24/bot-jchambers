const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "+"
const version = "1.0"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command == 'announcement') { // Test Announcement
    message.channel.send("@everyone"+args);
  } else
 
   if (command == 'ping') { // Test Command
    message.channel.reply('Pong!');
  
   if (command == 'kick') { // Kick A Player
   player = message.mentions.members.first(); 
        player.kick().then((member) => { //Succes
            message.channel.send(":wave: " + player.displayName + " has been kicked");
        }).catch(() => { // Failed or Bad Perms
            message.channel.send("Access Denied :wink: Nice Try" + message.author.displayName);
  }
}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
