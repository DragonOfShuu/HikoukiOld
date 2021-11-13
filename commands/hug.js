module.exports = {
  name: 'hug',
  description: 'hug another user!\n^hug <Text: required>',
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
      "https://media1.tenor.com/images/d17e9d09493bd611a48a94154963b76d/tenor.gif",
      "https://tenor.com/view/cuddle-hug-anime-bunny-costumes-happy-gif-17956092",
      "https://tenor.com/view/anime-hug-sweet-love-gif-14246498",
      "https://tenor.com/view/horimiya-izumi-miyamura-hori-kyoko-couple-hug-gif-14539121",
      "https://tenor.com/view/hug-anime-care-comfort-understanding-gif-15793129",
      "https://tenor.com/view/hugs-and-love-gif-19327081",
      "https://tenor.com/view/hug-anime-funny-boy-girl-gif-17428702",
      "https://tenor.com/view/hug-anime-gif-11074788",
      "https://tenor.com/view/hug-cute-love-sweet-couple-gif-16366975",
      "https://tenor.com/view/teria-wang-kishuku-gakkou-no-juliet-hug-anime-gif-16509980",
      "https://tenor.com/view/princess-mononoke-hug-hugs-anime-hug-tightly-gif-16503894",
      "https://tenor.com/view/chocola-vanilla-minaduki-nekopara-sayori-gif-23328925",
      "https://tenor.com/view/hug-spirited-aww-away-love-gif-21232935"
    ]

    const num = rand(0, gifs.length)
    
    if (num === 4) {
      message.channel.send("This one is my favorite one!")
    }

    message.channel.send(gifs[num])
  }
}