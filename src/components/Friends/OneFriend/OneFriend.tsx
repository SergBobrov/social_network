import React from "react";

type FriendsType = {
    friendData: {
        id: number
        name: string
        img: object
    }
}

function OneFriend(props: FriendsType) {
    return (
        <div>
            <img  alt="Аватар"/>
            <span>{props.friendData.name}</span>
        </div>
    )
}

export default OneFriend;