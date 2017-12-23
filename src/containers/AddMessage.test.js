import React from 'react'
import Enzyme from 'enzyme'
import { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AddMessage from './AddMessage'

const setup = () => {
  const prop = {
    users: [],
    addUser: jest.fn()
  }
  Enzyme.configure({
    adapter: new Adapter()
  })

  const enzymeWrapper = mount(<AddMessage {...prop} />)

  return {
    prop,
    enzymeWrapper
  }
}

describe('AddMessage', () => {
  const { enzymeWrapper } = setup()
  it('should render self', () => {
    expect(enzymeWrapper.find('section#new-message').length).toBe(1)
  })
})