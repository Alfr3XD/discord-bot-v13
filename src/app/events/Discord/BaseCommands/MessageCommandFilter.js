const DiscordClient = require("../../../../structure/DiscordClient");
const Discord = require("discord.js");
const BaseEvents = require("../../../../structure/BaseEvents");
const { ClientData } = require("../../../../config");

class MessageCommandFilter extends BaseEvents {
    constructor() {
        super({
            name: "messageCreate",
            description: "Evento que se ejecuta al enviar un mensaje, - Filtro de comandos prefix -.",
            file: "messageCommandFilter",
        });
    }

    /**
     * @param {DiscordClient} client 
     * @param {Discord.Message} message 
     */
     async run(client, message) {
        if(message.author.bot) return;
        if(!message.guild) return;
        if(!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;

        let prefix = ClientData.BOT.prefix;

        /**Buscar Comando */ 
        if(!message.content.toLowerCase().startsWith(prefix)) return;
        let [cmdname, ...args] = message.content.slice(prefix.length).trim().split(/\s+/);

        const cmd = client.messageCommands.get(cmdname) || client.messageCommands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdname))
        if(!cmd) return;

        /**Si el comando es solo para DEV */
        if(cmd.dev && !client.Data.Guild.owner.includes(message.author.id)) {
            message.reply("**Este comando solo puede ser utilizado por un desarrollador**.");
            return;
        }

        /**Ejecutar Comando */
        cmd.run(client, message, args)
        .then(() => {})
        .catch((err) => {
            console.log(err);
            return;
        });
    }
}

module.exports = MessageCommandFilter;