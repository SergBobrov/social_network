import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css'
import {SendMessageActionCreator, UpdateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


type DialogsType = {
    store: any
}

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();


                    let onSendMessageClick = () => {
                        store.dispatch(SendMessageActionCreator());
                    };

                    let onNewMessageChange = (body: string) => {
                        store.dispatch(UpdateNewMessageBodyActionCreator(body))
                    };
                    return (
                        <div className={classes.dialogs}>
                            <Dialogs dialogsPage={state.dialogsPage} updateNewMessageBody={onNewMessageChange}
                                     SendMessage={onSendMessageClick}/>
                        </div>
                    )
                }

            }
        </StoreContext.Consumer>
    )
};



