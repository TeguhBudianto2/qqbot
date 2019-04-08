const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

 bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`new! update QQ!`);
  bot.user.setUsername("QQ SPEED V1");
  bot.user.setActivity(`new! server on ${bot.users.size} Users`, {type: 'LISTENING'});

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
