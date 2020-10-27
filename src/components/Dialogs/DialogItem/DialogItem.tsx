import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import avaSmall from "../../../images/avaSmall.png"


type DialogItemPropsType = {
    id: number
    name: string
}

const avaStyle = {
    width: "20px",
    height: "20px"
    }

export const DialogItem = (props: DialogItemPropsType) => {
    // let path = classes.dialog + " " + classes.active;
    return (
        <div className={classes.path}>
            <img style={avaStyle} src={avaSmall} alt=""/>
            <NavLink to={`/dialogs/+ ${props.id}`}> {props.name}
            </NavLink>

        </div>
    )
};