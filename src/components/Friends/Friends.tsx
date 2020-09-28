import React from "react";
import classes from './Friends.module.css'
import OneFriend from "./OneFriend/OneFriend";



type FriendsType = {
    friendData: Array<{
        id: number
        name: string
        }>
}

export function Friends(props: FriendsType) {
    return (
        <div className={classes.item}>
            {
                props.friendData.map((t) => {
                    return (
                        <OneFriend friendData={t}/>
                    )
                })
            }
        </div>
    )
}


