import { getSongApi, getSongUrl, getCommentCount, getLyric } from "services/player";
import { ADDSONGPAGEMES, CHANGECURRENTSONG, CLEARSONGPAGEMES } from "./contant";

// 播放中的音乐信息
export const changeCurrentSong = currentSong => ({
  type: CHANGECURRENTSONG,
  currentSong
})
// 音乐信息展示页的信息
export const addSongPageMes = songMes => ({
  type: ADDSONGPAGEMES,
  songMes
})

export const clearSongPageMes = () => ({
  type: CLEARSONGPAGEMES
})

export const getCurrentSong = (id, isPlay) => {
  return dispatch => {
    getSongApi(id).then(res => {
      const songMes = {...res.songs[0]}
      
      Promise.all([
        getSongUrl(id).then(res1 => {
          songMes.songUrl = res1.data[0]
        }),
        getCommentCount(id).then(res2 => {
          songMes.commentCount = res2.total
        }),
        getLyric(id).then(res3 => {
          songMes.lyric = res3.lrc.lyric
        })
      ]).then(() => {
        window.localStorage.setItem('currentSong', JSON.stringify(songMes))
        isPlay ? dispatch(changeCurrentSong(songMes)) : dispatch(addSongPageMes(songMes))
      })
    })
  }
}