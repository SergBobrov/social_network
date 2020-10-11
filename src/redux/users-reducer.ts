const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'

export const urlAddress = 'https://lh3.googleusercontent.com/proxy/liOZrZH9r1mF-04Um35auGflcj1phyADkSxfCPGIVZ0mxBeV8Bzx-ByGKnrKvKEUfSH5dYGp7MZGOfZjcXObnCeBMnc11RyYW3SdNiMh3mvVyHzs6BwHMNOrJ4QgkZxSImYPR5lGkYIta26IhCGbklo'

type UsersStateType = {
    users: Array<UsersType>
}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

export type UsersActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUserAC>

let initialState: UsersStateType = {
    users: []
}

const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType) => {

    switch (action.type) {
        case FOLLOW:
            return {

                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case SET_USER:
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}


export const followAC = (userId: number) => {
    return ({type: FOLLOW, userId} as const)
};

export const unfollowAC = (userId: number) => {
    return ({type: UNFOLLOW, userId} as const)
};

export const setUserAC = (users: Array<UsersType>) => {
    return ({type: SET_USER, users} as const)
}

export default usersReducer;