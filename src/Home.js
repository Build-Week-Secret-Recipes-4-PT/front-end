import React from "react";
import RecipeForm from "./RecipeForm";
import {Switch, Route, Link} from "react-router-dom"
import './App.css';
import {connect} from 'react-redux';


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

  