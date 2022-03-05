import { getSongApi, getSongUrl } from "services/player";
import { CHANGECURRENTSONG } from "./contant";

export const changeCurrentSong = currentSong => ({
  type: CHANGECURRENTSONG,
  currentSong
})

export const getCurrentSong = (id) => {
  return dispatch => {
    getSongApi(id).then(res => {
      const songMes = {...res.songs[0]}

      getSongUrl(id).then(res1 => {
        songMes.songUrl = res1.data[0]
        window.localStorage.setItem('currentSong', JSON.stringify(songMes))
        dispatch(changeCurrentSong(songMes))
      })
    })
  }
}