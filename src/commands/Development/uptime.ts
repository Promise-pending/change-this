import { Command, Message } from '../../Client';
import { stripIndents } from 'common-tags';

const callback = async (msg: Message, _args: string[]) => {
	const processUptime = process.uptime() * 1000;
	const clientUptime = msg.client.uptime!;

	return msg.channel.send(stripIndents`
	Node: ${msg.client.helpers.msToHuman(processUptime)}
	Client: ${msg.client.helpers.msToHuman(clientUptime)}
	`);
};

export const command: Command = {
	name: 'uptime',
	category: 'Dev',
	aliases: ['up'],
	description: 'Check the bot uptime',
	usage: '',
	args: 0,
	devOnly: true,
	guildOnly: false,
	nsfw: false,
	memberPermission: [],
	botPermission: [],
	callback: callback
};
