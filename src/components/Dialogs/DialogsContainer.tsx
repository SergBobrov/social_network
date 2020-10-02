import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {SendMessageActionCreator, UpdateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


type DialogsType = {
    store: any
}

export const DialogsContainer = (props: DialogsType) => {

    let state = props.store.getState();


    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageActionCreator());
    };

    let onNewMessageChange = (body: string) => {
            props.store.dispatch(UpdateNewMessageBodyActionCreator(body))


    };

    return (
        <div className={classes.dialogs}>
            <Dialogs dialogsPage={state.dialogsPage} updateNewMessageBody={onNewMessageChange} SendMessage={onSendMessageClick}/>
        </div>
    )
};



