const { Client, Intents, MessageEmbed, Collection } = require('discord.js');
const distube = require('distube');
const play = require('./comandos/play');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { token } = require("./config.json");

const fs = require('fs');
let { readdirSync } = require('fs');

client.commands = new Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('js'));

for(const file of commandFiles){
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    function presence() {
        client.user.setPresence({
            status: 'dnd', 
            activity: {
                name: 'con tu gfa jasdjad',
                type: 'PLAYING'
            }
        })
    }
    presence();
    console.log(`Bot is ready as: ${client.user.tag}`);

    // const generalChannel = client.channels.cache.find(channel => channel.name == 'streams');
    // console.log(generalChannel);
});

client.on('message', async message => {

    let prefix = '.';

    if(message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;

    let usuario = message.mentions.members.first() || message.author;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Receiving the message
    console.log(message.content);
    if(message.content == `asco de bot` || message.content == 'Asco de bot') {
        message.reply('Callate perra');
    }

    if(message.content == 'hola' || message.content == 'Hola'){
        message.channel.send(`Hola ${message.author}`);
    }

    if(message.content == '.clear') {
        const fetched = await message.channel.messages.fetch({limit: 10});
        message.channel.bulkDelete(fetched);
        console.log('Mierda Eliminada');
    }

    let cmd = client.commands.find((c) => c.name == command || c.alias && c.alias.includes(command));
    if(cmd){
        cmd.execute(client, message, args)
    }
});

client.distube = new distube(client, {
    emitNewSongOnly: true,
    searchSongs: false,
    leaveOnStop: true,
    leaveOnFinish: true,
    leaveOnEmpty: true
});

client.distube.on('addList', (message, queue, playList) => {
    message.channel.send(`Playlist añadida: ${playList.name}`)
    const embed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setColor(0x00AE86)
    .setTitle('Playlist añadida:')
    .setDescription(`Este estupido puso la playlist "${playList.name}", espera a que acabe la playlist actual o quitala pinchi mugroso`)
    .setTimestamp()
    .setFooter('El mejor puto bot ALV!')
    .setThumbnail('https://c.tenor.com/ee4x0yL-iCYAAAAi/kanna-cult.gif')
    .setImage('http://pa1.narvii.com/6527/25d2482b72aecd4c1235d78633c2f707d860680d_00.gif')
message.channel.send(embed); 
});

client.distube.on('addSong', (message, queue, song) => {
    message.channel.send(`Cancion añadida: ${song.name}`)
        const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor(0x00AE86)
        .setTitle('Canción añadida:')
        .setDescription(`Este estupido puso "${song.name}", espera a que acabe la cancion actual o quitala pinchi mugroso`)
        .addField('Duracion:', `Este mierda dura ${song.formattedDuration}`, true)
        .setTimestamp()
        .setFooter('El mejor puto bot ALV!')
        .setThumbnail('https://c.tenor.com/ee4x0yL-iCYAAAAi/kanna-cult.gif')
        .setImage('http://pa1.narvii.com/6527/25d2482b72aecd4c1235d78633c2f707d860680d_00.gif')
    message.channel.send(embed);    
});

client.distube.on('playSong', (message, queue, playsong) => {
    message.channel.send(`Musica en curso: ${playsong.name}`)
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor(0x00AE86)
        .setTitle('Canción:')
        .setDescription(`Este estupido puso "${playsong.name}"`)
        .addField('Duracion:', `Este mierda dura ${playsong.formattedDuration}`, true)
        .setTimestamp()
        .setFooter('El mejor puto bot ALV!')
        .setThumbnail('https://c.tenor.com/ee4x0yL-iCYAAAAi/kanna-cult.gif')
        .setImage('https://c.tenor.com/_8waTEizW2AAAAAC/kanna-anime.gif')
    message.channel.send(embed);
});

client.distube.on('playList', (message, queue, playlist) => {
    message.channel.send(`Reproduciendo playlist: ${playlist.name}`)
    const embed = new MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor(0x00AE86)
        .setTitle('Playlist:')
        .setDescription(`Este estupido puso la playlist "${playlist.name}"`)
        .setTimestamp()
        .setFooter('El mejor puto bot ALV!')
        .setThumbnail('https://c.tenor.com/ee4x0yL-iCYAAAAi/kanna-cult.gif')
        .setImage('https://c.tenor.com/zD6nOYx9j5UAAAAC/kanna-kamui.gif')
    message.channel.send(embed);
});

client.distube.on('intiQueue', (queue) => {
    queue.autoplay = false;
    queue.volume = 100;
});

client.distube.on('error', (message, error) => {
    console.log(error);
});

client.login(token);