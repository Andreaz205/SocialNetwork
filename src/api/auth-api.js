import {instance} from "./api";

export const authApi = {
    me() {
        return instance.get('auth/me').then(res => res.data);
    },
    login(email, password, rememberMe = false, captcha =false) {
        return instance.post('auth/login',{email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete('auth/login')
    }
}