export type DefaultCounterState = {
  num: number,
}

export type DefaultCaptchaState = {
  text: string,
}

export type CounterReducerCombiner = {
  home: DefaultCounterState
}

export type CaptchaReducerCombiner = {
  register: DefaultCaptchaState
}

export interface ReducerCombiner extends CounterReducerCombiner, CaptchaReducerCombiner {
}
