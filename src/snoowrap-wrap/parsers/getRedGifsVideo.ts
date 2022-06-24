export const getRedGifsVideo = (url: string, thumbnail: string) => {
  if (!thumbnail) return url
  const splitURL = thumbnail.split('/')[3]
  const identifier = splitURL.substring(0, splitURL.length - 11)
  const fullSizeURL = `https://thumbs2.redgifs.com/${identifier}.mp4`
  return fullSizeURL
}
