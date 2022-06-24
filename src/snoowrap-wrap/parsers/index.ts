import { getImgurMP4 } from './getImgurMP4'
import { PostInfo } from '../types'
import { getRedGifsVideo } from './getRedGifsVideo'

export const pickParser = (parser: string, postInfo: PostInfo) => {
  switch (true) {
    case parser === 'RedditVideo':
      return postInfo.redditVideo?.fallback_url
      break
    case parser === 'RedditGIF':
      return postInfo.url
      break
    case parser === 'ImgurMP4':
      return getImgurMP4(postInfo.url)
      break
    case parser === 'Embedly':
      return postInfo.url
      break
    case parser === 'RedGifs':
      return getRedGifsVideo(postInfo.url, postInfo.thumbnail)
      break
    case parser === 'Gyfcat':
      return postInfo.url
      break
    case parser === 'UnknownEmbed':
      return `Unknown Embed ${postInfo.url}`
      break
    case parser === 'UnknownLink':
      return `Unknown Link ${postInfo.url}`
      break
    case parser === 'ImgurPicture':
      return postInfo.url
      break
    case parser === 'RedditPicture':
      return postInfo.url
      break
    default:
      return `Unknown Link or no media, ${postInfo.url}`
      break
  }
}
