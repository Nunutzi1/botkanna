const { Client, Intents, MessageEmbed } = require('discord.js');
const distube = require('distube');

module.exports = {
    name: "play",
    alias: [],

    execute (client, message, args){
        const cancion = args.join(" ")
        if(!cancion) return message.channel.send("Debes escribir una cancion puto morro idiota")

        if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz pinche baboso")

        if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(
            "Debes de estar en el mismo canal de voz que yo. Mames, ese wei si esta bien pendejo"
        )

        client.distube.play(message, cancion);
    }
}