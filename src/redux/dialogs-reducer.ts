import {ActionsType, DialogsPageType} from "./Store";

export const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
export const SEND_MESSAGE = "SEND_MESSAGE"


let initialState = {
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
}

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

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMessageBody
            }
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 6, text: state.newMessageBody}],
                newMessageBody: ""
            }
    }
    return state


}

export default dialogsReducer;