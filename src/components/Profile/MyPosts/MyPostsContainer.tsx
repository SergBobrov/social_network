import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../../redux/redux-store";


const MapStateToProps = (state: AppStateType) => {
    return {
        profilePage: state.profilePage
    }
};

const DispatchStateToProps = (dispatch: (actions: ActionsType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
    }
};


export const MyPostsContainer = connect(MapStateToProps, DispatchStateToProps)(MyPosts)