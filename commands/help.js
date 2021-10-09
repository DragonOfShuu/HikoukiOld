module.exports = {
  name: "help",
  description: "The help page for giving help on commands",
  execute(msg, args, client) {
    const Creator = process.env['Creator']
    const cc = client.commands;    

    //msg.channel.send("Working... :grin:")

    if (!args.length) {
      msg.author.createDM().then((dmchannel) => {
        let x;
        if (msg.author == Creator) {
          dmchannel.send("I can send messages straight to you senpai~~\nhttps://tenor.com/view/senko-sewayaki-kitsune-no-senko-san-the-helpful-fox-senko-san-anime-anime-girl-gif-17464294")
        }

        x += `Hello ${msg.author}! Here are the commands:\n`

        cc.forEach((command, index) => {
          x += `${command.name}: ${command.description}\n`
        })
        
        dmchannel.send(x)
      })
    } else {
      if (client.commands.get(args[0])) {
        //msg.channel.send("that was a command!");
        msg.channel.send(client.commands.get(args[0]).description);
      } else {
        msg.channel.send("that was not a command!")
      }

    }
  }
}