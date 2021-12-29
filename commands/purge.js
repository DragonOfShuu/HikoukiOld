module.exports = {
	name: 'purge',
	description: 'This wil delete all the recent messages\nIf no arguments are given, I will destroy 100 messages :smiling_imp:\n^purge <count>',
	execute(message, args) {
    // Get the "sendtemp" module
    if (message.member.hasPermission("ADMINISTRATOR") || message.author.id == process.env["Creator"]) {
      const sendMessage = require('./Utilities/sendtemp.js')

      if (!args.length) {
        message.channel.bulkDelete(100, true).then(messages => {
          try {
            sendMessage(message.channel, messages.size + ' messages successfully crashed and burned :hugging:', 4);
          } catch (e) {
            console.log(`I don't have access to message in that channel, but it is fine. ${e}`);
          }
        })
        
      } else if (parseInt(args[0])) {
        num = parseInt(args[0]);
        if (num > 99 || num < 1) {
          message.channel.send(
            'Sorry, that number is not of the 1-99 range'
          );
        } else {
          message.channel.bulkDelete((num + 1), true).then(messages => {
            try {
              sendMessage(message.channel, messages.size + ' messages successfully crashed and burned :hugging:', 4);
            } catch (e) {
              console.log(`I couldn't message in that channel, but it's fine ${e}`);
            }
          })
        }

      }
    } else {
      try {
        message.channel.send("You do not have permission to run this command, sorry :/")
      } catch (e) {
        console.log(`I couldn't message in that channel, but it's fine ${e}`);
      }
    }
	}
};