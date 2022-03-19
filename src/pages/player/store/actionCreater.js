import { getSongApi, getSongUrl, getCommentCount, getLyric } from "services/player";
import { ADDSONGPAGEMES, CHANGESONGLIST, CHANGECURRENTSONG, CHANGECURRENTSONGINDEX } from "./contant";

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

export const changeSongList = songList => ({
  type: CHANGESONGLIST,
  songList
})

export const changCurrentSongIndex = index => ({
  type: CHANGECURRENTSONGINDEX,
  index
})

export const addToSonglist = song => {
  return (dispatch, getState) => {
    const songList = [...getState().getIn(['songInfo', 'songList'])]
    if (Object.prototype.toString.call(song) === '[object Object]'){
      const index = songList.findIndex(item => item.id === song.id)
      if (index === -1){
        songList.push(song)
        dispatch(changeSongList(songList))
      }
    } else {
      const newSonglist = [...new Set([...songList, ...song])]
      dispatch(changeSongList(newSonglist))
    }
  }
}

export const getCurrentSong = (id, isPlay) => {
  return (dispatch, getState) => {
    getSongApi(id).then(res => {
      const songMes = {...res?.songs[0]}
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
        if(!songMes.songUrl?.url) return
        if(isPlay) {
          const songList = [...getState().getIn(['songInfo', 'songList'])]
          let currentIndex;
          if (songList.length === 0) {
            songList.push(songMes)
            currentIndex = 0
          } else {
            const index = songList.findIndex(item => item.id === songMes.id)
            if (index === -1){
              currentIndex = songList.length
              songList.push(songMes)
            }else {
              currentIndex = index
            }
          }
          dispatch(changeSongList(songList))
          dispatch(changCurrentSongIndex(parseInt(currentIndex)))
          dispatch(changeCurrentSong(songMes))
          // window.localStorage.setItem('currentSong', JSON.stringify(songMes))
        } else {
          dispatch(addSongPageMes(songMes))
        }
      })
    })
  }
}