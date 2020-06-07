import { Command, Message } from '../../Client';

const callback = async (msg: Message, args: string[]) => {
	return msg.client.nekos.sendImage(msg, args, 'hug', msg.client.constants.actionStrings.hug.random());
};

export const command: Command = {
	name: 'hug',
	category: 'Fun',
	aliases: ['huggu', 'hugs'],
	description: 'Hug your friends!',
	usage: '[Member]',
	args: 0,
	devOnly: false,
	guildOnly: false,
	nsfw: false,
	memberPermission: [],
	botPermission: [],
	callback: callback
};
