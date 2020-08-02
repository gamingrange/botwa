const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
let user = message.mentions.users.first() || message.author
        const embed = new MessageEmbed()
        .setTitle(`${user.username}'s avatar`)
        .setImage(user.avatarURL({size: 512, dynamic: true}))
        .setColor("#f3f3f3")
        .setFooter("")
        .setDescription(`<a:ajari:739431273847848971> [Avatar Link](${user.displayAvatarURL({dynamic:true})})`)


        message.channel.send(embed)
}
         module.exports.config = {
            name: "av",
            description: "",
            usage: "?av",
            accessableby: "Members",
            aliases: []
        }