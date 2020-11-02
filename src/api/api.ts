import axios from 'axios'


const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '64e9bc29-de8f-41f7-952f-c3c54b8f9de2'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersAPI = {
    getUsers(currantPage: number, pageSize: number) {
        return (
            axiosInstance.get(`users?page=${currantPage}&count=${pageSize}`,
            )).then(response => response.data)
    },
    postFollowUser(id: number) {
        return (axiosInstance.post(`follow/${id}`, {}).then(resp=>resp.data)
        )
    },

    deleteUnfollowUser(id: number) {
        return (axiosInstance.delete(`follow/${id}`).then(resp=>resp.data)
        )
    },


}

export const profileAPI = {
    getProfile(userID: string) {
        return (
            axiosInstance.get(`profile/` + userID)
        )
    },
}

export const headerAPI = {
    getAuthData() {
        return (axiosInstance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)).then(resp => resp.data)
    }
}



