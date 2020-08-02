const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Help`)
    .setColor("GREEN")
    .setDescription(`?hello will hello you` + `\n` + `?range Shows gameplay` + `\n` + '?help will help you '   )
    .setFooter('rangebhauOP')
    .setThumbnail('https://cdn.discordapp.com/attachments/596231519584911361/739423115372920862/op.jpg')
    
    message.channel.send(embed);
}
module.exports.config = {
    name: "help",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: []
}