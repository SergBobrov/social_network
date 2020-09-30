export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export const ADD_POST = "ADD-POST"

export const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
export const SEND_MESSAGE = "SEND_MESSAGE"


export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    text: string
}

export type postsDataType = {
    id: number
    text: string
    likeCount: number
}

export type profilePageType = {
    postsData: Array<postsDataType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}

export type sideBarType = {
    friends: Array<{
        id: number
        name: string
    }>
}


export type StateType = {
    profilePage: profilePageType
    dialogsPage: DialogsPageType
    sideBar: sideBarType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType

    subscribe: (observer: (store: StoreType) => void) => void
    _callSubscriber: (store: StoreType) => void
    dispatch: (action: ActionsType) => void

};

export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof UpdateNewPostTextActionCreator>
    | ReturnType<typeof UpdateNewMessageBodyActionCreator> | ReturnType<typeof SendMessageActionCreator>


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

export const SendMessageActionCreator = () => {
    return (
        {type: SEND_MESSAGE} as const
    )
};

export const UpdateNewMessageBodyActionCreator = (text: string) => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_BODY,
            newMessageBody: text
        } as const

    )
};


export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, text: "Hi, how a u?", likeCount: 15},
                {id: 2, text: "Its my first post", likeCount: 10}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Valera"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Vlad"},
                {id: 6, name: "Nansy"}
            ],
            messages: [
                {id: 1, text: "Hi"},
                {id: 2, text: "Sveta"},
                {id: 3, text: "Hey"},
                {id: 4, text: "Wats"},
                {id: 5, text: "Hello"},
                {id: 6, text: "Youu"}
            ],
            newMessageBody: ""
        },
        sideBar: {
            friends: [
                {id: 1, name: "Fernanda"},
                {id: 2, name: "Oskar"},
                {id: 3, name: "John"}
            ]
        }
    },
    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
    },

    dispatch(action: ActionsType) {
        if (action.type === ADD_POST) {
            console.log("addPost");
            let newPost: postsDataType = {id: 3, text: this._state.profilePage.newPostText, likeCount: 0}
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            store._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newMessageBody
            this._callSubscriber(this)
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {id: 6, text: this._state.dialogsPage.newMessageBody}
            this._state.dialogsPage.messages.push(newMessage);
            console.log(this._state.dialogsPage.messages);
            this._state.dialogsPage.newMessageBody = ""
            this._callSubscriber(this)
        }

    }
}
