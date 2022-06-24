import { Message } from 'discord.js'

export const getProfilePicture = (msg: Message) => {
  if (msg.mentions.users.size < 1) return 'Please mention a user!'
  return msg.mentions.users.map((user) => `${user.displayAvatarURL({ format: 'png', dynamic: true })}`).join('\n')
}
