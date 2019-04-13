const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  sleep(90000)
        bot.user.setActivity(`${bot.users.size} Usuários`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        sleep(60
        bot.user.setActivity(`QUALQUER COISA`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        sleep(60000)
        bot.user.setActivity(`OLÁ CLIENT DEV NIKO`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        sleep(60000)
        bot.user.setActivity(`DALEE`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        sleep(80000)
        bot.user.setActivity(`NHAW NHAW`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        sleep(80000)
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
