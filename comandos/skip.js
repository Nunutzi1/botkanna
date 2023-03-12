const { Client, Intents, MessageEmbed } = require('discord.js');
const distube = require('distube');

module.exports = {
    name: "skip",
    alias: [],

    execute(client, message, args) {

        if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz pinche baboso")

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(
            "Debes de estar en el mismo canal de voz que yo. Mames, ese wei si esta bien pendejo"
        )

        client.distube.skip(message);
        const embed = new MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setColor(0xF1C232)
            .setTitle('Skipped Current Song')
            .setTimestamp()
            .setFooter('El mejor puto bot ALV!')
            .setThumbnail('http://imgfz.com/i/t65LUFp.png')
        message.channel.send(embed);
    }
}