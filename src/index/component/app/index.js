import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import App from './App'
import { fetchNextPage } from '../../action'

const AppContainer = connect(
  state => ({ page: state.page }),
  dispatch => ({
    fetchNextPage () {
      dispatch(fetchNextPage())
    },
    onScrollEnd () {
      dispatch(fetchNextPage())
    }
  }),
  (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    didMount () {
      const { page } = stateProps
      if (page === 0) {
        dispatchProps.fetchNextPage()
      }
    }
  })
)(App)

export default hot(module)(AppContainer)
