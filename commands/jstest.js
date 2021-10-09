module.exports = {
  name: "testTest",
  description: "This is just to test how javascript writes its files",
  execute(msg, args) {
    const fs = require("fs");
    
    if (args[0] === "w") {
      msg.channel.send("Writing to the file now!");

      fs.writeFileSync("./commands/Saves/Test.json", '{"your mom":"is gay"}');
      msg.channel.send("Successfully wrote to the file!")

    } else if (args[0] === "r") {
      msg.channel.send("Reading the file now!");
      
      let bruv = ""

      const txtstring = fs.readFileSync("./commands/Saves/Test.json", {encoding: "utf8"})
      bruv = JSON.parse(txtstring);

      console.log(`First: ${bruv}`)

      console.log(`Last: ${bruv}`)
    } else {
      msg.channel.send("That was not a valid argument, valid arguments include 'r' (read) and 'w' (write)")
    }
  }
}