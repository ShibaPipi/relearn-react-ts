import React, { FC, PropsWithChildren } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { changeMobileCaptchaAction, decrCount, subCount } from '../../store/actionCreators'
import { InitState } from '../../concerns/store'

const Sub: FC = (props: PropsWithChildren<any>) => (
  <div>
    <h1>Sub</h1>
    <h2>当前计数：{props.counter}</h2>
    <button onClick={() => props.decrement()}>-1</button>
    <button onClick={() => props.subCount(5)}>-5</button>
    <h2>当前验证码：{props.captcha}</h2>
    <button onClick={() => props.changeMobileCaptcha()}>获取验证码</button>
  </div>
)

const mapStateToProps = (state: InitState) => ({
  counter: state.counter,
  captcha: state.captcha
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  decrement: (): void => {
    dispatch(decrCount())
  },
  subCount: (num: number): void => {
    dispatch(subCount<number>(num))
  },
  changeMobileCaptcha: (): void => {
    dispatch(changeMobileCaptchaAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sub)
