const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === ',help') {
    msg.reply('```Prefix is for ,help server use now``` ```wa``` ```qq``` ```taptap``` ```discord```');
  }
});

client.on('message', msg => {
  if (msg.content === ',qq') {
    msg.reply('qq web via: https://ssl.zc.qq.com/v3/index-en.html');
  }
});

client.on('message', msg => {
  if (msg.content === ',taptap') {
    msg.reply(' App taptap download via: https://www.taptap.com/app/55618');
  }
});

client.on('message', msg => {
  if (msg.content === ',wa') {
    msg.reply(' join masuk silahkan via: https://chat.whatsapp.com/C1xvbhrYksP1AcLTXKZU78');
  }
});

client.login(process.env.BOT_TOKEN);
