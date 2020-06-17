import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Configure translation
import '../core/i18n'

import { store } from './store'

import { FrontMain } from './front/FrontMain'
import { AdminMain } from './admin/AdminMain'

import setupTheme from '../setupTheme'

const App: React.FC = () => {
  const theme = setupTheme(1)
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={FrontMain} />
            <Route path="/admin" component={AdminMain} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
