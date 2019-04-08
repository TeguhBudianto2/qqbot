const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const token = "NTIyMTE1NjE1MTg4NTgyNDEx.D2w_Vw._ov18vk6zlXpk4Dux2DoN3m3RkU"
const Discord = require("index.js");
const guildID = "522115615188582411"
discord.bot = new Discord.Client()
var memberCount = discord.bot.guilds.get(guildID).members.size()
console.log("There are " + memberCount " people in this server!")

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
