import { Action, AnyAction } from 'redux'

import { ADD_NUMBER, DECREMENT, INCREMENT, SUB_NUMBER } from './constants'

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
