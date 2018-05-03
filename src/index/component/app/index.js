import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import App from './App'

const AppContainer = connect(null, null)(App)

export default hot(module)(AppContainer)
