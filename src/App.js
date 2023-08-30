import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Userlist from "./containers/Userlist"
import UserDetails from './containers/UserDetails';
import Notfound from './containers/Notfound'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/allusers" exact component={Userlist} />
          <Route path="/userdetails/:params" component={UserDetails} />
          <Route component={Notfound} ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
