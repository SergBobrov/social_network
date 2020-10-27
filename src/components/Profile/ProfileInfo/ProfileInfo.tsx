import React from "react";
import classes from './ProfileInfo.module.css'
import {profileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../../assets/preloader/Preloader";
import defaultImage from './../../../assets/images/default.png'


type ProfileInfoType = {
    profile: profileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader isFetching={true}/>
    }

    return (
        <div className={classes.profileInfo}>
            <div><img
                src={props.profile.photos.large ? props.profile.photos.large : defaultImage}
                alt=""/>
            </div>
            <div className={classes.description}>
                <span>{props.profile.fullName}</span>
                <span>{props.profile.aboutMe}</span>
                <span>{props.profile.lookingForAJob}</span>
                <span>{props.profile.lookingForAJobDescription}</span>
                <span>{props.profile.contacts.facebook}</span>
                <span>{props.profile.contacts.github}</span>
                <span>{props.profile.contacts.instagram}</span>
                <span>{props.profile.contacts.mainLink}</span>
                <span>{props.profile.contacts.twitter}</span>
                <span>{props.profile.contacts.youtube}</span>
                <span>{props.profile.contacts.vk}</span>
                <span>{props.profile.contacts.website}</span>

            </div>
        </div>

    )
}