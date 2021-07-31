import React from "react";
import RecipeForm from "./RecipeForm";
import {Switch, Route, Link} from "react-router-dom"
import './App.css';
import {connect} from 'react-redux';

// THIS NEEDS TO DISPLAY ALL RECIPES
// A CARD-COMPONENT CALLED CALLED BY LOOPING OVER THE ARRAY OF RECIPES SHOULD WORK
// CARD COMPONENTS SHOULD BE ABLE TO CALL A FORM TO EDIT
// ROUTER SWITCH NEEDS TO BE REMOVED COMPLETELY
function Home() {
    return (
      <div className='home-page'>
        <Switch>
        <Route path='/home'>
          <div className='nav'>            
          <nav>
            <ul>
              <li>
                <Link to="/">Login/Register</Link>
              </li>
            </ul>
          </nav>
          </div>
      <h1>{details.name}</h1>
      <h2>Recipes</h2>
      <RecipeForm />
        </Route>
      </Switch>
      </div>
    );
  }

export default connect(null, {})(Home);

  