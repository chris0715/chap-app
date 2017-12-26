import * as types from '../actions/ActionTypes'

export default (state = [], action) => {
  console.log(action, '*************')
  switch(action.type) {
    case types.ADD_USER:
      return state.concat([{username: action.username, id: action.id}])
    case types.USERS_LIST: 
      return action.users
    default:
      return state
  }

}