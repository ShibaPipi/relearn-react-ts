import { combineReducers } from 'redux'

import { reducer as homeReducer } from './home'
import { reducer as regReducer } from './register'

const reducer = combineReducers({
  home: homeReducer,
  register: regReducer
})

export default reducer
