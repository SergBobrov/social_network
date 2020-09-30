import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, profilePageType} from "../../redux/Store";


type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: ActionsType) => void

}


export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}
            />
        </div>
    )
};

