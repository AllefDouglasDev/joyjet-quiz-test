import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewQuiz from './pages/NewQuiz'
import Quiz from './pages/Quiz'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/quiz/new' component={NewQuiz}/>
        <Route path='/quiz/:id' component={Quiz}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes