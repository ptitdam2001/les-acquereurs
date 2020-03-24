import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from './store'
import { theme } from './theme'

import { FrontMain } from './front/FrontMain'
import { AdminMain } from './admin/AdminMain'

const App: React.FC = () => {
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
