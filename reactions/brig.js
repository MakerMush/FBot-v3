module.exports = {
	name: 'brig',
	execute(message) {
		const reactEmojis = [];
		if (message.content.toLowerCase().endsWith(' brig') ||
			message.content.toLowerCase().startsWith('brig ') ||
			message.content.toLowerCase().includes(' brig ') || 
			message.content.toLowerCase() === ('brig')) {
			reactEmojis.push('🇭');
			reactEmojis.push('🇪');
			reactEmojis.push('🇯');
		}
		return reactEmojis;
	},
};