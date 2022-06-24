const { Client, Collection, ClientOptions } = require("discord.js");
const BaseEvents = require("./BaseEvents");
const { BasePrefixCommand, BaseAppCommand } = require("./BaseCommands");
const { ClientData } = require("../config");
const Loadders = require("./Loadders");
/**
 * CLIENTE EXTENDIDO DE CLIENT DISCORD.JS
 * @extends {Client}
 */
class DiscordClient extends Client {
    /**
     * @param {ClientOptions} options Opciones de configuración del cliente
     */
    constructor(options) {
        super(options);

        this.Data = ClientData;

        /**
         * Collection de eventos
         * @type {Collection<string, BaseEvents>}
         */
        this.discordEvents = new Collection();

        /**
         * Collection de comandos Prefix
         * @type {Collection<string, BasePrefixCommand>}
         */
        this.messageCommands = new Collection();

        /**
         * Collection de comandos App
         * @type {Collection<string, BaseAppCommand>}
         */
        this.slashCommands = new Collection();

        /**
         * Collection de comandos App
         * @type {Collection<string, BaseAppCommand>}
         */
         this.menuCommands = new Collection();
    }

    startBot() {
        Loadders.LoadDiscordEvents(this);
        Loadders.LoadPrefixCommands(this);
        // Loadders.LoadSlashCommands(this);
        // Loadders.LoadAppCommands(this);

        this.on("ready", async () => {

            setInterval(() => {
                this.user.setPresence({
                    activities: ClientData.BOT.presences.activities[Math.floor(Math.random() * ClientData.BOT.presences.activities.length)],
                    status: ClientData.BOT.presences.status[Math.floor(Math.random() * ClientData.BOT.presences.status.length)] 
                });
            }, 1000 * 10);
              
            console.log(`[ READY ]:ㅤㅤㅤCargando el bot...`);
            console.log(`[ READY ]:ㅤㅤㅤ${this.user.username} Está en linea.`);
        });

        this.login(ClientData.BOT.token);
    }
}
module.exports = DiscordClient;