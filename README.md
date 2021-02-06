# AlyxJS
Node.js Discord Library.
Wrote using WS library for websocket connections and superagent library for http requests.
under development.

## Warning
The Library is highly unstable for now library is under development, please open a pull request if you would like to contribute, this is mainly a practice and I can't gurantee a perfect library but as I learn I'll be releasing new versions with better things.

- Easy to use
- Covers most of discord api , Not yet tho
- Active development
- Free and open to contribute/suggest a feature.

## Installation
Run this in a command prompt in your project's directory
```
npm i alyx-js/alyx.js --save
```
this requires you to have git.
will be in npm later once confirmed to be stable.

## Example usage
Here's a basic usage of the library:
```js
const AlyxJS = require("alyx.js");
// create a client instance.
const client = new AlyxJS.Client({TOKEN:"Your Bot TOKEN"}); // Look at docs for other options the client accepts.

const prefix = "+" // many ways to set prefix pick your way

client.on('ready', () => {
	console.log("Bot is online!");
	console.log(`Logged in as ${client.self.username}`);
	client.setPresence("with NodeJS");
}); // ready event


client.on('messageCreate', message => {
	if(message.content.startsWith(prefix + "ping")) {
		client.sendMessage(message.channel_id, "Pong!");
	}
}); // register msg listener and check for msg content and reply

client.connect();
// log in the bot
```
## Webhooks
AlyxJS Supports lightweight webhook usage without using a real bot token and authenticating stuff, here's an example usage of webhooks:
```js
const AlyxJS = require("alyx.js");
const client = new AlyxJS.WebhookClient({
	TOKEN:"Webhook Token",
	ID:"Webhook ID"
});

client.sendMessage("Hello, World!"); // send text message.
client.setName("Cool Webhook"); // change name
client.destroy(); // Deletes webhook forever, goodbye.
```

## Useful links
- [Discord Server](https://discord.gg)
- [More Examples](https://github.com/alyx-js/alyx.js/blob/master/examples)

## License
Released under MIT License.
see [License](https://github.com/alyx-js/alyx.js/blob/master/LICENSE) file for more info

# Contributing
If you want to contribute please send a pull request with your changes and describe the changes, open an issue if you found a bug or suggesting an idea. Read [CONTRIBUTING.md](https://github.com/alyx.js/alyx.js/blob/master/.github/CONTRIBUTING.md) file for more info about contributing.