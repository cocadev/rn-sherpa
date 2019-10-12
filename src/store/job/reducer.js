import * as types from "./actionTypes";

const initialState = {
  chat: [],
  offer: 0,
  situation:null,
};

export default function job(state = initialState, action = {}) {
  switch (action.type) {

    case types.SET_CHAT:

      state.chat.push(action.chat)

      return {
        ...state,
        type: types.SET_CHAT,
        chat: state.chat,
        status: action.status
      }

    case types.SET_OFFER:

      return {
        ...state,
        type: types.SET_OFFER,
        offer: action.offer,
        status: action.status
      }

    case types.SET_SITUATION:

      console.log('my reducer', action.situation)
      
      return {
        ...state,
        type: types.SET_SITUATION,
        situation: action.situation,
        status: action.status
      }

    default:
      return state;
  }
}
