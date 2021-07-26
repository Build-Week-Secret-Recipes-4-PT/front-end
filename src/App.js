import React from "react";
import RegistrationForm from "./RegistrationForm";
import { Route, Switch } from 'react-router-dom'
import './App.css';
import {connect} from 'react-redux';

function App() {
  return (
    <div className="App">
    <h1 className='page-header'>Secret Family Recipes</h1>
    <img
        className='image'
        src='https://images.unsplash.com/photo-1589152144820-692b189e0b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80'
        alt=''
        />
    <Switch>
      <Route path='/'>
        <RegistrationForm />
      </Route>              
    </Switch>
     
    </div>
  );
}

export default connect(null, {})(App);

// NEEDS ROUTING TO LOGIN FORM
// NEEDS ROUTING TO RECIPE FORM
// NEED PAGE THAT DISPLAYS ALL RECIPES
// BOTH HOME AND APP HAVE REACT-ROUTER-DOM SWITCH STATEMENTS- UNNECESSARY
// (ROUTER IS ON INDEX)
