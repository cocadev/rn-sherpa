import * as types from './actionTypes';

export function setLocation(location){

  console.log('This is my location~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`', location)

  return dispatch =>{
    dispatch({type:types.SET_LOCATION, location});
  }
}
