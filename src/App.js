import React from "react";
import RegistrationForm from "./RegistrationForm";
import { Route, Switch } from 'react-router-dom'
import './App.css';
import {connect} from 'react-redux';

function App(props) {
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
// NEEDS ROUTING TO HOME
// BOTH HOME AND APP HAVE REACT-ROUTER-DOM SWITCH STATEMENTS- UNNECESSARY
// (ROUTER IS ON INDEX)
// PLEASE DIFFERENTIATE LOGIN AND REGISTER FORMS, A TITLE OR HEADER WORKS

// NOTES FOR JOHN
// PRIVATE ROUTE => HOME (HOLDS RECIPES)
// JUST LEAVE YUP IN COMPONENTS (UNLESS I HAVE EXTRA TIME)
// I CAN MAYBE ADD THE YUP OBJECTS INTO STORE IF I AM ADVENTUROUS
// REMEMBER IF CONNECT MEANS YOU MUST PASS PROPS
