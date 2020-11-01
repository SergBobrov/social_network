import {combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, UpdateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {SendMessageActionCreator, UpdateNewMessageBodyActionCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof UpdateNewPostTextActionCreator>
    | ReturnType<typeof UpdateNewMessageBodyActionCreator> | ReturnType<typeof SendMessageActionCreator>

export type AppStateType = ReturnType<typeof reducers>


let store = createStore(reducers);

store.getState()


// @ts-ignore
window.store = store;

export default store;