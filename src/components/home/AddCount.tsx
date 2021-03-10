import React, { FC, PropsWithChildren } from 'react'
import { connect } from 'react-redux'
import { addCount, incrCount } from '../../store/actionCreators'
import { InitState } from '../../concerns/store'
import { Dispatch } from 'redux'

const AddCount: FC = (props: PropsWithChildren<any>) => {
  return (
    <div>
      <h1>Add</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.increment()}>+1</button>
      <button onClick={() => props.addCount(5)}>+5</button>
    </div>
  )
}

const mapStateToProps = (state: InitState) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (): void => {
    dispatch(incrCount())
  },
  addCount: (num: number): void => {
    dispatch(addCount<number>(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
