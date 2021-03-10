import request from '../request'

export const getMobileCaptcha = (): Promise<any> => {
  return request({
    url: 'get',
    params: {
      captcha: '111111'
    },
    method: 'GET'
  })
}

export const login = (mobile: string): Promise<any> => {
  return request({
    url: 'post',
    data: {
      mobile
    },
    method: 'POST'
  })
}
