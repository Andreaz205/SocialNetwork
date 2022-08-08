import $api from "./api";

export const friendsApi = {
    getUsersByQuery: (pageSize, currentPage) => {
        // console.log("from friends api" + pageSize, currentPage)
        return $api.get(`/users?pageSize=${pageSize}&currentPage=${currentPage}`)
            .then(res => {
                    // console.log(res.data)
                    return res.data
                }
            )
    }
}