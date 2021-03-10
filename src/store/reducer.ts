import { ADD_NUMBER, CHANGE_MOBILE_CAPTCHA, DECREMENT, INCREMENT, SUB_NUMBER } from './constants'
import { AnyAction, combineReducers } from 'redux'
import { InitState } from '../concerns/store'

const initCountState = {
  counter: 0,
}

const counterReducer = (state = initCountState, action: AnyAction): InitState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 }
    case DECREMENT:
      return { ...state, counter: state.counter - 1 }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

const initCaptchaState = {
  captcha: '123456'
}

const captchaReducer = (state = initCaptchaState, action: AnyAction): InitState => {
  switch (action.type) {
    case CHANGE_MOBILE_CAPTCHA:
      return {
        ...state, captcha: action.captcha
      }
    default:
      return state
  }
}

// const reducer = (state: InitState, action: AnyAction): InitState => {
//   return {
//     counter: counterReducer(state.counter, action),
//     captcha: captchaReducer(state.captcha, action)
//   }
// }
const reducer = combineReducers({
  counter: counterReducer,
  captcha: captchaReducer
})

export default reducer
