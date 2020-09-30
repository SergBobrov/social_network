import {ActionsType, DialogsPageType, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./State";

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.newMessageBody
    } else if (action.type === SEND_MESSAGE) {
        let newMessage = {id: 6, text: state.newMessageBody}
        state.messages.push(newMessage);
        state.newMessageBody = ""
    }
    return state
}