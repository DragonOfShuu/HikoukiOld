module.exports = {
  name: "music",
  description: "This command allows you to manipulate the music of the bot using command arguments\n\nSyntax:\n/music <args>\nArguments:\np -> play/pause\nj || l -> leave/join\nv -> volume",
  execute(msg, args, client, queue) {
    const cc = client.commands;
    const ytdl = require('ytdl-core');
    // const path = "./commands/Saves/MusicChannels.json";
    //const filman = require("./Utilities/FilMan.js");

    //console.log("This is the client var:")
    //console.log(cc)

    let argument = args[0]

    function isInVoice() {
      try {
        msg.channel.send("ran the try"); 
        return msg.guild.voice.channel;
      } catch {
        msg.channel.send("ran the catch"); 
        return false;
      }
    }

    function play(guild, song) {
      const serverQueue = queue.get(guild.id);
      if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
      }

      const dispatcher = serverQueue.connection
        .play(ytdl(song.url))
        .on("finish", () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
      dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
      serverQueue.textChannel.send(`Start playing: **${song.title}**`);
    }

    async function start(msg, args, queue) {
      let serverQueue = queue.get(msg.guild.id);
      const voiceChannel = msg.member.voice.channel;

      if (!voiceChannel) {msg.channel.send("You need to be in a voice channel first!"); return null;}
      const permissions = voiceChannel.permissionsFor(msg.client.user);

      console.log(permissions)

      if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send("I need the permissions to join and speak in your voice channel!");
      }

      const songInfo = await ytdl.getInfo(args[1]);
      const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
      };

      if (!serverQueue) {
        // Creating the contract for our queue
        const queueContruct = {
          textChannel: msg.channel,
          voiceChannel: voiceChannel,
          connection: null,
          songs: [],
          volume: 5,
          playing: true,
        };
        // Setting the queue using our contract
        queue.set(msg.guild.id, queueContruct);
        // Pushing the song to our songs array
        queueContruct.songs.push(song);

        try {
        // Here we try to join the voicechat and save our connection into our object.
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        // Calling the play function to start a song
        play(msg.guild, queueContruct.songs[0]);
        } catch (err) {
        // Printing the error message if the bot fails to join the voicechat
          console.log(err);
          queue.delete(message.guild.id);
          return message.channel.send(err);
        }
      }else {
      serverQueue.songs.push(song);
      console.log(serverQueue.songs);
      return msg.channel.send(`${song.title} has been added to the queue!`);
      }

      msg.channel.send("made it through play")
    }

    if (argument == "p") {
      start(msg, args, queue);
    } else if (argument == "l" || argument == "j") {
      if (isInVoice()) {
        cc.get("leave").execute(msg, args, client);
        msg.channel.send("rand the *leave*")
      } else {
        cc.get("JoinVC").execute(msg, args, client);
        msg.channel.send("ran the *join*")
      }
    } else if (argument == "v") {
      const vcData = readMc()[msg.guild.id]

      console.log("Gathered vc data:")
      console.log(vcData)



      if (!vcData) {
        msg.channel.send("I am not currently in a voice channel :/")
      } else {
        vcData.pause(0.1)
      }
    } else if (argument === "test") {
      queue["Your mom"] = "isn't gay for once";
      msg.channel.send("Change made :wink:")
      return;
    }
  },

}