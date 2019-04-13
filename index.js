const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
        setTimeout(() => {
        bot.user.setActivity(`${bot.users.size} users`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        setTimeout(() => {
        bot.user.setActivity(`https://discord.gg/DPQgeFT`, {type: 'LISTENING', url: 'https://twitch.tv/'})
        setTimeout(() => {
        bot.user.setActivity(`help | //help`, {type: 'WATCHING', url: 'https://twitch.tv/'})
        setTimeout(() => {
        bot.user.setActivity(`By Skylar红色`, {type: 'STREAMING', url: 'https://twitch.tv/'})
        setTimeout(() => {
        bot.user.setActivity(`Digunakan ${bot.guilds.array().length} server`, {type: "WATCHING"});
  }, 20000)
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
