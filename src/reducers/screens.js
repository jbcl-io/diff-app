import _ from 'underscore';

export default (state = {
  activeScreen: 0
}, action) => {
  switch (action.type) {
    case 'prev':
      state.activeScreen = state.activeScreen - 1
      if (state.activeScreen < 0) state.activeScreen = 0
      return {...state}
    case 'next':
      state.activeScreen = state.activeScreen + 1
      if (state.activeScreen > 1) state.activeScreen = 1
      return {...state}
    case 'set_screen':
      state.activeScreen = action.payload
      return {...state}
    default:
      return state;
  }
}