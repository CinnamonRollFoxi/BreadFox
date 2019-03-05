const Commando = require('discord.js-commando');
const prefix = "a+";
const client = new Commando.Client({
    commandPrefix: prefix
});

//CommandFiles

client.registry.registerGroup('simple', 'Simple');
client.registry.registerCommandsIn(__dirname + '/commands');


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
