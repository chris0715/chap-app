import * as types from '../actions/ActionTypes'
export default (state =[{id: 1, name:'marcos'}], action) => {
  switch(action.type) {
    case types.ADD_USER:
      return state.concat([{name: action.name, id: action.id}])
    case types.USERS_LIST: 
      return action.users
    default:
      return state
  }

}