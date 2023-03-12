const Discord = require('discord.js');

module.exports = {
    name: "gio",
    alias: [],

    execute (client, message, args){
        message.channel.send('Ese we es bien chido');
    }
}