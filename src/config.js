require("dotenv").config();
const { Intents } = require("discord.js");

const ClientData = {
    BOT: {
        token  : String(process.env.TOKEN),
        prefix : "b-",
        presences: {
            activities: [
                [{name: "⚡ BASE BOT V13", type: "WATCHING" }],
                [{name: "BASE BY ALFR3XD", type: "PLAYING" }],
            ],
            status: ["idle", "online", "dnd"]
        }
    },
    Guild: {
        owner : ["tu_id_discord"],
        guild: "tu_server_id",
        channels: {},
    }
}

const ClientOptions = {
    intents: 
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
    retryLimit: 3,
    partials: [
        'MESSAGE', 
        'CHANNEL', 
        'GUILD_MEMBER',
        'USER',
    ],
    allowedMentions: { 
        repliedUser: false,
        parse: ["users"]
    }
}

module.exports.ClientData = ClientData;
module.exports.ClientOptions = ClientOptions;