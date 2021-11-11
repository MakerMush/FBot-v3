module.exports = {
	name: 'yewtube',
	execute(message) {
		if (message.content.includes('yewtu.be')) {
			return 'I think that <@' + message.member.user.id + '> meant to link us to  ' + message.content.replace("yewtu.be","youtube.com");
		}
	},
};