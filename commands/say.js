module.exports = {
    name: "say",
    description: "This allows you to make me say something; don't make it dirty!\n^say <text: *required*>",
    execute(msg, args, client) {
        try {
            const cusswords = require("./Utilities/ExtraVars");
            const temp = require("./Utilities/sendtemp")
            if (!args.length) {
                msg.channel.send("Well, I can't say nothing :/");
            } else {
                if (cusswords("cusswords").some(r=> args.includes(r))) {
                    temp(msg.channel, "Hey WOAH we don't do that here.", 3);
                    msg.delete()
                } else {
                    let text = "";
                    args.forEach(element => {
                        text += element + " ";
                    });
                    msg.channel.send(`~~${msg.author} wants me to say:~~ ${text}`);
                    msg.delete()
                }
            }
        } catch (error) {
            msg.channel.send("oop, and error occurred...");
            console.log(error);
        }
        
    }
}