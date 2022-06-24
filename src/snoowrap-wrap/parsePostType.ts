import { PostInfo } from './types'

const getMediaEmbed = (url: string, thumbnail: string) => {
  const sourceTag = /(src="\S*)/m
  const source = sourceTag.exec(url)?.[0]
  let actualURL = source?.substring(5, source.length - 1)

  if (actualURL?.includes('cdn.embedly.com')) return 'Embedly'
  if (actualURL?.includes('redgifs.com')) return 'RedGifs'
  if (actualURL?.includes('gfycat.com')) return 'Gyfcat'
  return 'UnknownEmbed'
}

export const parsePostType = (post: PostInfo) => {
  if (post.is_video) return 'RedditVideo'
  if (post.media) return getMediaEmbed(post.media_embed.content as string, post.thumbnail)
  if (post.preview) {
    if (post.url.includes('.gifv')) return 'ImgurMP4'
    if (post.url.includes('.gif')) return 'RedditGIF'
  }
  if (post.url.includes('imgur.com')) return 'ImgurPicture'
  if (post.url.includes('redd.it')) return 'RedditPicture'
  return 'UnknownLink'
}
