module.exports = {
	name: 'f',
	execute(message) {
		const reactEmojis = [];

		if (message.content.toLowerCase() === 'f') {
			reactEmojis.push('🇫');
		}

		const reactions_F = ['😭', '😢', '🙁', '😞', '☹️', '😦', '):', ':(', ')=', '=(', 'D:', 'D=', '**big f**', 'dang', 'welp'];

		for (const r of reactions_F) {
			if (message.content.includes(r)) {
				reactEmojis.push('🇫');
			}
		}
		return reactEmojis;
	},
};