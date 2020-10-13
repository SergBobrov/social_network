import {ActionsType} from "./redux-store";

export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export const ADD_POST = "ADD-POST"

type postsDataType = {
    id: number
    text: string
    likeCount: number
}

export type profilePageType = {
    postsData: Array<postsDataType>
    newPostText: string
}

let initialState = {
    postsData: [
        {id: 1, text: "Hi, how a u?", likeCount: 15},
        {id: 2, text: "Its my first post", likeCount: 10}
    ],
    newPostText: ""
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


const profileReducer = (state: profilePageType = initialState, action: ActionsType) => {


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
    }

    return state
}

export default profileReducer;