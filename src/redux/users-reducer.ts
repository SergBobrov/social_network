import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOOGLE_IS_FEPCHING'
const TOGGLE_IS_FOLLOWING = 'TOOGLE_IS_FOLLOWING'

export const urlAddress = 'https://lh3.googleusercontent.com/proxy/liOZrZH9r1mF-04Um35auGflcj1phyADkSxfCPGIVZ0mxBeV8Bzx-ByGKnrKvKEUfSH5dYGp7MZGOfZjcXObnCeBMnc11RyYW3SdNiMh3mvVyHzs6BwHMNOrJ4QgkZxSImYPR5lGkYIta26IhCGbklo'

export type UsersStateType = {
    users: Array<UsersType>,
    pageSize: number,
    totalUsersCount: number,
    currantPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
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
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUserAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleIsFollowingAC>

let initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currantPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state: UsersStateType = initialState, action: UsersActionsType): UsersStateType => {

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

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFollowing ? [...state.followingInProgress, action.id]
                    : []
                // state.followingInProgress.filter((id) => id !== action.id)
            }

        default:
            return state
    }
}


export const followSuccess = (userId: number) => {
    return ({type: FOLLOW, userId} as const)
};

export const unfollowSuccess = (userId: number) => {
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
    return ({type: TOGGLE_IS_FETCHING, isFetching} as const)
}

export const toggleIsFollowingAC = (isFollowing: boolean, id: number) => {
    return ({
        type: TOGGLE_IS_FOLLOWING,
        isFollowing: isFollowing,
        id: id
    } as const)
}

export const getUsers = (currantPage: number, pageSize: number) => {
    return (dispatch: (action: UsersActionsType) => void) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currantPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUserAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))
        })
    }
}

export const follow = (id: number) => {
    return ( dispatch: (action: UsersActionsType) => void) => {
        dispatch(toggleIsFollowingAC(true, id))
        usersAPI.deleteUnfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
                dispatch(toggleIsFollowingAC(false, id))
            }
    })
}}

export const unfollow = (id: number) => {
    return ( dispatch: (action: UsersActionsType) => void) => {
        dispatch(toggleIsFollowingAC(true, id))
        usersAPI.deleteUnfollowUser(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
                dispatch(toggleIsFollowingAC(false, id))
            }
        })
    }}





export default usersReducer;