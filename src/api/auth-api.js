import $api from "./api";

export const authApi = {
    login:(email, password) => {
        return $api.post('/login',{email,password})
            .then(res => {
            console.log(res.data)
            return res})
    },

    logout  :() => {
        return $api.post('/logout')
            .then(res => {
                console.log(res.data)
                return res})
    },

    registration: (email, password) => {
        return $api.post('/registration',{email,password})
            .then(res => {
                console.log(res.data)
                return res})
    }
}