const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

 bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`New! try update QQ!`);
  bot.user.setActivity(`New! update QQ!`);
  bot.user.setUsername("QQ SPEED V1");
  bot.change_presence(activity=discord.Activity(type=discord.ActivityType.watching, name=f"{os.getenv('BOT_PREFIX')}help | {len(bot.users)} users."))
  
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
