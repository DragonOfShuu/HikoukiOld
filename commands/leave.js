// module.exports = {
//   name:"leave",
//   description: "syntax:\n^leave\nAutomatically leaves the voice chat from the user that asked",
//   execute(msg, args) {
//     console.log("Executed the leave command...")
//     const fs = require("fs")

//     const UserVoice = msg.member.voice.channel
//     const ClientVoice = msg.guild.voice.channel

//     msg.channel.send("The client voice is: " + ClientVoice)

//     if (!ClientVoice) {
//       msg.channel.send("I am not in a voice channel silly :woozy_face:")
//     } else if (!UserVoice) {
//       msg.channel.send("You are not in a voice channel silly :woozy_face:")
//     } else if (UserVoice != ClientVoice) {
//       msg.channel.send("We have to be in the same voice channel for that to work!")
//     } else {
//       try {
//         fs.readFile("./commands/Saves/MusicChannels.json", "utf8", (error, txtString) => {
//           msg.channel.send("Successfully left the channel")

//           if (error) {
//             console.log("Error")
//             if (msg.author === "579360877208403978") {
//               msg.channel.send(`Some kind of error occured while reading the file, I believe in you ${msg.author}!`)
//             }
//           }

//           let channels = JSON.parse(txtString);

//           console.log(typeof(channels))
//           delete channels[msg.guild.id]

//           const replacerFunc = () => {
//             const visited = new WeakSet();
//             return (key, value) => {
//               if (typeof value === "object" && value !== null) {
//                 if (visited.has(value)) {
//                   return;
//                 }
//                 visited.add(value);
//               }
//               return value;
//             };
//           };

//           fs.writeFile('./commands/Saves/MusicChannels.json', JSON.stringify(channels, replacerFunc()), (error) => {
//             if (error) {
//               console.log(error);
//             }
//           })

//           ClientVoice.leave();
//         })

        
        
//       } catch (error) {
//         msg.channel.send("Something prevented me from leaving the channel!")
//         console.log(error)
//       } 
      
//     }
//   }
// }