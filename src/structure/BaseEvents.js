const DiscordClient = require("./DiscordClient");
/**Base para eventos del cliente. - Extendible -*/
class BaseEvents {
    /**
     * @param {{ name: string, description: string, file: string }}  
     */
    constructor({name, description, file}) {
        this.name = name;
        this.description = description;
        this.file = file;
    }

    /**
     * @param {DiscordClient} client 
     * @param  {...any} args 
     */
    async run(client, ...args) {}
}

module.exports = BaseEvents;