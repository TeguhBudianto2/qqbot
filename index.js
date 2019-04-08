const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  console.log("There are " + memberCount " people in this server!")
  bot.user.setActivity(`New update QQ!`);
});

setTimeout(() => {
    bot.user.setActivity(`Activate! ${bot.guilds.array().length} User`, {type: "STREAMING"});
  }, 20000)


bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}qqserver`){
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=522115615188582411&scope=bot&permissions=0");
  }
});

bot.login(process.env.token);
