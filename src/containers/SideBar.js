import { connect } from 'react-redux'
import SideBar from '../SideBar'

export default connect(state => {
  return { users: state.users }
})(SideBar)