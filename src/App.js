import React, {Component} from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Download from "./components/Download";
import Home from "./components/Home";

import { 
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";


class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="app">
        <Header />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
          

        </Switch>
        

      </div>
      </BrowserRouter>
    )
  }
}

export default App;
