import classes from "./Users.module.css";
import userPhoto from "../../assets/images/images.jpg";
import React from "react";
import {UsersType} from "../../redux/users-reducer";


type UsersPropsType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currantPage: number
    currantPageHandler: (page: number) => void
    follow: (u: number) => void
    unfollow: (u: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= 25; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                <div>
                    {pages.map(page => {
                        return (
                            <span onClick={() => {
                                props.currantPageHandler(page)
                            }}
                                  className={props.currantPage === page ? classes.selectedPage : 'null'}>{page}</span>
                        )
                    })}
                </div>
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
        </div>

    )
}