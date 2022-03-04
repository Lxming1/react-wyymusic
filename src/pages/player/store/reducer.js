import { Map } from "immutable" //性能优化
import { 
  CHANGECURRENTSONG
} from "./contant"

const initState = Map({
  currentSong: {}
})

export default function reducer(state = initState, actions) {
  switch(actions.type) {
    case CHANGECURRENTSONG:
      return state.set('currentSong', actions.currentSong)
    default:
      return state
  }
}