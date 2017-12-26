import * as types from './ActionTypes'

let nextMessageId = 0

export const addMessage = (message, author) => ({ 
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
  })

export const addUser = username => ({
  type: types.ADD_USER,
  username
})

export const messageReceived = (message, author) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUserList = users => {
  console.log('I got here')
  return {
    type: types.USERS_LIST,
    users
  }
  
}