import { Map } from "immutable" //性能优化
import { 
  ADDSONGPAGEMES,
  CHANGECURRENTSONG,
  CLEARSONGPAGEMES
} from "./contant"

const initState = Map({
  currentSong: {},
  songPageMes: {}
})

export default function reducer(state = initState, actions) {
  switch(actions.type) {
    case CHANGECURRENTSONG:
      return state.set('currentSong', actions.currentSong)
    case ADDSONGPAGEMES:
      return state.set('songPageMes', actions.songMes)
    case CLEARSONGPAGEMES:
      return state.set('songPageMes', {})
    default:
      return state
  }
}