const { Client, Intents, MessageEmbed } = require('discord.js');

module.exports = {
    name: "8ball",
    alias: [],

    execute(client, message, args) {

        if (!args[0]) return message.channel.send('Tienes que preguntar algo para poder responderte.')
        let respuestas = ['No wei.', 'No puedo predecirlo ahora.', 'Las perspectivas no son buenas.', 'Simon.', 'Yo creo que si.', 'Esta muy dudoso.',
            'Sin duda.', 'Hay luego te respondo.', 'Probablemente.', 'Na we pelaste.'
            ,'Mejor no te lo digo.', 'Ya me das flojera bro, pregunta luego.', 'Si - definitivamente.', 'Wikipedia dice que no bro.', 'El destino dice que si.']

        let resultado = Math.floor((Math.random() * respuestas.length));
        let pregunta = args.slice().join(" ");

        const embed8ball = new MessageEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setColor(0x6DFF08)
            .addField('Pregunta:', pregunta)
            .addField('Kanna dice:', respuestas[resultado])
            .setTimestamp()
            .setFooter('El mejor puto bot ALV!')
            .setThumbnail('http://imgfz.com/i/rbVxg9e.png')
        message.channel.send(embed8ball);

    }
}