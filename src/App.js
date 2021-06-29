
import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import React from 'react'
import Header from './containers/Header';
import Productlisting from './containers/Productlisting';
import Productdetail from './containers/Productdetail';

export const App = () => {
  return (
    <div>
      
      <Router>
        <Header/>
        <Switch>
        <Route path="/" exact component={Productlisting}></Route>
        <Route path="/product/:productId" exact component={Productdetail}></Route>
        <Route>!404 Page not Found</Route>
        </Switch>
      </Router>
     
    </div>
  )
}
export default App;

