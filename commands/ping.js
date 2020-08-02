const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
message.channel.send(`🏓 Pinging....`).then((msg) => {
      const _ = new Discord.MessageEmbed()
        .setTitle("🏓 Pong!")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setThumbnail("https://cdn.discordapp.com/attachments/706552641424982099/726359507910787112/images_5.png")
        .setDescription(
          `\nBot ping is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\nAPI Latency is ${Math.round(client.ws.ping)}ms`
        )
        .setColor("RANDOM");
      msg.edit(_);
      msg.edit("\u200B");
    });
  }

  module.exports.config = {
    name: "ping",
    description: "",
    usage: "?ping",
    accessableby: "Members",
    aliases: []
}