import { connect } from 'react-redux'
import List from './List'

const ListContainer = connect(state => ({ list: state.list }))(List)
export default ListContainer
