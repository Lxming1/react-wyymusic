import { combineReducers } from "redux-immutable"  //性能优化 
import recommendReducer from 'pages/discover/c-pages/recommend/store/reducer'
import songReducer from 'pages/player/store/reducer'
const reducer = combineReducers({
  recommendInfo: recommendReducer,
  songInfo: songReducer
})

export default reducer