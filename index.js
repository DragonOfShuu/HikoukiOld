const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const filMan = require("./commands/Utilities/FilMan.js");
const mcpath = "./commands/Saves/MusicChannels.json";
const queue = new Map();
require('dotenv').config();

//const { prefix, token } = require('./config.json');
let Prefix = "^"

//console.log(fs)

/*
function clrMC() {
  filMan(mcpath, 'w', {"thing":"another thing"})
}

clrMC()
*/

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))
//console.log(commandFiles)
for (const file of commandFiles) {
  //console.log(file)
  const command = require(`./commands/${file}`);

  //console.log(command)
  client.commands.set(command.name, command);
}



const mySecret = process.env.BOT_LOGIN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const activities = [
    "ASMR~~",
    "the mukbang challenge!",
    "with catgirls~~",
    "with senpai~",
    "@DragonOfShuu#1119 code~",
    "with new magic cards"
  ];
  const tActivities = [
    "STREAMING",
    "WATCHING",
    "PLAYING",
    "STREAMING",
    "WATCHING",
    "PLAYING"
  ]
  
  client.user.setActivity(`just started up!`, {type: `PLAYING`});

  //console.log(Object.keys(activities)[2])
  let i = 0;
  setInterval(() =>{
    client.user.setActivity(`${activities[i++ % activities.length]}`, {type: `${tActivities[i-1]}`});
  }, 150000);
});

client.once('reconnecting', () => {
  console.log("Now reconnecting!")
});

client.on('disconnect', () => {
  console.log("Disconnected :/")
});

client.on('message', msg => {
  if (msg.author.bot) {
    return;
  }
  if (msg.content.toLowerCase() === 'ping') {
    msg.reply('Pong!');
    //msg.channel.send("Well, obviously not, she's to silly :dizzy:")
  } else if (msg.content.toLowerCase().includes('thx') && msg.content.toLowerCase().includes('hikouki')) {
    msg.reply('you are welcome :smiling_face_with_3_hearts:')
  } else if (msg.content.startsWith(Prefix) && msg.content != Prefix){
    //msg.channel.send(`Congratulations, ${msg.author}, you used a Prefix! :smiling_face_with_3_hearts:`);

    //This is to rip up and disect the message
    
    const args = msg.content.substring(Prefix.length).split(" ").slice(1, msg.content.length);
    const command = msg.content.substring(Prefix.length).split(" ").shift()
    //console.log('"' + command + '"');

    //get the new stored commands
    const cc = client.commands;

    CommandsArray = {
      "kiss": cc.get("kiss"),
      "hug": cc.get("hug"),
      "purge": cc.get("purge"),
      "help": cc.get("help"),
      "test": cc.get("testTest"),
      "encrypt": cc.get("encrypt"),
      "say": client.commands.get("say"),
      aliases: {
        'p': 'purge',
        'h': 'help',
        't': 'test',
        'e': 'encrypt'
      }
    }

    //msg.channel.send(CommandsArray["yes"])
    if (CommandsArray[command] || CommandsArray[CommandsArray.aliases[command]]) {
      try {
        try {
          /*console.log(CommandsArray[command]);*/
          CommandsArray[command].execute(msg, args, client)
        } catch {
          CommandsArray[CommandsArray.aliases[command]].execute(msg, args, client)
        }
      } catch (error) {
        const errDetails = {
          "user": msg.author,
          "error": error
        }

        console.log(`Error Details:`)
        console.log(errDetails)
        if (msg.author == process.env.Creator) {
          try {
            msg.channel.send(`An error occured: \n${error}`)
            msg.channel.send(`You got this ${msg.author}! I beweive in u!`)
          } catch {
            console.log(`An error occured: \n${error}`);
            console.log(`You got this ${msg.author}! I beweive in u!`);
          }
        } else {
          try {
            msg.channel.send("```*An internal server error occurred*```");
            console.log(`Here was a caught error: ${error}`);
          } catch (e) {
            console.log(`Here was a caught error: ${error}`);
          }
        }
      }
      
    } else if (["m", "music"].indexOf(command) > -1) {
      //cc.get("music").execute(msg, args, client, queue);
      msg.channel.send("Sorry, my creator Dragon of Shuu decided to archive this command. :sob:\n:(((((");

      //console.log(queue)
      //if (newQueue) {queue = newQueue}
    } else {
      //msg.channel.send(["music", "m"].indexOf(command))
      msg.channel.send(`Sorry, ${msg.author}, that was not a command :woozy_face:`)
    }
  }
});

//console.log(process.env);
console.log("Is attempting to run");
client.login(mySecret);