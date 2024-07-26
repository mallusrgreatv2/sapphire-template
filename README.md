# TypeScript Sapphire Bot example

This is a basic setup of a Discord bot using the [sapphire framework](https://sapphirejs.dev) written in TypeScript

## How to use it?

### Prerequisite

```sh
bun install
```

### Development

This example can be run with `tsc-watch` to watch the files and automatically restart your bot.

```sh
bun run watch:start
```

### Production

You can also run the bot with `bun dev`, this will first build your code and then run `node ./dist/index.js`. But this is not the recommended way to run a bot in production.

## License

[MIT License](./LICENSE)
