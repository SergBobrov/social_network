import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";

export type DialogsType = {
    name: string
    id: string
}

export const Dialogs = (props: any) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Valera" id="3"/>
                <DialogItem name="Sasha" id="4"/>
                <DialogItem name="Vlad" id="5"/>
                <DialogItem name="Nansy" id="6"/>


            </div>
            <div className={classes.messages}>
                <Message text="Hi"/>
                <Message text="Hey"/>
                <Message text="Wats up"/>
            </div>

        </div>
    )
};

type MessageType = {
    text: string
}


const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )

}


