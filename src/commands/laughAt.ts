import { Message, User } from 'discord.js'

const choose = (array: any[]) => array[Math.floor(Math.random() * array.length)]

const laughingMessages = [
  (user: User, msg: string) => `I'm not sure what you're trying to say ${user}, but I'm sure you're not very funny.`,
  (user: User, msg: string) => `Does that pass for humor where you're from? ${user}`,
  (user: User, msg: string) => `And here you've reached a new level of funny ${user}. The ground level.`,
  (user: User, msg: string) => `Truly, your wit has never been equaled ${user}. Surpassed, often, but never equaled.`,
  (user: User, msg: string) => `What a bitch ${user}`,
]

export const laughAt = (msg: Message) => {
  if (msg.mentions.users.size < 1) return 'Please mention a user!'
  const user = msg.mentions.users.first()
  return choose(laughingMessages)(user, msg.content)
}
