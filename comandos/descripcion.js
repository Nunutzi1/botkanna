const Discord = require('discord.js');

module.exports = {
    name: "descripcion",
    alias: [],

    execute (client, message, args){
        const embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setColor(0x00AE86)
            .addField('Something One', 'Soy puto', true)
            .setTimestamp()
        message.channel.send(embed);
    }
}