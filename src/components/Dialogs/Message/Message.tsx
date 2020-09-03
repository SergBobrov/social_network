import classes from "../Dialogs.module.css";
import React from "react";

type MessageType = {
    text: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.text}</div>
    )

}