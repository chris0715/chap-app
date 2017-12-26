import * as types from './actions/ActionTypes'
import * as actions from './actions'
import openSocket from 'socket.io-client'


const setupWebSocket = (dispatch, username) => {
  const socket = new WebSocket('ws://localhost:8989')
  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      username
    }))
    dispatch(actions.addUser(username))
  }
  socket.onmessage = (event) => {
  
  const data = JSON.parse(event.data)
  console.log(data)
  switch (data.type) {
    case types.ADD_USER:
      dispatch(actions.addUser(data.user))
      break
    
    case types.ADD_MESSAGE:
    dispatch(actions.addMessage(data.message, data.author))
    break

    case types.MESSAGE_RECEIVED:
    dispatch(actions.messageReceived(data.message, data.author))
    break

    case types.USERS_LIST:
      dispatch(actions.populateUserList(data))
      break
  }
  
  }

  return socket
}


export default setupWebSocket