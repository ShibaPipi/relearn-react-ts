import { Dispatch } from 'redux'

import { ADD_NUMBER, CHANGE_MOBILE_CAPTCHA, DECREMENT, INCREMENT, SUB_NUMBER } from './constants'
import { getMobileCaptcha } from '../api'

export const incrCount = (): { type: string } => ({
  type: INCREMENT,
})

export const decrCount = (): { type: string } => ({
  type: DECREMENT
})

export const addCount = <T>(num: T): { type: string, num: T } => ({
  type: ADD_NUMBER,
  num
})

export const subCount = <T>(num: T): { type: string, num: T } => ({
  type: SUB_NUMBER,
  num
})

export const setMobileCaptchaAction = <T>(captcha: T): { type: string, captcha: T } => ({
  type: CHANGE_MOBILE_CAPTCHA,
  captcha
})

export const changeMobileCaptchaAction = async (dispatch: Dispatch): Promise<void> => {
  const { args: { captcha } } = await getMobileCaptcha()
  dispatch(setMobileCaptchaAction<string>(captcha))
}
