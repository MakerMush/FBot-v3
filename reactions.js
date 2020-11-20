const Discord = require('discord.js');
const data = [];
const reactEmojis = [];

module.exports = {
	checkFor_F,
	checkFor_EmbeddedF,
	// checkFor_Cap,
	checkFor_RIP,
	checkFor_Mention,
	checkFor_GGEZ,
	checkFor_Misc,
	heckle,
	/* (message);

		for (const r of reactions) {
			message.react(r);
		}

		message.channel.send(data, { split: true });

	},*/
};


function checkFor_F(message) {
	if (message.content === 'f') {
		reactEmojis.push('🇫');
	}

	const reactions_F = ['😭', '😢', '🙁', '😞', '☹️', '😦', '):', ':(', ')=', '=(', 'd:', 'd=', '**big f**', 'dang', 'welp'];

	for (const r in reactions_F) {
		if (message.content.includes(r)) {
			reactEmojis.push('🇫');
		}
	}
	return reactEmojis;
}
/*
function checkFor_Cap(message) {
	if (message.content.includes('no cap')) {
		reactEmojis.push('🚫');
		reactEmojis.push('🧢');
	}
	else if (message.content.endsWith(' cap')
		|| message.content === 'cap') {
		reactEmojis.push('🧢');
	}
	return reactEmojis;
}
*/

function checkFor_RIP(message) {
	if (
		message.content.includes(' rip ')
		|| message.content.startsWith('rip ')
		|| message.content.endsWith(' rip')
		|| message.content === 'rip') {
		if (!message.content.includes('paper') &&
			!message.content.includes('to rip') &&
			!message.content.includes('rip a')) {
			reactEmojis.push('💀');
		}
	}
	return reactEmojis;
}

function checkFor_Mention(message) {
	if (message.content.includes('@fbot')) {
		const mentionResponses = [];
		mentionResponses.push(['🇫', '🇧', '🇴', '🇹', '‼️']);
		mentionResponses.push(['🇨', '🇪', '🇸', '🇹', '🇲', '🇴', '🇮', '‼️']);
		mentionResponses.push(['🇸', '🇺', '🇵']);
		mentionResponses.push(['😘', '👋']);
		const randResponse = Math.floor(Math.random() * mentionResponses.length);

		try {
			for (const r in mentionResponses[randResponse]) {
				reactEmojis.push(r);
			}
		}
		catch {
			console.error('One of the emojis failed to react.');
		}
	}
	return reactEmojis;
}

function checkFor_GGEZ(message) {
	if (message.content.includes === 'ggez') {
		const ggEZResponses = ['Wishing you all the best.', 'Well played, I salute you all.', 'For glory and honor! Huzzah comrades!', 'It was an honor to play with you all. Thank you.', 'Great game, everyone!', 'I feel very, very small... someone please hold me...', 'I\'m wrestling with some insecurity issues in my life but thank you all for playing with me.', 'Good game! Best of luck to you all!', 'C\'mon, Mom! One more game before you tuck me in. Oops mistell.', 'Gee whiz! That was fun. Good playing.', 'Ah shucks... you guys are the best!', 'I\'m trying to be a nicer person. It\'s hard, but I am trying, guys.', 'Mommy says people my age shouldn\'t suck their thumbs.', 'I could really use a hug right now.'];
		data.push(ggEZResponses[Math.floor(Math.random() * ggEZResponses.length)]);
	}
	return data;
}

function checkFor_EmbeddedF(message) {
	if (message.content.includes('__**biggest f**__'))	 {
		const exampleEmbed = new Discord.MessageEmbed()
			.setColor('#3b88c3')
			.setImage('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/regional-indicator-symbol-letter-f_1f1eb.png');
		data.push(exampleEmbed);
	}
	return data;
}

function checkFor_Misc(message) {
	if (message.content.includes('good bot') && !(message.content.includes('not a') || message.content.includes('isn\'t a')))	{
		message.react('♥');
	}

	if ((message.content.includes('love') && (message.content.includes('fbot'))) && !(message.content.includes('do not') || message.content.includes('don\'t') || message.content.includes('dont')))	{
		message.react('😘');
	}
	return reactEmojis;
}

function heckle(message) {
	// maples
	if (message.member.user.id == 550493530083164171 || message.member.user.id == 693874282367025192) {
		message.react('🧢');
	}
	return reactEmojis;
}