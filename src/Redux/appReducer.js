import { UPDATE_LOGIN_FORM, UPDATE_RECIPE_FORM, REGISTER_USER, LOGIN_USER } from "./actionCreators";

const initialState = {
    test: 'test'
}

const appReducer = (state = initialState, action) => {

    switch(action.type) {

        case UPDATE_LOGIN_FORM:
            return state;

        case UPDATE_RECIPE_FORM:
            return state;

        case REGISTER_USER:
            return state;

        case LOGIN_USER:
            return state;

        default:
            return state;

    }

}

export default appReducer;