import React from "react";
import {SendMessageActionCreator, UpdateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        SendMessage: () => {
            dispatch(SendMessageActionCreator());
        },
        updateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageBodyActionCreator(body))
        }
    };
};


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


