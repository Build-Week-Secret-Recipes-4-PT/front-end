import { UPDATE_LOGIN_AND_REGISTER_FORM, CLEAR_LOGIN_AND_REGISTER_FORM, CLEAR_ERRORS_LOGIN_AND_REGISTER, UPDATE_RECIPE_FORM, REGISTER_USER, LOGIN_USER, test } from "./actionCreators";

const initialState = {
    test: 'test',
    loginAndRegister: {
        email: "",
        password: ""
    },
    errorsLoginAndRegister: {
        email: "",
        password: ""
    },
    recipeForm: {
        id: "",
        title: "",
        source: "", 
        ingredients: "", 
        instructions: "",
        category: ""
    },
    errorsRecipeForm: {
        title: "",
        source: "",
        category: ""
    },
    allRecipes: []
    serverError = ''
}

const appReducer = (state = initialState, action) => {

    switch(action.type) {

        case UPDATE_LOGIN_AND_REGISTER_FORM:
            return state;

        case CLEAR_LOGIN_AND_REGISTER_FORM:
            return state;
        
        case CLEAR_ERRORS_LOGIN_AND_REGISTER:
            // return {...state, state.loginAndRegister[action.payload.target.name]: action.payload.target.value};
            return {...state};

        case UPDATE_RECIPE_FORM:
            return state;

        case REGISTER_USER:
            return state;

        case LOGIN_USER:
            return state;
        
        case test:
            console.log(state);
            return state;

        default:
            return state;

    }

}

export default appReducer;