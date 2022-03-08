import { Map } from "immutable" //性能优化
import { 
  ADDSONGPAGEMES,
  CHANGESONGLIST,
  CHANGECURRENTSONG,
  CHANGECURRENTSONGINDEX
} from "./contant"

const initState = Map({
  currentSong: {},
  songPageMes: {},
  songList: [],
  currentSongIndex: 0
})

export default function reducer(state = initState, actions) {
  switch(actions.type) {
    case CHANGECURRENTSONG:
      return state.set('currentSong', actions.currentSong)

    case ADDSONGPAGEMES:
      return state.set('songPageMes', actions.songMes)

    case CHANGESONGLIST:
      return state.set('songList', actions.songList)

    case CHANGECURRENTSONGINDEX:
      return state.set('currentSongIndex', actions.index)

      
    default:
      return state
  }
}