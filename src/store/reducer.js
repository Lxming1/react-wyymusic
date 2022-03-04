import { combineReducers } from "redux-immutable"  //性能优化 
import discoverReducer from 'pages/discover/store/reducer'
import songReducer from 'pages/player/store/reducer'
const reducer = combineReducers({
  discoverInfo: discoverReducer,
  songInfo: songReducer
})

export default reducer