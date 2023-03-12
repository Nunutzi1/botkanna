const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = {
    name: "loop",
    alias: [],

    execute(client, message, args) {

        if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz pinche baboso")

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(
            "Debes de estar en el mismo canal de voz que yo. Mames, ese wei si esta bien pendejo"
        )

        try {
            client.distube.setRepeatMode(message, parseInt(args[0]))
            const embed = new MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setColor(0x3D85C6)
                .setTitle('Loop')
                .setTimestamp()
                .setFooter('El mejor puto bot ALV!')
                .setThumbnail('http://imgfz.com/i/YbKrd9V.png')
            message.channel.send(embed);
        } catch (error) {
            message.channel.send('No hay musica para el loop')
        }

    }
}