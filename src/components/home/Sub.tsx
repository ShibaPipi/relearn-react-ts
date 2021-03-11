import React, { FC, PropsWithChildren } from 'react'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'
import { decrCount, subCount } from '../../store/home/actionCreators'
import { changeMobileCaptchaAction } from '../../store/register/actionCreators'
import { ReducerCombiner } from '../../concerns/store'

const Sub: FC = (props: PropsWithChildren<any>) => (
  <div>
    <h1>Sub</h1>
    <h2>当前计数：{props.num}</h2>
    <button onClick={() => props.decrement()}>-1</button>
    <button onClick={() => props.subCount(5)}>-5</button>
    <h2>当前验证码：{props.text}</h2>
    <button onClick={() => props.changeMobileCaptcha()}>获取验证码</button>
  </div>
)

const mapStateToProps = (state: ReducerCombiner) => ({
  num: state.home.num,
  text: state.register.text
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  decrement: (): void => {
    dispatch(decrCount())
  },
  subCount: (num: number): void => {
    dispatch(subCount(num))
  },
  changeMobileCaptcha: (): void => {
    dispatch(changeMobileCaptchaAction)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Sub)
