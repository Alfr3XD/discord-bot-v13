const DiscordClient = require("./DiscordClient");
const BaseEvent = require("./BaseEvents");
const { BasePrefixCommand, BaseAppCommand } = require("./BaseCommands");
const { join } = require("path");
const { readdirSync } = require("fs");

var Rute_discordEvents = "../app/events/Discord",
    Rute_messageCommands = "../app/commands/Prefix",
    Rute_slashCommands = "../app/commands/Slash",
    Rute_menuCommands = "../app/commands/Menu";


class Loadder {

    /**
     * @param {DiscordClient} client 
     */
    static LoadDiscordEvents(client) {
        var lengthFiles = 0;
        readdirSync(join(__dirname, Rute_discordEvents))
        .forEach(folders => {
            readdirSync(join(__dirname, Rute_discordEvents, folders))
            .forEach(file => {
                const EventFile = require(join(__dirname, Rute_discordEvents, folders, file));
                /**
                 * @type {BaseEvent}
                 */
                var Event;
                try { Event = new EventFile() }
                catch { return }
                
                client.discordEvents.set(Event.file, Event);
                client.on(Event.name, (...args) => Event.run(client, ...args));
                lengthFiles++;
            });
        });

        console.log("[ LOAD ]: Cargando " + lengthFiles + " eventos de Discord.");
    }

    /**
     * @param {DiscordClient} client 
     */
    static LoadPrefixCommands(client) {
        var lengthFiles = 0;
        readdirSync(join(__dirname, Rute_messageCommands))
        .forEach(folders => {
            readdirSync(join(__dirname, Rute_messageCommands, folders))
            .forEach(file => {
                const CommandFile = require(join(__dirname, Rute_messageCommands, folders, file));
                /**
                 * @type {BasePrefixCommand}
                 */
                var Command;
                try { Command = new CommandFile() }
                catch { return }
                
                client.messageCommands.set(Command.name, Command);
                lengthFiles++;
            });
        });

        console.log("[ LOAD ]: Cargando " + lengthFiles + " comandos prefix de mensajes.");
    }

    /**
     * @param {DiscordClient} client
    */    
    static LoadSlashCommands(client) {
        var lengthFiles = 0;
        readdirSync(join(__dirname, Rute_slashCommands))
        .forEach(folders => {
            readdirSync(join(__dirname, Rute_slashCommands, folders))
            .forEach(file => {
                const CommandFile = require(join(__dirname, Rute_slashCommands, folders, file));
                /**
                 * @type {BaseAppCommand}
                 */
                var Command;
                try { Command = new CommandFile() }
                catch { return }
                
                client.slashCommands.set(Command.name, Command);
                lengthFiles++;
            });
        });

        console.log("[ LOAD ]: Cargando " + lengthFiles + " comandos de barra.");
    }

    /**
     * @param {DiscordClient} client
    */
    static LoadMenuCommands(client) {
        var lengthFiles = 0;
        readdirSync(join(__dirname, Rute_menuCommands))
        .forEach(folders => {
            readdirSync(join(__dirname, Rute_menuCommands, folders))
            .forEach(file => {
                const CommandFile = require(join(__dirname, Rute_menuCommands, folders, file));
                /**
                 * @type {BaseAppCommand}
                 */
                var Command;
                try { Command = new CommandFile() }
                catch { return }
                
                client.menuCommands.set(Command.name, Command);
                lengthFiles++;
            });
        });

        console.log("[ LOAD ]: Cargando " + lengthFiles + " comandos de menu.");
    }
}

module.exports = Loadder;