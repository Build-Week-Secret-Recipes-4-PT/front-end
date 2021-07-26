import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import {connect} from 'react-redux';

const initialFormValues = {
        title: "",
        source: "", 
        ingredients: "", 
        instructions: "",
        category: "",
    
};

const initialFormErrors = {
        title: "",
        source: "",
        category: "",
};

function RecipeForm() {

    const [recipeForm, setRecipeForm] = useState(initialFormValues);
        
    const [recipeErrors, setRecipeErrors] = useState(initialFormErrors);

    const [saveRecipe, setSaveRecipe] = useState([]);

    const [disabled, setDisabled] = useState(false);

const Yup = yup.object().shape({
    title: yup.string().required("A title is required"),
    source: yup.string().required("A source is required"),
    category: yup.string().required("A category is required")
});

const validation = (element) => {
    yup.reach(Yup, element.target.title)
    .validate(element.target.value)
    .then((valid) => {
setRecipeErrors({...recipeErrors, [element.target.title]: ""});
    })
    .catch((err) => {
        console.log("an error has occured...", err);
        setRecipeErrors({...recipeErrors, [element.target.title]: err.errors[0]});
    });
};

useEffect(() => {
    Yup.isValid(recipeForm).then((valid) => {
        console.log("valid?", valid);
        setDisabled(!valid);
    });
}, [recipeForm, Yup]);

const onSave = (element) => {
    element.preventDefault();
    
    

};

const input = (element) => {
    element.persist();
    const newRecipe = {
        ...recipeForm,
        [element.target.title]:
        element.target.type === "title" ? element.target.title : element.target.value
    };
    validation(element);
    setRecipeForm(newRecipe);
};

return (
    <form className='recipe-form' onSave={}>
        <div className='form-group save'>
            <h2>Add a Recipe</h2>
            <button disabled={disabled}>Save Recipe</button>

            <div className='errors'>
                <div>{recipeErrors.title}</div>
                <div>{recipeErrors.source}</div>
                <div>{recipeErrors.category}</div>
            </div>
        </div>

        <div className='form-group inputs'>
            <h4>Recipe Details</h4>

            <label>Title
                <input
                id="title"
                value={recipeForm.title}
                name="title"
                type="text"
                onChange={input}/>
            </label>
            <label>Source
                <input
                id="source"
                value={recipeForm.source}
                name="source"
                type="text"
                onChange={input}/>
            </label>
            <label>Ingredients
                <input
                id="ingredients"
                value={recipeForm.ingredients}
                name="ingredients"
                type="text"
                onChange={input}/>
            </label>
            <label>Instructions
                <input
                id="instructions"
                value={recipeForm.instructions}
                name="instructions"
                type="text"
                onChange={input}/>
            </label>
            <label>Category
                <input
                id="category"
                value={recipeForm.category}
                name="category"
                type="text"
                onChange={input}/>
            </label>
        </div>
    </form>
)
}

export default connect(null, {})(RecipeForm);