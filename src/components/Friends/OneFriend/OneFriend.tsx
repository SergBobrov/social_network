import React from "react";

type FriendsType = {
    friendData: {
        id: number
        name: string
    }
}

function OneFriend(props: FriendsType) {
    return (
        <div>
            <img alt="Аватар"/>
            <span>{props.friendData.name}</span>
        </div>
    )
}

export default OneFriend;