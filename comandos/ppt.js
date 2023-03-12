const { Client, Intents, MessageEmbed, ReactionCollector, ReactionEmoji, ReactionManager } = require('discord.js');
const discord = require('discord.js');

module.exports = {
    name: "ppt",
    alias: [],

    execute (client, message, args){
        const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor(0xF808FF)
        .setTitle('Piedra, Papel o Tijeras')
        .setDescription(`Escoge la opcion correcta reaccionando!`)
        .setTimestamp()
        .setThumbnail('http://imgfz.com/i/gYU0dMb.png')
        message.channel.send(embed).then(async (e) => {
            e.react("🗿")
            e.react("✂")
            e.react("📄")

            const filter = (reaction, user) => {
                return ["🗿", "✂", "📄"].includes(reaction.emoji.name) && user.id === message.author.id;
            }

            const choices = ["🗿", "✂", "📄"]
            const me = choices[Math.floor(Math.random() * choices.length)]

            e.awaitReactions(filter, {max: 1, time: 600000, error: ["time"]}).then(
                async(collected) => {
                    const reaction = collected.first()
                    let result = new MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setColor(0xF808FF)
                    .setTitle('Resultados:')
                    .addField(`Tu elegiste`, `${reaction.emoji.name}`)
                    .addField('KannaBot eligio', `${me}`)
                    e.edit(result)
    
                    if((me === "🗿" && reaction.emoji.name === "✂") || 
                    (me === "✂" && reaction.emoji.name === "📄") || 
                    (me === "📄" && reaction.emoji.name === "🗿")) {
                        const embed = new MessageEmbed()
                        .setAuthor(message.author.username, message.author.displayAvatarURL())
                        .setColor(0xFF0C08)
                        .setTitle('Perdiste :c')
                        .setTimestamp()
                        .setThumbnail('http://imgfz.com/i/68j7elO.png')
                        return message.reply(embed);
                    }else if(me === reaction.emoji.name){
                        const embed = new MessageEmbed()
                        .setAuthor(message.author.username, message.author.displayAvatarURL())
                        .setColor(0xE9FF08)
                        .setTitle('Es un empate.')
                        .setTimestamp()
                        .setThumbnail('http://imgfz.com/i/IThHtBS.png')
                        return message.reply(embed);
                    }else{
                        const embed = new MessageEmbed()
                        .setAuthor(message.author.username, message.author.displayAvatarURL())
                        .setColor(0x57FF08)
                        .setTitle('GANASTE!')
                        .setTimestamp()
                        .setThumbnail('http://imgfz.com/i/KGOYoX5.png')
                        return message.reply(embed);
                    }
                }
            )
        }).catch(error => {
            message.reply('El proceso ha sido cancelado. No respondiste en el tiempo suficiente.')
        })
        
    }
}