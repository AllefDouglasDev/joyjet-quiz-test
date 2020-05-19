import React from 'react'
import { Provider } from 'react-redux'

import Routes from './routes'
import store from './store'
import { global as GlobalStyle } from './assets/styles'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  )
}

export default App
