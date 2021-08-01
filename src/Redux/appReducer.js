import { UPDATE_LOGIN_AND_REGISTER_FORM, CLEAR_LOGIN_AND_REGISTER_FORM, CLEAR_ERRORS_LOGIN_AND_REGISTER, UPDATE_RECIPE_FORM, REGISTER_USER, LOGIN_USER, TEST } from "./actionCreators";

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
    allRecipes: [],
    serverError: ''
}

const appReducer = (state = initialState, action) => {

    console.log('inside reducer')

    switch(action.type) {

        case UPDATE_LOGIN_AND_REGISTER_FORM:
            return {...state,
            loginAndRegister: {
                ...state.loginAndRegister,
                [action.payload.target.name]: action.payload.target.value
            }
        };

        case CLEAR_LOGIN_AND_REGISTER_FORM:
            return state;
        
        case CLEAR_ERRORS_LOGIN_AND_REGISTER:
            // PAYLOAD[0] = EVENT, PAYLOAD[1] = ERROR
            console.log(action.payload)
            return {...state,
            errorsLoginAndRegister: {
                ...state.errorsLoginAndRegister,
                [action.payload[0].target.name]: action.payload[2]
            }}

        case UPDATE_RECIPE_FORM:
            return state;

        case REGISTER_USER:
            console.log(action.payload)
            return state;

        case LOGIN_USER:
            return state;
        
        case TEST:
            console.log('inside test case');
            return state;

        default:
            return state;

    }

}

export default appReducer;