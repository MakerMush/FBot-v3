module.exports = {
	name: 'smhmh',
	execute(message) {
		if (message.content.includes('smh')  && 
			!(message.content.includes('smh mh') || 
			message.content.includes('smhmh') || 
			message.content.includes('my head'))) 
			{
				return `'*smh my head, <@' + message.member.user.id + '>'`;
		}
	},
};