import { bold } from '@discordjs/builders'

const createCommandDescription = (command: string, description: string, example: string) => {
  return `\n${bold(command)} - ${description}\n> ${process.env.COMMAND_PREFIX} ${example}`
}

const commands = [
  createCommandDescription('help', 'Show this help message', 'help'),
  createCommandDescription('ping', "Tests I'm alive", 'ping'),
  createCommandDescription('pfp', 'Get the profile picture of any mentioned users', 'pfp @user'),
  createCommandDescription(
    'playing',
    'Get the last played song of a last.fm user',
    'playing kalmarv'
  ),
  createCommandDescription('laugh', 'Laugh at any user', 'laugh at @user'),
  createCommandDescription('r', 'Get a random post from a subreddit', 'r pics'),
]

export const help = () => {
  const heading = bold("Hi!, I'm your helpful bot!\n")
  const info = 'Here are some commands I can help you with:\n'
  const formattedMessage = heading + info + commands

  return formattedMessage
}
