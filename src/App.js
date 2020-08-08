import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home'; 
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/Portfolio'

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={Home}></Route>
        <Route path="/portfolio" component={Portfolio}></Route>
        <Route path="/" component={Home}></Route>
        <Route path="/" component={Home}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
