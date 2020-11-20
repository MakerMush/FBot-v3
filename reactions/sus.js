module.exports = {
	name: 'sus',
	execute(message) {
		const reactEmojis = [];
		if (message.content.includes('very sus')) {
			reactEmojis.push('778622776625987584');
		}
		else if (message.content.includes('sus')) {
			reactEmojis.push('778622760821194752');
		}
		return reactEmojis;
	},
};