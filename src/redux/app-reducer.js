import {authActions} from "./auth-reducer";

let initialState = {
   initialized: false
}

const appReducer=(state = initialState, action) => {
    switch(action.type) {
        case "INITIALIZED_SUCCESS":
            return{
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const initializeApp = () => (dispatch) => {
   //здесь должно быть middleware
    dispatch(authActions.initializedSuccess)
}


export default appReducer;