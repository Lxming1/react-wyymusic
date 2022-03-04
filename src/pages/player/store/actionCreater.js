import { getSongApi } from "services/player";
import { CHANGECURRENTSONG } from "./contant";

export const changeCurrentSong = currentSong => ({
  type: CHANGECURRENTSONG,
  currentSong
})

export const getCurrentSong = (id) => {
  return dispatch => {
    getSongApi(id).then(res => {
      dispatch(changeCurrentSong(res.songs[0]))
    })
  }
}