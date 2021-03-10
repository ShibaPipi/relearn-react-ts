import { Dispatch, Action, AnyAction } from 'redux'

import { ADD_NUMBER, CHANGE_MOBILE_CAPTCHA, DECREMENT, INCREMENT, SUB_NUMBER } from './constants'
import { getMobileCaptcha } from '../api'

export const incrCount = (): Action<string> => ({
  type: INCREMENT,
})

export const decrCount = (): Action<string> => ({
  type: DECREMENT
})

export const addCount = (num: number): AnyAction => ({
  type: ADD_NUMBER,
  num
})

export const subCount = (num: number): AnyAction => ({
  type: SUB_NUMBER,
  num
})

export const setMobileCaptchaAction = (captcha: string): AnyAction => ({
  type: CHANGE_MOBILE_CAPTCHA,
  captcha
})

export const changeMobileCaptchaAction = async (dispatch: Dispatch): Promise<void> => {
  const { args: { captcha } } = await getMobileCaptcha()
  dispatch(setMobileCaptchaAction(captcha))
}
