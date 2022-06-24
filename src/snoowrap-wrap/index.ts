import snoowrap from 'snoowrap'
import { SortedListingOptions } from 'snoowrap/dist/objects'
import { parsePostType } from './parsePostType'
import { pickParser } from './parsers'
import { PostInfo, SnooPost } from './types'

const r = new snoowrap({
  userAgent: 'Image Fetcher by /u/Kalmarv',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
})

const getSnooPost = async ({ subreddit, time }: SnooPost) => {
  try {
    const posts = await r.getTop(subreddit, {
      time: time as SortedListingOptions['time'],
      limit: 50,
    })

    if (posts.length === 0) return `No posts found in ${subreddit}`
    const chosenPost = posts[Math.floor(Math.random() * posts.length)]

    const postInfo = {
      id: chosenPost.id,
      title: chosenPost.title,
      url: chosenPost.url,
      is_video: chosenPost.is_video,
      media: chosenPost.media,
      media_embed: chosenPost.media_embed,
      thumbnail: chosenPost.media?.oembed?.thumbnail_url,
      preview: chosenPost.preview,
      redditVideo: chosenPost.media?.reddit_video,
    } as PostInfo

    const postType = parsePostType(postInfo)
    const parsedURL = pickParser(postType, postInfo)

    return parsedURL
  } catch (error: any) {
    if (error?.error?.reason) {
      return `Error: Reason - ${error?.error?.reason}, Message - ${error?.error?.message}`
    } else {
      if (error?.statusCode === 404) return `Error: ${error.statusCode} (not found)`
      else return `Unknown Error`
    }
  }
}

export default getSnooPost
