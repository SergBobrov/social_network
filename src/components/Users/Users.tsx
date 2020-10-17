import React from "react";
import classes from "./Users.module.css"
import axios from 'axios';
import {UsersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/images.jpg"


type UsersPropsType = {
    users: Array<UsersType>
    follow: (u: number) => void
    unfollow: (u: number) => void
    setUsers: (u: any) => void
}


export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            {
                props.users.map((u) => {
                    return (

                        <div key={u.id} className={classes.wrapper}>
                            <div>
                                <div>
                                    <img className={classes.photo}
                                         src={u.photos.small !== null ? u.photos.small : userPhoto} alt="avatar"/>
                                </div>
                                <div>
                                    {u.followed ?
                                        <button onClick={() => {
                                            props.follow(u.id)
                                        }}>follow</button> :
                                        <button onClick={() => {
                                            props.unfollow(u.id)
                                        }}>unfollow</button>}

                                </div>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{"city"}</div>
                                    <div>{"country"}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};