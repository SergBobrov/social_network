import React from "react";
import {urlAddress, UsersType} from "../../redux/users-reducer";
import classes from "./Users.module.css"

type UsersPropsType = {
    users: Array<UsersType>
    follow: (u: number) => void
    unfollow: (u: number) => void
    setUsers: (u: Array<UsersType>) => void
}


export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: urlAddress,
                    followed: true,
                    fullName: 'Dmitry',
                    status: 'Im ok',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: urlAddress,
                    followed: true,
                    fullName: 'Ivan',
                    status: 'Im fine',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: urlAddress,
                    followed: false,
                    fullName: 'Anton',
                    status: 'Im perfect',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: urlAddress,
                    followed: false,
                    fullName: 'Evgen',
                    status: 'Im awesome',
                    location: {city: 'Warsaw', country: 'Poland'}
                }
            ]
        );
    }

    return (
        <div>
            {
                props.users.map((u) => {
                    return (

                        <div key={u.id} className={classes.wrapper}>
                            <div>
                                <div>
                                    <img className={classes.photo} src={u.photoUrl} alt="avatar"/>
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
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>{u.location.city}</div>
                                    <div>{u.location.country}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};