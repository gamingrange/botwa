const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle(`Team AMT - ESports`)
    .setColor("RED")
    .setDescription(`Hello, ${message.author.username}`)
    message.channel.send(embed);
}
module.exports.config = {
    name: "hello",
    description: "",
    usage: "?hello",
    accessableby: "Members",
    aliases: []
}