module.exports.run = async (bot, message, args) => {
    if (message.deletable) {
         message.delete();
     }

     // Member doesn't have permissions
     if (!message.member.hasPermission('MANAGE_MESSAGES')) {
         return message
             .reply('You dont have `Manage_Messages` Permission lol, Nice Try though💖')
             .then((m) => m.delete(5000));
     }

     // Check if args[0] is a number
     if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
         return message
             .reply(
                 'Yeah.... That is not a number? I also cant delete 0 messages by the way.',
             )
             .then((m) => m.delete(5000));
     }

     // Maybe the bot can't delete messages
     if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
         return message
             .reply('How tf are you expecting me to delete messages without giving me `Manage_Messages` Permission')
             .then((m) => m.delete(5000));
     }

     let deleteAmount;

     if (parseInt(args[0]) > 1000) {
         deleteAmount = 1000;
     }
     else {
         deleteAmount = parseInt(args[0]);
     }

     message.channel
         .bulkDelete(deleteAmount, true)
         .then((deleted) =>
             message.channel.send(`I deleted \`${deleted.size}\` messages, Boom! 💥`).then(m => m.delete({timeout: 5000}))
         )
         .catch((err) => message.reply(`Something went wrong... ${err}`));
 };
 module.exports.config = {
    name: "purge",
    description: "",
    usage: "?purge",
    accessableby: "",
    aliases: []
}