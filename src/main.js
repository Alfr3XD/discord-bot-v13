const DiscordClient = require("./structure/DiscordClient");
const {ClientOptions} = require("./config");

const Client = new DiscordClient(ClientOptions);
Client.startBot();