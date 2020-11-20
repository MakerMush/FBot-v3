module.exports = {
	name: '!fbot',
	execute(message) {
		const reactEmojis = [];
		const salutations = [
			['🇫', '🇧', '🇴', '🇹', '‼️'],
			['🇨', '🇪', '🇸', '🇹', '🇲', '🇴', '🇮', '‼️'],
			['🇸', '🇺', '🇵'],
			['😘', '👋'],
		];

		if (message.content === '!fbot') {
			for(const s of salutations[Math.floor(Math.random() * salutations.length)]) {
				reactEmojis.push(s);
			}
		}
		return reactEmojis;
	},
};

