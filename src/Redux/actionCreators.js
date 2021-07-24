export const UPDATE_LOGIN_FORM = 'UPDATE_LOGIN_FORM';
export const UPDATE_RECIPE_FORM = 'UPDATE_RECIPE_FORM';
// THESE WILL NEED TO BE THUNKS
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

const updateLoginForm = (formEvent) => {
    // FROM EVENT WILL BE PULL RELEVANT INFO IN THE REDUCER
    // E.G. VALUE + NAME
    return {type: UPDATE_LOGIN_FORM, payload: formEvent}
}

const updateRecipeForm = (formEvent) => {
    // LIKE ABOVE DATA HANDLED IN REDUCER
    return {type: UPDATE_RECIPE_FORM, payload: formEvent}
}

// I SHOULD PROBABLY DEFINE ACTION CREATORS FOR THUNK TO CALL IN .THEN
// TO IMPROVE READABILITY

const registerUser = formData => dispatch => {
    return 'Foo (will be axios call later)'
}

const loginUser = formData => dispatch => {
    return 'Bar (thunks will dispatch action from inside then)'
}