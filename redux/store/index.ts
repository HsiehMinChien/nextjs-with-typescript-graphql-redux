import { createStore, } from 'redux'

const initialState = {
  lastUpdate: 0,
  light: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TICK':
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      }
    default:
      return state
  }
}

export const initializeStore = (preloadedState = initialState) => {
  return createStore(reducer, preloadedState);
}
