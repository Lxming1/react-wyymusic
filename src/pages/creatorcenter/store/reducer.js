import { GETALBUM, GETBANNERMES, GETRECOMMEND } from "./contant"

const initState = {
  bannerMes: [],
  recommendMes: [],
  albumMes: []
}

export default function reducer(state = initState, actions) {
  switch(actions.type) {
    case GETBANNERMES:
      return {...state, bannerMes: actions.banner}
    case GETRECOMMEND:
      return {...state, recommendMes: actions.recommend}
    case GETALBUM:
      return {...state, albumMes: actions.album}
    default:
      return state
  }
}