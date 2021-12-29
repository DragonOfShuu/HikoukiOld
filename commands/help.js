module.exports = {
  name: "help",
  description: "The help page on all possible commands; if there are no arguments, all commands get dm'ed to you :kissing_heart:.\n^help <command>",
  execute(msg, args, client) {
    const Creator = process.env['Creator']
    const cc = client.commands;    
    /*https://discord.com/api/oauth2/authorize?client_id=846853626109493248&permissions=309241179200&scope=bot*/

    //msg.channel.send("Working... :grin:")

    if (!args.length) {
      msg.author.createDM().then((dmchannel) => {
        let x = "";
        if (msg.author == Creator) {
          dmchannel.send("I can send messages straight to you senpai~~\nhttps://tenor.com/view/senko-sewayaki-kitsune-no-senko-san-the-helpful-fox-senko-san-anime-anime-girl-gif-17464294")
        }

        x += `Hello ${msg.author}! Here are the commands:\n`
        
        x += "```";
        cc.forEach((command, index) => {
          if (command.name) {
            x += `${command.name}: ${command.description}\n\n`
          }
        })
        x += "```";
        x += "\nTo Add Hikouki onto *your* server, click this:\nhttps://discord.com/api/oauth2/authorize?client_id=846853626109493248&permissions=309241179200&scope=bot";
        
        dmchannel.send(x);
      })
    } else {
      if (client.commands.get(args[0])) {
        //msg.channel.send("that was a command!");
        msg.channel.send("```" + client.commands.get(args[0]).description + "```");
      } else {
        msg.channel.send("that was not a command!")
      }

    }
  }
}