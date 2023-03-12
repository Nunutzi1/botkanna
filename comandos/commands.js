const { Client, Intents, MessageEmbed } = require('discord.js');
const distube = require('distube');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "commands",
    alias: [],

    execute(client, message, args) {
        const user = message.author

        const embedPrincipal = new MessageEmbed()
            .setAuthor('Comandos', message.author.displayAvatarURL())
            .setColor(0xFF5733)
            .setTitle('Prefijo "."')
            .setDescription(`Utiliza el prefijo "." antes de cada comando`)
            .addField('Paginas', '`1.Informacion`, `2.Música`, `3.Utilidades`, `4.Diversión`')
            .addField('Navegacion', 'Usa las flechas para cambiar de pagina.')
            .setTimestamp()
            .setThumbnail('http://imgfz.com/i/HvsuWpt.png')
            .setImage('https://c.tenor.com/vlEdQPI9QIIAAAAC/kanna-eating.gif')

        const embedMusica = new MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setColor(0x80FF33)
            .setTitle('Prefijo "."')
            .addFields(
                { name: 'Música', value: '`play` | `continue` | `skip` | `pause` | `stop` | `loop` | `list`', inline: true },
            )
            .setTimestamp()
            .setThumbnail('http://imgfz.com/i/1kB96R7.png')

        const embedUtilidad = new MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setColor(0x33ECFF)
            .setTitle('Prefijo "."')
            .addFields(
                { name: 'Utilidades', value: '`descripcion` | `clear`', inline: true },
            )
            .setTimestamp()
            .setThumbnail('http://imgfz.com/i/O6uijNV.png')

        const embedDiversion = new MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setColor(0xE9FF08)
            .setTitle('Prefijo "."')
            .addFields(
                { name: 'Diversión', value: '`8ball` | `ppt`', inline: true },
            )
            .setTimestamp()
            .setThumbnail('http://imgfz.com/i/yJAcmzf.png')

        const pages = [
            embedPrincipal,
            embedMusica,
            embedUtilidad,
            embedDiversion
        ]

        const emojiList = ["◀", "▶"]

        const timeout = "600000";

        pagination(message, pages, emojiList, timeout)
    }
}