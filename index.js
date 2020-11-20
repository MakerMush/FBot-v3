const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

const cooldowns = new Discord.Collection();
const reactEmojis = [];
const responseMessage = [];


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const cfile of commandFiles) {
	const command = require(`./commands/${cfile}`);
	client.commands.set(command.name, command);
}

client.reactions = new Discord.Collection();
const reactionFiles = fs.readdirSync('./reactions').filter(file => file.endsWith('.js'));

for (const rfile of reactionFiles) {
	const reaction = require(`./reactions/${rfile}`);
	client.reactions.set(reaction.name, reaction);
}

client.responses = new Discord.Collection();
const responseFiles = fs.readdirSync('./responses').filter(file => file.endsWith('.js'));

for (const rfile of responseFiles) {
	const response = require(`./responses/${rfile}`);
	client.responses.set(response.name, response);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.author.bot) return;

	checkForCommands(message);
	checkForRespondables(message);
	checkForReactions(message);

});

async function checkForRespondables(message) {
	responseMessage.length = 0;

	const responseFunctions = client.responses[Symbol.iterator]();
	/* responseMessage.push(client.responses.get('ggez'));
	for (const m of responseMessage) {
		console.log('got back ' + m.execute(message));
	}*/
	// console.log(responseFunctions);
	for (const f of responseFunctions) {
		console.log(f[1]);
		responseMessage.push(f[1].execute(message));
	}

	console.log('rm = ' + responseMessage[0]);

	console.log(responseMessage[0]);
	if(responseMessage.length) {
		try {
			message.channel.send(responseMessage, { split: true });


		}
		catch (error) {
			console.error(error);
			message.channel.send('I had something to say here, but I had trouble saying it!');
		}
	}
}

async function checkForReactions(message) {

	reactEmojis.length = 0;
	const reactFunctions = client.reactions[Symbol.iterator]();
	for (const r of reactFunctions) {
		client.reactions.get(r[1].name).execute(message).forEach(async function(e) {
			await reactEmojis.push(e);
		});
	}

	while(reactEmojis.length) {
		await sendReaction(message, reactEmojis.splice(0, 1));
	}

}

async function sendReaction(message, r) {
	try {
		await (message.react(r[0]));
	}
	catch (error) {
		console.log(`nope, I couln't send ${r}, something broke: ${error}`);
	}
}

function checkForCommands(message) {

	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	// Check to see if this command can be used in DMs
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	// Check to see if you need to include arguments in this command, and if you do, check to see if the command has instructions on how to use arguments
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		// see if there are instructions on how to use arguments; if there are, send them.
		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	// respect the cooldown timer!
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);

	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message, args);

	}
	catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
}

client.login(token);