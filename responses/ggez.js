module.exports = {
	name: 'ggez',
	execute(message) {
		const ggEZResponses = ['Wishing you all the best.', 'Well played, I salute you all.', 'For glory and honor! Huzzah comrades!', 'It was an honor to play with you all. Thank you.', 'Great game, everyone!', 'I feel very, very small... someone please hold me...', 'I\'m wrestling with some insecurity issues in my life but thank you all for playing with me.', 'Good game! Best of luck to you all!', 'C\'mon, Mom! One more game before you tuck me in. Oops mistell.', 'Gee whiz! That was fun. Good playing.', 'Ah shucks... you guys are the best!', 'I\'m trying to be a nicer person. It\'s hard, but I am trying, guys.', 'Mommy says people my age shouldn\'t suck their thumbs.', 'I could really use a hug right now.'];
		if (message.content.includes('ggez')) {
			return ggEZResponses[Math.floor(Math.random() * ggEZResponses.length)];
		}
	},
};