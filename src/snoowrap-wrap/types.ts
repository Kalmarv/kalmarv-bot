import snoowrap from 'snoowrap'
import { Media } from 'snoowrap/dist/objects/Submission'

export interface SnooPost {
  subreddit: string
  time: string
}

export interface PostInfo extends snoowrap.Listing<snoowrap.Submission> {
  id: string
  title: string
  url: string
  is_video: boolean
  media: snoowrap.Submission['media']
  media_embed: snoowrap.Submission['media_embed']
  thumbnail: string
  preview: snoowrap.Submission['preview']
  redditVideo: Media['reddit_video']
}
