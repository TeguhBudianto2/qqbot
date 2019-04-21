const Discord = require('discord.js');
const client = new Discord.Client();

const activities_list = [
    "with the &help command.", 
    "with the developers console",
    "with some code", 
    "with JavaScript"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
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
    msg.reply('join masuk silahkan link: https://bit.ly/QQSPEEDID');
  }
});

client.login(process.env.BOT_TOKEN);
