import { Dispatch, AnyAction } from 'redux'

import { CHANGE_MOBILE_CAPTCHA } from './constants'
import { getMobileCaptcha } from '../../api'


export const setMobileCaptchaAction = (text: string): AnyAction => ({
  type: CHANGE_MOBILE_CAPTCHA,
  text
})

export const changeMobileCaptchaAction = async (dispatch: Dispatch): Promise<void> => {
  const { args: { captcha } } = await getMobileCaptcha()
  dispatch(setMobileCaptchaAction(captcha))
}
