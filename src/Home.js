import React from "react";
import RecipeForm from "./RecipeForm";
import {Switch, Route} from "react-router-dom"
import './App.css';

export default function Home() {
    return (
      <div className='home-page'>
        <img
        className='home-page-image' 
        src=
        'https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=6&m=1218254547&s=170667a&w=0&h=EXwwoHJ3wI0H2jDfoFhqOiIo2c4cL0y7R8Gop3iIO30='
        alt='Veggies and Protiens'
        />
      <h1></h1>
      <h2>Recipes</h2>
      <Switch>
        <Route path='/home'>
          <RecipeForm />
        </Route>
      </Switch>
      </div>
    );
  }