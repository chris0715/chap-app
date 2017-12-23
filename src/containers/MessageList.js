import { connect } from 'react-redux'
import MessageList from '../components/MessageList'

export default connect(state => ({
  messages: state.messages
}), null)(MessageList)