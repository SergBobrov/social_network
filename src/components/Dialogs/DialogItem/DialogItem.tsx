import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";



type DialogItemPropsType = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = classes.dialog + " " + classes.active;
    return (
        <div className={path}>
            <NavLink to={`/dialogs/+ ${props.id}`}> {props.name}
            </NavLink>
        </div>
    )
};