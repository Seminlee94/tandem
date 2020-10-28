import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter, withRouter } from "react-router-dom"
import Login from "./Auth/Login"
import Home from "./Home/Home"
import Navbar from './Navbar/Navbar'


function App() {


      return (
    
        <BrowserRouter>
          <Switch>

            <Route path="/login"> 
              <Login />
            </Route>

            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
    
          </Switch>
        
        </BrowserRouter>
      );

}

export default withRouter(App);
