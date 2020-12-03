module.exports = {
	name: 'heckleMaples',
	execute(message) {
		const reactEmojis = [];
		if (message.member.user.id == 550493530083164171 || message.member.user.id == 693874282367025192) {
			if(Math.floor(Math.random() * 20) == 	0) {
				reactEmojis.push('🧢');
			}
		}

		return reactEmojis;
	},
};