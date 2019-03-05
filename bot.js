const Commando = require('discord.js-commando');
const prefix = "a+";
const bot = new Commando.Client({
    commandPrefix: prefix
});

//CommandFiles

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


bot.on('ready', () => {
    console.log('Ready for usage');
});

bot.on('message', message => {
    if (message.content == 'ping') {
        message.reply('pong');
    }
});




// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
