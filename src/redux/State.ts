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


export type RootStateType = {
    personsData: Array<personsDataType>
    messagesData: Array<messagesDataType>
    postsData: Array<postsDataType>
}

let state: RootStateType = {
    personsData:  [
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
    ],
    postsData: [
        {id: 1, text: "Hi, how a u?", likeCount: 15},
        {id: 2, text: "Its my first post", likeCount: 10}
    ]
}





export default state;