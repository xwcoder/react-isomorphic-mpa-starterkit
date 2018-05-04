import { connect } from 'react-redux'
import Footer from './Footer'

const FooterContainer = connect(
  state => ({ fetchStatus: state.fetchStatus }),
  null
)(Footer)

export default FooterContainer
