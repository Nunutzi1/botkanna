const { Client, Intents, MessageEmbed } = require('discord.js');
const distube = require('distube');

module.exports = {
    name: "stop",
    alias: [],

    execute(client, message, args) {

        if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz pinche baboso")

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(
            "Debes de estar en el mismo canal de voz que yo. Mames, ese wei si esta bien pendejo"
        )

        try {
            client.distube.stop(message);
            const embed = new MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setColor(0xFF0000)
                .setTitle('Stopped Playing')
                .setTimestamp()
                .setFooter('El mejor bot ALV!')
                .setThumbnail('http://imgfz.com/i/L9VhkaJ.png')
            message.channel.send(embed);
        } catch (error) {
            message.channel.send('No estoy en el canal para que me saques, pinche idiota.')
        }
    }
}