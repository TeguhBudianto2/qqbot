const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === ',help') {
    msg.reply('```Prefix is for ,help server use now``` ```wa``` ```fb``` ```taptap``` ```discord```');
  }
});

client.on('message', msg => {
  if (msg.content === ',qq') {
    msg.reply('qq web via: https://ssl.zc.qq.com/v3/index-en.html');
  }
});

client.login(process.env.BOT_TOKEN);
