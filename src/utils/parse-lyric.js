export function parseLyric(lyric) {
  const arr = []
  lyric?.split('\n').forEach(item => {
    const minAndSeconds = item.slice(1).split(']')[0].split(':')      //时间
    const lyric = item.split(']')[1]?.trim()                          //歌词
    const min = minAndSeconds[0]
    const seconds = minAndSeconds[1]
    const timeChuo = (min*60 + parseFloat(seconds)) * 1000
    const obj = {
      time: timeChuo,
      content: lyric
    }
    arr.push(obj)
  })?.filter((item, index, arr) => index !== arr.length-1)
  return arr
}