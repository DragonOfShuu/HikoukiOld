module.exports = (path, type, data="") => {
  const fs = require("fs")
  const replacerFunction = require('./replaceFunc.js')

  if (path = "./commands/Saves/MusicChannels.json") {
    path = "./commands/Saves/MusicChannels.js"
  }

  if (type.toLowerCase() === "r") {
    //Yes I know you are not supposed to normally do Sync, however, it didn't matter too much in this case... probably...
    let txtString = fs.readFileSync(path, {encoding: "utf8"});
    let object1 = JSON.parse(txtString);
    //console.log("object created:");
    //console.log(object1)
    return object1;
  } else if (type.toLowerCase() === "w") {
    fs.writeFile(path, data, (error) => {
      if (error) {
        console.log(error)
        return false;
      } else {
        return true;
      }
    });


  } else {
    console.error(`the "type" field must require either an "r" or "w", nothing else.`)
    return false;
  }
}