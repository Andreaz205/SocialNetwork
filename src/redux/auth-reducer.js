import {authApi} from "../api/auth-api";


let initialState = {
    login: null,
    userId: null,
    isActivated: false,
    isAuth: false,
    isFetching: false,
    location: ''
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
                email: action.email,
                id: action.id,
                isActivated: action.isActivated,
                userId: action.userId,
                isAuth: action.isAuth
            }
        case "FETCH_AUTH":
            return{
                ...state,
                isAuth: action.payload
            }
        case "FETCHING":
            return{
                ...state,
                isFetching: action.payload
            }
        default:
            return state;
    }
}

export const authActions = {
    setAuthUserData: ( email, id, isActivated, userId, isAuth) => ({
        type: "SET_USER_DATA",
        payload: {email, id, isAuth, userId, isActivated}
    }),
    initializedSuccess: () => ({
        type: "INITIALIZED_SUCCESS",
        payload: true
    }),
    fetchIsAuthFalse: () => ({
        type: "FETCH_AUTH",
        payload: false
    }),
    fetchIsAuthTrue: () => ({
        type: "FETCH_AUTH",
        payload: true
    }),
    fetchingTrue: () => ({
        type: "FETCHING",
        payload: true
    }),
    fetchingFalse: () => ({
        type: "FETCHING",
        payload: false
    })
}

export const getAuthUserData = () => async (dispatch) => {
    let meData = await authApi.me()
    if (meData) {
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

        dispatch(authActions.fetchingTrue())
        let response = await authApi.logout()
        dispatch(authActions.fetchIsAuthFalse())
        console.log(response.data)
        localStorage.removeItem('token')
        dispatch(authActions.setAuthUserData(null, null, null, false))
        dispatch(authActions.fetchingFalse())

    } catch (e){
        console.log(e.message)
        dispatch(authActions.fetchingFalse())

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