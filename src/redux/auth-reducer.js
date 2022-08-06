import {authApi} from "../api/auth-api";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    // captchaUrl:null
}

const authReducer=(state = initialState, action) => {
    switch(action.type) {
        case "INITIALIZED_SUCCESS":
            return{
                ...state,
                ...action.payload
            }
        case "SET_USER_DATA":
            return{
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const authActions = {
    setAuthUserData: (userId, email, login, isAuth) => ({
        type: "SET_USER_DATA",
        payload: {userId, email, login, isAuth}
    }),
    initializedSuccess: () => ({
        type: "INITIALIZED_SUCCESS",
        payload: true
    })
}

export const getAuthUserData = () => async (dispatch) => {
    let meData = await authApi.me()
    if (meData.resultCode === 0) {
        let {id, email, login} = meData.data
        dispatch(authActions.setAuthUserData(id, email, login, true))
    }
}

export const login = ( email, password, rememberMe, captcha ) => async (dispatch) => {
    let data = await authApi.login(email, password, rememberMe, captcha)
    if (data.resultCode ===0) {
        dispatch(getAuthUserData())
    } else {
    let messege = data.messeges.length > 0 ? data.messeges[0] : "Some error";
    // dispatch(stopSubmit("login",{
    //     _error: messege
    // }))
    }

}

export const logout = () =>async (dispatch) => {
    let response = await authApi.logout()
    if (response.data.resultCode ===0) {
        dispatch(authActions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer;