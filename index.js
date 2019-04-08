const bot = new Discord.Client({disableEveryone: true});
const Discord = require("discord.js");
const guildID = "522115615188582411"
var memberCount = discord.bot.guilds.get(guildID).members.size()


bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`New update QQ!`);
});

setTimeout(() => {
    bot.user.setActivity(`Activate ${bot.guilds.array().length} User`, {type: "STREAMING"});
    bot.user.setActivity(`Activate ${bot.users().length} server`, {type: "WATCHING"});
  }, 20000)


bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }
});

bot.login(process.env.token);
