import { setup } from "@skyra/env-utilities";
setup();

declare module "@skyra/env-utilities" {
  interface Env {
    DISCORD_TOKEN: string;
  }
}
