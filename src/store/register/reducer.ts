import { DefaultCaptchaState } from '../../concerns/store'
import { AnyAction } from 'redux'
import { CHANGE_MOBILE_CAPTCHA } from './constants'

const defaultCaptchaState: DefaultCaptchaState = {
  text: '123456'
}

const registerReducer = (state: DefaultCaptchaState = defaultCaptchaState, action: AnyAction): DefaultCaptchaState => {
  switch (action.type) {
    case CHANGE_MOBILE_CAPTCHA:
      return {
        ...state, text: action.text
      }
    default:
      return state
  }
}

export default registerReducer
