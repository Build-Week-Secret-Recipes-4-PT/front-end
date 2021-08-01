import axios from 'axios';
import axiosWithAuth from '../Components/axiosWithAuth';

export const UPDATE_LOGIN_AND_REGISTER_FORM = 'UPDATE_LOGIN_AND_REGISTER_FORM';
export const CLEAR_LOGIN_AND_REGISTER_FORM = 'CLEAR_LOGIN_AND_REGISTER_FORM';
export const UPDATE_RECIPE_FORM = 'UPDATE_RECIPE_FORM';
export const SET_ERRORS_LOGIN_AND_REGISTER = 'SET_ERRORS_LOGIN_AND_REGISTER';
export const CLEAR_ERRORS_LOGIN_AND_REGISTER = 'CLEAR_ERRORS_LOGIN_AND_REGISTER';
// THESE WILL NEED TO BE THUNKS
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const TEST = 'TEST'

export const updateLoginAndRegisterForm = (formEvent) => {
    // FROM EVENT WILL BE PULL RELEVANT INFO IN THE REDUCER
    // E.G. VALUE + NAME
    return {type: UPDATE_LOGIN_AND_REGISTER_FORM, payload: formEvent}
}

export const clearLoginAndRegisterForm = () => {
    return {type: CLEAR_LOGIN_AND_REGISTER_FORM}
}

export const setErrorsLoginAndRegister = (event, error) => {
    return {type: SET_ERRORS_LOGIN_AND_REGISTER, payload: [event, error]}
}

export const clearErrorsLoginAndRegister = () => {
    return {type: CLEAR_ERRORS_LOGIN_AND_REGISTER}
}

export const updateRecipeForm = (formEvent) => {
    // LIKE ABOVE DATA HANDLED IN REDUCER
    return {type: UPDATE_RECIPE_FORM, payload: formEvent}
}

// I SHOULD PROBABLY DEFINE ACTION CREATORS FOR THUNK TO CALL IN .THEN
// TO IMPROVE READABILITY

export const registerUser = formData => dispatch => {
    console.log(formData)
    return axiosWithAuth().post('https://recipesbuild.herokuapp.com/api/auth/register', formData)
        .then(res => {
            // window.localStorage.setItem('token')
            console.log(res);
        })
}

export const loginUser = formData => dispatch => {
    return 'Bar (thunks will dispatch action from inside then)'
}

export const testyup = () => {
    console.log('inside action creator')
    return {type: TEST}
}