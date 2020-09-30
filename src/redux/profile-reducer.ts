import {ActionsType, postsDataType, profilePageType} from "./State";

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const ADD_POST = "ADD-POST"


export function profileReducer(state: profilePageType, action: ActionsType) {


    if (action.type === ADD_POST) {
        let newPost: postsDataType = {id: 3, text: state.newPostText, likeCount: 0}
        state.postsData.push(newPost);
        state.newPostText = "";
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newPostText;
    }

    return state
}