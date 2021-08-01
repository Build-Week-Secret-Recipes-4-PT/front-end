import React from "react";
import RecipeForm from "./RecipeForm";
import {Switch, Route, Link} from "react-router-dom"
import './App.css';
import {connect} from 'react-redux';
import {RecipeCard} from './RecipeCard'


function Home() {

  const Recipes = (props) => {
    const {recipes} = props

    return (
        <div className='recipes-container'>
            {
                recipes.map(recipe => (<RecipeCard recipe={recipe} />))
            }
        </div>
    )
  }

    return (
      <div className='home-page'>
        <Switch>
        <Route path='/home'>
          <div className='nav'>            
          <nav>
            <ul>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </nav>
          </div>
      <h1>{details.name}</h1>
      <h2>Recipes</h2>
      <RecipeForm />
      <Recipes recipes={recipes} />
        </Route>
      </Switch>
      </div>
    );
  }

export default connect(null, {})(Home);

  