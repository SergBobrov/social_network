import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {SendMessageActionCreator, StoreType, UpdateNewMessageBodyActionCreator} from "../../redux/State";


type DialogsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsType) => {

    let state = props.store.getState();

    let dialogElements = state.dialogsPage.dialogs.map((t) => {
        return (<DialogItem name={t.name} id={t.id} key={t.id}/>)
    })
    let messageElements = state.dialogsPage.messages.map((t) => {
        return (<Message text={t.text} key={t.id}/>)
    })
    let onSendMessageClick = () => {
        props.store.dispatch(SendMessageActionCreator)
    };

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            let body = e.currentTarget.value;
            props.store.dispatch(UpdateNewMessageBodyActionCreator(body))
        }


    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={state.dialogsPage.newMessageBody} onChange={onNewMessageChange}
                                   placeholder={"Enter your message"}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
};



