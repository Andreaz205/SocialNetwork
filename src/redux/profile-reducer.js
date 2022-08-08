
let initialState = {
    posts: [
        {
            id: 1, message: 'Hi, how are you?', likesCount: 12
        },
        {
            id: 2, message: 'It\'s my first post', likesCount: 13
        },
        {
            id: 3, message: 'blabla', likesCount: 15
        },
        {
            id: 4, message: 'pizdec', likesCount: 18
        },
    ],
    profile: {
        userId: "dgsg",
        lookingForAJob: "yes",
        lookingForAJobDescription: "frontend|backend/fullstack",
        fullName: "Andrei",
        contacts: "andrei-bazunov@mail.ru",
        photos: null,
        aboutMe: "TrainBrain",

    },
    status: 'hello',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload
            }


        default:
            return state
    }
}

export const profileActions = () => {

}

export const getUserProfile = (userId) => async (dispatch) => {
    // let data = await profileApi.getStatus(userId)
}

export const getStatus = () => async (dispatch) => {
    // let data = await profileApi.getStatus(userId)
}


export default profileReducer