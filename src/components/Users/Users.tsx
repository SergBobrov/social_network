import classes from "./Users.module.css";
import userPhoto from "../../assets/images/images.jpg";
import React from "react";
import {UsersStateType, UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    usersPage: UsersStateType
}

export const Users = (props: UsersPropsType) => {


    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

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
                                props.setCurrentPage(page)
                                console.log(props.usersPage.currantPage);
                            }}
                                  className={props.usersPage.currantPage === page ? classes.selectedPage : 'null'}>{page}</span>
                        )
                    })}


                </div>
                {
                    props.usersPage.users.map((u) => {
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
                                        {u.followed ? <button disabled={props.usersPage.followingInProgress.some(t => t === u.id)}
                                                              onClick={() => {
                                                                  props.unfollow(u.id)
                                                              }
                                                              }>unfollow</button>
                                            :

                                            <button disabled={props.usersPage.followingInProgress.some(t => t === u.id)}
                                                    onClick={() => {
                                                        props.follow(u.id)
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