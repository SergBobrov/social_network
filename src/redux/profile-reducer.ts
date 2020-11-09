import {profileAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {UsersActionsType} from "./users-reducer";

export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export const ADD_POST = "ADD-POST"
export const SET_USER_PROFILE = "SET_USER_PROFILE"

type postsDataType = {
    id: number
    text: string
    likeCount: number
}

export type profilePageType = {
    postsData: Array<postsDataType>
    newPostText: string
    profile: profileType | null
}

export type profileType = {
    "aboutMe": string
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    }
    "lookingForAJob": boolean
    "lookingForAJobDescription": null | string
    "fullName": string
    "userId": number
    "photos": {
        "small": null | string
        "large": null | string
    }
}


let initialState: profilePageType = {
    postsData: [
        {id: 1, text: "Hi, how a u?", likeCount: 15},
        {id: 2, text: "Its my first post", likeCount: 10}
    ],
    newPostText: "",

    profile: null as profileType | null
}


export const UpdateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: text
    } as const
}
export const addPostActionCreator = () => {
    return (
        {type: ADD_POST} as const
    )
};

export const setUserProfile = (profile: profileType) => {
    return (
        {type: SET_USER_PROFILE, profile} as const
    )
};

type ProfileActionsType = ReturnType<typeof UpdateNewPostTextActionCreator> |
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof setUserProfile>

export const profileReducer = (state: profilePageType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData:
                    [...state.postsData, {id: 3, text: state.newPostText, likeCount: 0}],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state
    }
}


type DispatchType = ThunkDispatch<AppStateType, unknown, ProfileActionsType>

type ThunkType = ThunkAction<void, AppStateType, unknown, ProfileActionsType>

export const profileThunks = {
    getProfile: (userID: string): ThunkType => {
        return (dispatch: DispatchType) => {
            !userID && (userID = "2")
            profileAPI.getProfile(userID).then(response => {
                dispatch(setUserProfile(response.data))
            })
        }
    }
}


