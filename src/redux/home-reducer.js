
let initialState = {
    framework: "react",
    occupation: "developer"
}

const homeReducer =(state=initialState, action)=>{
    switch(action.type) {
        case "CHANGE_FRAMEWORK":
            return {
                ...state,
                framework: action.payload
            }
        case "CHANGE_OCCUPATION":
            return {
                ...state,
                occupation: action.payload
            }
        default:
            return state;
    }
}

export const homeActions = {
    setFramework: (framework) => ({
        type: "CHANGE_FRAMEWORK",
        payload: framework
    }),
    setOccupation: (occupation) => ({
        type: "CHANGE_OCCUPATION",
        payload: occupation
    })
}

export default homeReducer;