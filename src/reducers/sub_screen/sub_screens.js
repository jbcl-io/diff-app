import _ from 'underscore'
import init_state from './init_state'

export default (state = init_state, action) => {
  let value = '';

  switch (action.type) {
    case 'backspace':
      value = state[`screen${action.payload.screen}`].value
      if (value.length > 0) {
        state[`screen${action.payload.screen}`].value = value.substr(0, value.length-1)
      }

      return {...state}

    case 'dot':
      value = state[`screen${action.payload.screen}`].value
      state[`screen${action.payload.screen}`].value = value + '.'

      return {...state}

    default:

      if (typeof action.type == 'number') {
        value = state[`screen${action.payload.screen}`].value
        state[`screen${action.payload.screen}`].value = value + action.type

        return {...state}
      }

      return state
  }
}