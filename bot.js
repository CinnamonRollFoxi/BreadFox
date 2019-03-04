const Discord = require('discord.js');
const client = new Discord.Client();
const botconfig = require("./botconfig.json");


client.on('ready', () => {
    console.log('Ready for usage');
});

client.on('message', message => {
    if (message.content == 'ping') {
        message.reply('pong');
    }
});

client.on("message", async message => {
    
    if(message.auther.bot) return;
    if(message.channel.type === "dm") return;
    
    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
 //Report Command

if(cmd === `${prefix}report`){
   
 //~report @user reason
    
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user!");
    let reason = args.join(" ").slice(22);
    
    let reportEmbed = new Discord.RichEmbed()
    .setDiscription("Report")
    .setColor("#15f153")
    .addField("Reported Players", `${rUser} with ID ${rUser.id}`);
    
    message.channel.send(reportEmbed);
    
    return;
}
    
});




// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
