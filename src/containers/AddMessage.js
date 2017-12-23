import { connect } from 'react-redux'
import React from 'react'
import { addMessage } from '../actions'
import NewMessage from '../components/NewMessage'
const mapDispatchToProps = dispatch => (
  {
    dispatch: (message, author) => {
      dispatch(addMessage(message, author))
    }
  }
)
export default connect(null, mapDispatchToProps)(NewMessage)