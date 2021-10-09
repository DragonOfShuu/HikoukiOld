module.exports = {
  name: 'kiss',
  description: 'kiss another user!\n\nSyntax: ^kiss <OtherUser>',
  execute(msg, arg) {
    rand = require("./Utilities/randNum.js")
    console.log("Ran Kiss Command...")

    message = msg
    
    if (!arg.length) {
      msg.channel.send("You can't kiss yourself!")
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
      msg.channel.send(`${msg.author} kissed ${x}!`)
    }

    const gifs = [
      "https://i.pinimg.com/originals/db/01/03/db01034dd5f11698999eb8e8b425e05c.gif",
      "https://i.pinimg.com/originals/e5/eb/4d/e5eb4d30d233cbefd96619559b8daf8a.gif",
      "https://i1.wp.com/www.n2anime.com/wp-content/uploads/2017/06/Kotonoha-kisses-Makoto-School-Days-Anime.gif.gif",
      "https://media1.tenor.com/images/8cde94c42f3607101685a813972d0862/tenor.gif",
      "https://64.media.tumblr.com/d05a60d9b37db0760bc84140a9a4e28a/tumblr_n3xxegbEG91s684e6o1_500.gif"
    ]

    const num = rand(0, gifs.length)
    
    if (num === 4) {
      message.channel.send("This one is my favorite one!")
    }

    message.channel.send(gifs[num])
  }
}