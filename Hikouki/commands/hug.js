module.exports = {
  name: 'hug',
  description: 'hug another user!\n\nSyntax: ^hug <OtherUser>',
  execute(msg, arg) {
    rand = require("./Utilities/randNum.js")
    console.log("Ran hug Command...")

    message = msg
    
    if (!arg.length) {
      msg.channel.send("You can't hug yourself!")
      return;
    } else {
      let x = arg[0]
      if (arg.length > 1) {
        x = ""
        arg.forEach((item, index) => {
          if (index === 0) {
            x=item
          } else {
            x=x+" "+item 
          }
        });
      }
      msg.channel.send(`${msg.author} hugged ${x}!`)
    }

    const gifs = [
      "https://media.tenor.co/images/42922e87b3ec288b11f59ba7f3cc6393/raw",
      "https://media1.tenor.com/images/d17e9d09493bd611a48a94154963b76d/tenor.gif"
    ]

    const num = rand(0, gifs.length)
    
    if (num === 4) {
      message.channel.send("This one is my favorite one!")
    }

    message.channel.send(gifs[num])
  }
}