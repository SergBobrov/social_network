type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    text: string
}

type postsDataType = {
    id: number
    text: string
    likeCount: number
}

type profilePageType = {
    postsData: Array<postsDataType>
    newPostText: string
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageBody: string
}
type sideBarType = {
    friends: Array<{
        id: number
        name: string
    }>
}


type StateType = {
    profilePage: profilePageType
    dialogsPage: DialogsPageType
    sideBar: sideBarType
}


type StoreType = {
    _state: StateType
    getState: () => StateType

    subscribe: (observer: (store: StoreType) => void) => void
    _callSubscriber: (store: StoreType) => void
    // dispatch: (action: ActionsType) => void

};


const store_OLD: StoreType = {
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

    // dispatch(action: ActionsType) {
    //     // this._state.profilePage = profileReducer(this._state.profilePage, action)
    //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    //     this._state.sideBar = sidebarReducer(this._state.sideBar, action)
    //     this._callSubscriber(this)
    // }

}

export default 1