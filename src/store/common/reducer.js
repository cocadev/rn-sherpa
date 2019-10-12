import * as types from "./actionTypes";

const initialState = {
  location: null,
};

export default function common(state = initialState, action = {}) {
  switch (action.type) {

    case types.SET_LOCATION:
     console.log('are you there?')
      return {
        ...state,
        type: types.SET_LOCATION,
        location: action.location,
        status: action.status
      }

    default:
      return state;
  }
}
