import "./lib/setup.js";

import { LogLevel, SapphireClient } from "@sapphire/framework";
import { GatewayIntentBits } from "discord.js";

const client = new SapphireClient({
  logger: {
    level: LogLevel.Debug,
  },
  intents: [GatewayIntentBits.Guilds],
});

const main = async () => {
  try {
    client.logger.info("Logging in");
    await client.login();
    client.logger.info("Logged in");
  } catch (error) {
    client.logger.fatal(error);
    await client.destroy();
    process.exit(1);
  }
};

void main();
