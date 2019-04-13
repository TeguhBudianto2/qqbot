const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
        bot.user.setActivity(`${bot.users.size} Usuários`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        bot.user.setActivity(`QUALQUER COISA`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        bot.user.setActivity(`OLÁ CLIENT DEV NIKO`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        bot.user.setActivity(`DALEE`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        bot.user.setActivity(`NHAW NHAW`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        bot.user.setActivity(`Digunakan ${bot.guilds.size} server!`, {type: 'STREAMING', url: 'https://twitch.tv/'})
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '//';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }
  
});

bot.login(process.env.token);
