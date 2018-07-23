import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './container/Home'
import About from './container/About'
import Login from './container/Login'
import MyPage from './container/MyPage'
import Search from './container/Search'
import Header from './component/Header'
import Posts from './component/Posts'
import NotFound from './container/notFound';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:username" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/myPage" component={MyPage} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App