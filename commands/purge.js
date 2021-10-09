module.exports = {
	name: 'purge',
	description: 'This wil delete all the recent messages',
	execute(message, args) {
    // Get the "sendtemp" module
    if (message.member.hasPermission("ADMINISTRATOR")) {
      const sendMessage = require('./Utilities/sendtemp.js')

      if (!args.length) {
        message.channel.bulkDelete(100, true).then(messages => {
          sendMessage(message.channel, messages.size + ' messages successfully crashed and burned :hugging:', 4);
        })
        
      } else if (parseInt(args[0])) {
        num = parseInt(args[0]);
        if (num > 99 || num < 1) {
          message.channel.send(
            'Sorry, that number is not of the 1-99 range'
          );
        } else {
          message.channel.bulkDelete((num + 1), true).then(messages => {
            sendMessage(message.channel, messages.size + ' messages successfully crashed and burned :hugging:', 4);
          })
          

          // var msg = message.channel.messages.fetch({ limit: 2 });
          // setTimeout(function() {
          //   console.log(msg);
          // 	msg.delete();
            
          // }, 5000);
        }

      }
    } else {
      message.channel.send("You do not have permission to run this command, sorry :/")
    }
	}
};