import logo from "../../../images/main-img.png";
import React from "react";
import classes from './ProfileInfo.module.css'
import {profileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../../assets/preloader/Preloader";


type ProfileInfoType = {
    profile: profileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader isFetching={true}/>
    }

    return (
        <div>
            <img
                src={props.profile.photos.large ? props.profile.photos.large : logo}
                alt=""/>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}