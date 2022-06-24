import { Client, Intents, Message } from 'discord.js'
import { getLastFmSong } from './commands/getLastFmSong'
import { getPosts } from './commands/getPosts'
import { getProfilePicture } from './commands/getProfilePicture'
import { help } from './commands/help'
import { laughAt } from './commands/laughAt'

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`)
})

client.on('messageCreate', async (msg: Message) => {
  if (
    !msg.content.toLowerCase().startsWith(process.env.COMMAND_PREFIX as string) ||
    msg.author.username === client.user?.username
  )
    return
  const msgText = msg.content.toLowerCase()
  const command = msgText.split(' ').slice(1, 2)[0]
  const msgArgs = msgText.split(' ').slice(2)

  switch (true) {
    case command === 'help':
      msg.channel.send(help())
      break
    case command === 'ping':
      msg.channel.send('Pong! 🏓')
      break
    case command === 'pfp':
      msg.channel.send(getProfilePicture(msg) || 'Something went wrong!')
      break
    case command === 'playing':
      const [songImage, songInfo] = await getLastFmSong(msgArgs)
      msg.channel.send(songImage || 'Something went wrong!')
      msg.channel.send(songInfo || 'Something went wrong!')
      break
    case command === 'laugh':
      msg.channel.send(laughAt(msg)).then((msg) => msg.react('😂'))
      break
    case command === 'r' || command === 'reddit':
      const response = await getPosts(msgArgs)
      msg.channel
        .send(response || 'No response from getPosts()')
        .then((msg) => (Math.random() > 0.8 ? msg.react('🔥') : null))
      break
  }
})

client.login()
