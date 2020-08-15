const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';


client.once('ready' , () => {
    console.log('TrainBot is online');
});

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send('GitBot \nName: TrainBot \n"-" is prefix for commands \n"-help" gives help guide');
    }
});

client.login('');