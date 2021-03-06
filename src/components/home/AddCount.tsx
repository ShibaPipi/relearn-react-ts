import React, { FC, PropsWithChildren } from 'react'
import { connect } from 'react-redux'
import { addCount, incrCount } from '../../store/home/actionCreators'
import { ReducerCombiner } from '../../concerns/store'
import { Dispatch } from 'redux'

const AddCount: FC = (props: PropsWithChildren<any>) => {
  return (
    <div>
      <h1>Add</h1>
      <h2>当前计数：{props.num}</h2>
      <button onClick={() => props.increment()}>+1</button>
      <button onClick={() => props.addCount(5)}>+5</button>
    </div>
  )
}

const mapStateToProps = (state: ReducerCombiner) => ({
  counter: state.home.num
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: (): void => {
    dispatch(incrCount())
  },
  addCount: (num: number): void => {
    dispatch(addCount(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
