import { changeSongList, getCurrentSong } from "../pages/player/store/actionCreater"
import { getSongUrl } from "../services/player"

export function addAndPlayOne(songList, dispatch){
  let mySongList = []
  let firstPlay = true
  songList?.forEach((item, index) => {
    if (firstPlay){
      dispatch(getCurrentSong(songList[index].id, true))
      firstPlay = false
    }
    mySongList.push(item)
    // getSongUrl(item.id).then(res => {
    //   if (res.data[0].url) {      //逐一判断音乐是否可播放，知道判断到可以播放的音乐
    //     if(firstPlay){
    //       dispatch(getCurrentSong(songList[index].id, true))
    //       firstPlay = false
    //     }
    //     mySongList.push(item)
    //   }
    // })
  })
  dispatch(changeSongList(mySongList))
}