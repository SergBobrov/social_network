const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_ISFETCHING = 'TOOGLE_ISFEPCHING'

export const urlAddress = 'https://lh3.googleusercontent.com/proxy/liOZrZH9r1mF-04Um35auGflcj1phyADkSxfCPGIVZ0mxBeV8Bzx-ByGKnrKvKEUfSH5dYGp7MZGOfZjcXObnCeBMnc11RyYW3SdNiMh3mvVyHzs6BwHMNOrJ4QgkZxSImYPR5lGkYIta26IhCGbklo'

export type UsersStateType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currantPage: number,
    isFetching: boolean,
}


export type UsersType = {
    "name": string
    "id": number
    "uniqueUrlName": any
    "photos": {
        "small": any
        "large": any
    }
    "status": any
    "followed": boolean
}

export type UsersActionsType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currantPage: 1,
    isFetching: true,
}

const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType) => {

    switch (action.type) {
        case FOLLOW:
            return {

                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USER:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currantPage: action.currantPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        case TOOGLE_ISFETCHING:
            return {...state, isFetching: action.isFetching}

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

export const setCurrentPageAC = (currantPage: number) => {
    return ({type: SET_CURRENT_PAGE, currantPage} as const)
}

export const setTotalCountAC = (totalCount: number) => {
    return ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return ({type: TOOGLE_ISFETCHING, isFetching} as const)
}


export default usersReducer;