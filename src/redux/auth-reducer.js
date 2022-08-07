import {authApi} from "../api/auth-api";


let initialState = {
    login: null,
    id: null,
    isActivated: false,
    isAuth: false,
    isFetching: true
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
    setAuthUserData: ( email, id, isActivated, isAuth=true) => ({
        type: "SET_USER_DATA",
        payload: {email, id, isActivated, isAuth}
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

export const login =(fields) => async (dispatch) => {
    try{
        const {email, password} = fields
        let response = await authApi.login(email, password)
        console.log(response.data)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(authActions.setAuthUserData(response.data.user))

    } catch (e){
        console.log(e)
    }
}

export const logout =() => async (dispatch) => {
    try{
        let response = await authApi.logout()
        console.log(response)
        localStorage.removeItem('token')
        dispatch(authActions.setAuthUserData(null, null, null, false))

    } catch (e){
        console.log(e)
    }
}

export const registration =(fields) => async (dispatch) => {
    try{
        const {email, password} = fields
        let response = await authApi.registration(email, password)
        console.log(response)
        localStorage.setItem('token', response.data.accessToken)
        dispatch(authActions.setAuthUserData(response.data.user))

    } catch (e){
        console.log(e)
    }
}
// const {email, password} = fields
// let data = await authApi.login(email, password)
// console.log(data)
// dispatch(authActions.setAuthUserData('Andrei', 'fafa', null, false))
// export const logout = () =>async (dispatch) => {
//     let response = await authApi.logout()
//     if (response.data.resultCode ===0) {
//         dispatch(authActions.setAuthUserData(null, null, null, false))
//     }
// }

export default authReducer;