import { Map } from "immutable" //性能优化
import { 
  GETALBUM,
  GETANCHOR, 
  GETARTIST, 
  GETBANNERMES, 
  GETRECOMMEND, 
  GETRMDTOPLIST 
} from "./contant"

const initState = Map({
  bannerMes: [],
  recommendMes: [],
  albumMes: [],
  recToplistMes: [],
  artistMes: [],
  anchorMes: []
})

export default function reducer(state = initState, actions) {
  switch(actions.type) {
    case GETBANNERMES:
      return state.set('bannerMes', actions.banner)
    case GETRECOMMEND:
      return state.set('recommendMes', actions.recommend)
    case GETALBUM:
      return state.set('albumMes', actions.album)
    case GETRMDTOPLIST:
      return state.set('recToplistMes', actions.recommendToplist)
    case GETARTIST:
      return state.set('artistMes', actions.artist)
    case GETANCHOR:
      return state.set('anchorMes', actions.anchor)
    default:
      return state
  }
}