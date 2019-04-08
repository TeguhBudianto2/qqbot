const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`New update QQ!`);
  bot.user.setActivity(`New Please server is ping`);
});

setTimeout(() => {
    bot.user.setActivity(`Activate | ${bot.guilds.array().length} User`, {type: "LISTENING"});
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

// This code will run once the bot receives any message.
bot.on("message", function (msg) {
	// if message begins with "ping"
	if (msg.content.indexOf("ping") === 0) {
		// send a message to the channel the ping message was sent in.
		bot.sendMessage(msg.channel, "pong!");

		// alert the console
		console.log("pong-ed " + msg.author.username);
	}
});

bot.login(process.env.token);
