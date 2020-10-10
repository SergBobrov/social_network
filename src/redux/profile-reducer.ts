import {ActionsType, postsDataType, profilePageType} from "./Store";

export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export const ADD_POST = "ADD-POST"

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
            let newPost: postsDataType = {id: 3, text: state.newPostText, likeCount: 0}
            let stateCopy = {
                ...state,
                postsData: [...state.postsData],
                newPostText: ""
            }
            stateCopy.postsData.push(newPost);
            return stateCopy

        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText}
    }

    return state
}

export default profileReducer;