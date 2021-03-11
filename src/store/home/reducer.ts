import { ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER } from './constants'
import { AnyAction } from 'redux'
import { DefaultCounterState } from '../../concerns/store'

const defaultCounterState = {
  num: 0,
}

const homeReducer = (state: DefaultCounterState = defaultCounterState, action: AnyAction): DefaultCounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, num: state.num + 1 }
    case DECREMENT:
      return { ...state, num: state.num - 1 }
    case ADD_NUMBER:
      return { ...state, num: state.num + action.num }
    case SUB_NUMBER:
      return { ...state, num: state.num - action.num }
    default:
      return state
  }
}

export default homeReducer
