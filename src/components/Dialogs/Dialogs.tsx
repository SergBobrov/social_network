import React from "react";
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type DialogsType = {
    personsData: Array<{
        id: number
        name: string
    }>,
    messagesData: Array<{
        id: number
        text: string
    }>
}

export const Dialogs = (props: DialogsType) => {

    let sendedMessage = React.createRef<HTMLTextAreaElement>();

    let sendMessage = () => {
        alert(sendedMessage.current?.value);
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {props.personsData.map((t) => {
                    return (
                        <DialogItem name={t.name} id={t.id} key={t.id}/>
                    )
                })}
                <hr/>
                <textarea ref={sendedMessage}></textarea> <hr/>

                <button onClick={sendMessage}> Send </button>

            </div>



            <div className={classes.messages}>
                {props.messagesData.map((t) => {
                        return (
                            <Message text={t.text} key={t.id}/>)
                    }
                )}

            </div>

        </div>
    )
};



