import getSnooPost from '../snoowrap-wrap/index'

export const getPosts = async (msgArgs: string[]) => {
  return getSnooPost({ subreddit: msgArgs[0], time: msgArgs[2] || 'year' })
}
