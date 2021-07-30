import React from 'react'

const RecipeCard = props => {
    const {recipe} = props
    return(
    <div className='recipe-cards'>
        <p>Title: {recipe.title} </p>
        <p>Source: {recipe.source}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instructions: {recipe.instructions}</p>
        <p>Category: {recipe.category}</p>
      </div>
    )
}


