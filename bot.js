const Commando = require('discord.js-commando');
const client = new Commando.Client();
const botconfig = require("./botconfig.json");


client.on('ready', () => {
    console.log('Ready for usage');
});

client.on('message', message => {
    if (message.content == 'ping') {
        message.reply('pong');
    }
});




// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
