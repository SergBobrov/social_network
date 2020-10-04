import React from "react";
import classes from './Friends.module.css'
import {Friends} from "./Friends";
import StoreContext from "../../StoreContext";


type FriendsType = {
    friendData: Array<{
        id: number
        name: string
    }>
}

export function FriendsContainer() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return (
                        <Friends friendData={store.getState().sideBar.friends} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}


