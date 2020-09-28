type personsDataType = {
    id: number
    name: string
}
type messagesDataType = {
    id: number
    text: string
}
type postsDataType = {
    id: number
    text: string
    likeCount: number
}

export type profilePageType = {
    postsData: Array<postsDataType>,
    newPostText: string;
}

export type StateType = {
    profilePage: profilePageType
    dialogsPage: {
        personsData: Array<personsDataType>
        messagesData: Array<messagesDataType>
    }
    sideBar: {
        friends: Array<{
            id: number
            name: string
        }>
    }
}

export type StoreType = {
    _state: StateType
    getState: () => StateType

    subscribe: (observer: (store: StoreType) => void) => void
    _callSubscriber: (store: StoreType) => void
    dispatch: (action: ActionsType) => void

};

export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof UpdateNewPostTextActionCreator>



export const UpdateNewPostTextActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPostText: text
    } as const
}

export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const
}


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
            personsData: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Sveta"},
                {id: 3, name: "Valera"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Vlad"},
                {id: 6, name: "Nansy"}
            ],
            messagesData: [
                {id: 1, text: "Hi"},
                {id: 2, text: "Sveta"},
                {id: 3, text: "Hey"},
                {id: 4, text: "Wats"},
                {id: 5, text: "Hello"},
                {id: 6, text: "Youu"}
            ]
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
        if (action.type === "ADD-POST") {
            console.log("addPost");
            let newPost: postsDataType = {id: 3, text: this._state.profilePage.newPostText, likeCount: 0}
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            store._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this)

        }

    }
}
