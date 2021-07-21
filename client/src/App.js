import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Wrapper from './components/Wrapper/Wrapper'
import SavedBooks from './pages/SavedBooks'
import SearchBooks from './pages/SearchBooks'


function App() {
  return (
    <Router>
    <div>
      {/* <Navbar /> */}
      <Wrapper>
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route exact path='/saved:id' component={SavedBooks} />
          <Route exact path='/search' component={SearchBooks} />
        </Switch>
      </Wrapper>
    </div>
  </Router>
);
}

export default App;
