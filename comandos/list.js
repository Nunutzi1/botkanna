const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = {
    name: "list",
    alias: [],

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz pinche baboso")

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(
            "Debes de estar en el mismo canal de voz que yo. Mames, ese wei si esta bien pendejo"
        )

        const queue = client.distube.getQueue(message)
        if (!queue) {
            message.channel.send('No hay ninguna canción.')
        } else {
            const embed = new MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setColor(0xFF00FF)
                .setTitle('Lista de canciones en reproducción:')
                .setDescription(`Lista de canciones en reproducción:\n${queue.songs
                    .map(
                        (song, id) =>
                            `**${id ? id : 'Playing'}**. ${song.name} - \`${song.formattedDuration
                            }\``,
                    )
                    .slice(0, 10)
                    .join('\n')}`)
                .setTimestamp()
                .setFooter('El mejor puto bot ALV!')
                .setThumbnail('http://imgfz.com/i/SK4Agvt.png')
            message.channel.send(embed);
        }
    }
}