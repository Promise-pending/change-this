import { Command, Message } from '../../Client';

const callback = async (msg: Message, args: string[]) => {
	const hugs = msg.client.constants.stringsHugs;
	return msg.client.nekos.sendImage(msg, args, 'hug', hugs[Math.floor(Math.random() * hugs.length)]);
};

export const command: Command = {
	name: 'hug',
	category: 'Fun',
	aliases: ['huggu', 'hugs'],
	description: 'Hugs your friends!',
	usage: '<@member|nickname>',
	args: 1,
	devOnly: false,
	guildOnly: false,
	nsfw: false,
	memberPermission: [],
	botPermission: ['EMBED_LINKS'],
	callback: callback
};
