const { Client, Intents, MessageEmbed } = require('discord.js');
const distube = require('distube');

module.exports = {
    name: "pause",
    alias: [],

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send("¿Que paso hijo?, Debes estar en un canal de voz para usar este comando, jasjjdaj ese wei si esta bien pendejo xd")

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(
            "Debes de estar en el mismo canal de voz que yo. Mames, ese wei si esta bien pendejo"
        )

        const serverQueue = client.distube.getQueue(message)

        if (!serverQueue) return message.channel.send('No hay canciones deja de estar chingando')

        if (serverQueue.pause) return message.channel.send("La música ya estaba pausada")

        client.distube.pause(message);
        const embed = new MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setColor(0x674EA7)
            .setTitle('Pause')
            .setTimestamp()
            .setFooter('El mejor puto bot ALV!')
            .setThumbnail('http://imgfz.com/i/sLwz6JU.png')
        message.channel.send(embed);
    }
}