import { combineReducers } from "redux-immutable"  //性能优化 
import discoverReducer from 'pages/discover/store/reducer'
const reducer = combineReducers({
  discoverInfo: discoverReducer
})

export default reducer