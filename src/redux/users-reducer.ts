import {usersAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

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
    | ReturnType<typeof setUser>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowing>

let initialState: UsersStateType = {
    users: [] as Array<UsersType>,
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

export const setUser = (users: Array<UsersType>) => {
    return ({type: SET_USER, users} as const)
}

export const setCurrentPage = (currantPage: number) => {
    return ({type: SET_CURRENT_PAGE, currantPage} as const)
}

export const setTotalCount = (totalCount: number) => {
    return ({type: SET_TOTAL_USERS_COUNT, totalCount} as const)
}

export const toggleIsFetching = (isFetching: boolean) => {
    return ({type: TOGGLE_IS_FETCHING, isFetching} as const)
}

export const toggleIsFollowing = (isFollowing: boolean, id: number) => {
    return ({
        type: TOGGLE_IS_FOLLOWING,
        isFollowing: isFollowing,
        id: id
    } as const)
}

type DispatchType = ThunkDispatch<AppStateType, unknown, UsersActionsType>

type ThunkType = ThunkAction<void, AppStateType, unknown, UsersActionsType>

export const usersThunks = {
    getUsers: (currantPage: number, pageSize: number): ThunkType => {
        return (dispatch: DispatchType) => {
            dispatch(toggleIsFetching(true))
            usersAPI.getUsers(currantPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUser(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
        }
    },
    getCurrentPage: (pageNumber: number, pageSize: number): ThunkType => {
        return (dispatch: DispatchType) => {
            dispatch(toggleIsFetching(true))
            dispatch(setCurrentPage(pageNumber))
            usersAPI.getUsers(pageNumber, pageSize).then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUser(data.items))
            })
        }

    },

    follow: (id: number): ThunkType => {
        return (dispatch: DispatchType) => {
            dispatch(toggleIsFollowing(true, id))
            usersAPI.postFollowUser(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id))
                    dispatch(toggleIsFollowing(false, id))
                }
            })
        }
    },

    unfollow: (id: number): ThunkType => {
        return (dispatch: DispatchType) => {
            dispatch(toggleIsFollowing(true, id))
            usersAPI.deleteUnfollowUser(id).then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(id))
                    dispatch(toggleIsFollowing(false, id))
                }
            })
        }
    },


}


export default usersReducer;