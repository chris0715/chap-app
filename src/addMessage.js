import { connect } from 'react-redux'
import React from 'react'
import NewMessage from './components/NewMessage'
import message from './message';

const mapDispatchToProps = dispatch => (
  {
    dispatch: (message, author) => {
      dispatch()
    }
  }
)