import { ADD_NUMBER, CHANGE_MOBILE_CAPTCHA, DECREMENT, INCREMENT, SUB_NUMBER } from './constants'
import { AnyAction } from 'redux'
import { InitState } from '../concerns/store'


const initState: InitState = {
  counter: 0,
  captcha: '123456'
}

const reducer = (state: InitState = initState, action: AnyAction): InitState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case CHANGE_MOBILE_CAPTCHA:
      return {
        ...state, captcha: action.captcha
      }
    default:
      return state
  }
}

export default reducer
