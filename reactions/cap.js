module.exports = {
	name: 'cap',
	execute(message) {
		const reactEmojis = [];
		if (message.content.includes('no cap')) {
			reactEmojis.push('🚫');
			reactEmojis.push('🧢');
		}
		else if (message.content.endsWith(' cap')
			|| message.content === 'cap') {
			reactEmojis.push('🧢');
		}
		return reactEmojis;
	},
};