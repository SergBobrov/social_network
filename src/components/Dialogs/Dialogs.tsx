import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";




type DialogsPropsType = {
    updateNewMessageBody: (e: string) => void
    SendMessage: () => void
    dialogsPage: DialogsPageType
}


export const Dialogs = (props: DialogsPropsType) => {



    let dialogElements = props.dialogsPage.dialogs.map((t) => {
        return (<DialogItem name={t.name} id={t.id} key={t.id}/>)
    })
    let messageElements = props.dialogsPage.messages.map((t) => {
        return (<Message text={t.text} key={t.id}/>)
    })
    let onSendMessageClick = () => {
        props.SendMessage()
    };

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            let body = e.currentTarget.value;
            props.updateNewMessageBody(body)
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
                    <div><textarea value={props.dialogsPage.newMessageBody} onChange={onNewMessageChange}
                                   placeholder={"Enter your message"}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
};



