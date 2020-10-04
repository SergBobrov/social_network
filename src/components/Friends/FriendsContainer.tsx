import React from "react";
import classes from './Friends.module.css'
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        friendData: state.sideBar.friends
    }
};

export const FriendsContainer = connect(mapStateToProps)(Friends)


