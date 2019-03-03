const Commando = require('discord.js-commando');
const bot = new Commando.Client();

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
