import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import { DialogsType } from "../Dialogs";

export const DialogItem = (props: DialogsType) => {
    let path = classes.dialog + " " + classes.active;
    return (
        <div className={path}
        ><NavLink to={`/dialogs/+ ${props.id}`}>{props.name}
        </NavLink></div>
    )
};