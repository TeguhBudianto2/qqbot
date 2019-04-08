const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

 bot.on("ready", async () => {
 console.log(`${bot.user.username} is online!`);
   client.user.setUsername("qqbot");
  client.user.setStatus('online');
  client.user.setActivity(`on ${client.users.size} users | #help`, {
    type: 'WATCHING'
});
  bot.user.setActivity(`New! update QQ!`);

});

 setTimeout(() => {
 bot.user.setActivity(`Used to server  ${bot.guilds.array().length} User`, {type: "STREAMING"});
}, 20000)

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

client.on("disconnected", () => {
console.log("Disconnected from Discord");
	console.log("Attempting to log in...");
	client.login(process.env.token);
