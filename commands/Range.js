const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    message.channel.send("rangeOP");
}
module.exports.config = {
    name: "range",
    description: "",
    usage: "?range",
    accessableby: "Members",
    aliases: []
}