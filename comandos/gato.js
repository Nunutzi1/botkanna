const { Client, Intents, MessageEmbed } = require('discord.js');
const TicTacToe = require('discord-tictactoe');

module.exports = {
    name: "gato",
    alias: [],

    execute: async (client, message, args) => {

        const embed = new MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setColor(0x8000FF)
            .setTitle('Juego del Gato')
            .setDescription(`Para empezar a jugar escribe el comando '.start' para jugar vs KannaBot\n
            Si quieres jugar vs un usuario escribe '.start' seguido con el @ del usuario\n
            .start <user/mention>`)
            .setTimestamp()
            .setFooter('El mejor bot ALV!')
            .setThumbnail('http://imgfz.com/i/1b9fu8s.png')
        message.channel.send(embed);

        new TicTacToe({ language: 'es', command: '.start' })
            .attach(client);

    }
}