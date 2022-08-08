import $api from "./api";

export const profileApi = {
    getStatus: (userId) => {
        return $api.get()
    }
}