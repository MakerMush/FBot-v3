module.exports = {
	name: 'ggez',
	execute(message) {
		const reactEmojis = [];

		if ((message.content.includes('love') && (message.content.includes('fbot'))) && !(message.content.includes('do not') || message.content.includes('don\'t') || message.content.includes('dont'))) {
			reactEmojis.push('❤️');
		}
		return reactEmojis;
	},
};