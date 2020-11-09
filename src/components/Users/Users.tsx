import classes from "./Users.module.css";
import userPhoto from "../../assets/images/images.jpg";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currantPage: number
    currantPageHandler: (page: number) => void
    follow: (u: number) => void
    unfollow: (u: number) => void
    toggleIsFollowingAC: (isFollowing: boolean, id: number) => void
    followingInProgress: number[]

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
                <div className={classes.pagination}>
                    {pages.map((page, index) => {
                        return (
                            <span key={index} onClick={() => {
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
                                        <NavLink to={`/profile/` + u.id}>
                                            <img className={classes.photo}
                                                 src={u.photos.small !== null ? u.photos.small : userPhoto}
                                                 alt="avatar"/>
                                        </NavLink>
                                    </div>
                                    <div>
                                        {u.followed ? <button disabled={props.followingInProgress.some(t => t === u.id)}
                                                              onClick={() => {
                                                                  props.unfollow(u.id)
                                                              }
                                                              }>unfollow</button>
                                            :

                                            <button disabled={props.followingInProgress.some(t => t === u.id)}
                                                    onClick={() => {
                                                        props.unfollow(u.id)
                                                    }}>follow</button>}

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