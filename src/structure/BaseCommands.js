const Discord = require('discord.js');
const DiscordClient = require('./DiscordClient');
/**
 * Base de comandos prefix - Extendible -
 */
class BasePrefixCommand {
    /**
    * @param {{ 
    * name: string,
    * aliases: string[],
    * category: string,
    * description: string,
    * usage: string,
    * usage1: string,
    * usage2: string,
    * usage3: string,
    * cooldown: number,
    * botPermission: string[],
    * userPermission: string[],
    * modPermission: string[],
    * dev: boolean,
    * }} data Datos para el comando.
    */
    constructor(data) {
        if(data.name)           this.name = data.name;
        if(data.aliases)        this.aliases = data.aliases;
        if(data.category)       this.category = data.category;
        if(data.description)    this.description = data.description;
        if(data.usage)          this.usage = data.usage;
        if(data.usage1)         this.usage1 = data.usage1;
        if(data.usage2)         this.usage2 = data.usage2;
        if(data.usage3)         this.usage3 = data.usage3;
        if(data.cooldown)       this.cooldown = data.cooldown;
        if(data.botPermission)  this.botPermission = data.botPermission;
        if(data.userPermission) this.userPermission = data.userPermission;
        if(data.modPermission)  this.modPermission = data.modPermission;
        if(data.dev)            this.dev = data.dev;
    }

    /**
     * @param {DiscordClient} client
     * @param {Discord.Message} message 
     * @param {string[]} args 
     */
    async run(client, message, args) {}
}

/**
 * Base de comandos de app API discord - Extendible -
 */
class BaseAppCommand {
    /**
     *
     * @param {{
     * name: string,
     * description: string,
     * type: string,
     * options: Discord.ApplicationCommandOptionData[],
     * }} command
     */
    constructor(command) {
      this.name         = command.name;
      this.description  = command.description;
      this.type         = command.type;
      this.options      = command.options;
    }
}

module.exports = { BasePrefixCommand, BaseAppCommand }