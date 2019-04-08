const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

 bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
  bot.user.setUsername("QQ SPEED V1");
  bot.user.setStatus('online');
  bot.user.setActivity(`on ${bot.users.size} users -help`, {
    type: 'WATCHING'
});
  bot.user.setActivity(`New! update QQ!`);

});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}help`){
    message.channel.send("prefix or - < -help in watching try again commands qqreg,taptap,webreg,wa,versiapk,infobot");
  }
});

bot.login(process.env.token);
