import React from "react";
import Form from "./Form";
import { Route, Switch } from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <div className="App">
    <h1 className='page-header'>Family Recipes Registration Form</h1>
    <img
        className='image'
        src='https://images.unsplash.com/photo-1589152144820-692b189e0b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=80'
        alt=''
        />
    <Switch>
      <Route path='/'>
        <Form />
      </Route>              
    </Switch>
     
    </div>
  );
}
