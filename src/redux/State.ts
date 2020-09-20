import ava1 from '../images/avas/ava1.png'
import ava2 from '../images/avas/ava2.png'
import ava3 from '../images/avas/ava3.png'

let rerenderEntireTree: (state: StateType) => void


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

export type StateType = {
    profilePage: {
        postsData: Array<postsDataType>,
        newPostText: string;
    }
    dialogsPage: {
        personsData: Array<personsDataType>
        messagesData: Array<messagesDataType>
    }
    sideBar: {
        friends: Array<{
            id: number
            name: string
            img: object
        }>
    }
}

let state: StateType = {
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
            {id: 1, name: "Fernanda", img: {ava1}},
            {id: 2, name: "Oskar", img: {ava2}},
            {id: 3, name: "John", img: {ava3}}
        ]
    }
}

export const addPost = () => {
    console.log("addPost");
    let newPost: postsDataType = {id: 3, text: state.profilePage.newPostText, likeCount: 0}
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state)
};
export const updateNewPostText = (newPostText: string) => {
    console.log("updateNewPostText")
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state)

};

export const subscribe = (observer: (state: StateType) => void) => {
    console.log("функция subscribe в state")
    rerenderEntireTree = observer;

}


export default state;