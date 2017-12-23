import {addMessage, addUser } from './'
import * as types from './ActionTypes'

describe('adding a message', () => {
  it('should create an action to add a message with id 0', () => {
    const message = 'something',
    const action = {
      types: types.ADD_MESSAGE,
      message,
      author: 'Me',
      id: 0
    }
    expect(addMessage(message)).toEqual(action)
  })
})