import { bold } from '@discordjs/builders'
import fetch from 'node-fetch'

const getLastFmData = async (user: string) => {
  const response = await fetch('https://ascent-steel.vercel.app/api/lastfm', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user,
    }),
  })
  const lastFmResponse = await response.json()
  return lastFmResponse
}

export const getLastFmSong = async (msgArgs: string[]) => {
  const userName = msgArgs[0]

  if (!userName) return [null, 'Please refer to help for how to use this command']
  const userSong = await getLastFmData(userName)

  if (userSong.error) return [null, userSong.error]
  const songInfo = `${bold(userSong.track)} by ${bold(userSong.artist)}`
  const songImage = userSong.image
  return [songImage, songInfo]
}
