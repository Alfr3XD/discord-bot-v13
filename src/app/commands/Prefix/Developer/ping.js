const DiscordClient = require("../../../../structure/DiscordClient");
const Discord = require("discord.js");
const { BasePrefixCommand } = require("../../../../structure/BaseCommands");

class Ping extends BasePrefixCommand {
    constructor() {
        super({
            name: "ping",
            description: "Comando Ping xd.",
        });
    }

    /**
     * @param {DiscordClient} client 
     * @param {Discord.Message} message 
     * @param {string[]} args
     */
     async run(client, message, args) {
        message.reply("Pong!");
    }
}

module.exports = Ping