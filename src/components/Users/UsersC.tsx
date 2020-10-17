import React from "react";
import classes from "./Users.module.css"
import axios from 'axios';
import userPhoto from "../../assets/images/users.png"
import {UsersType} from "../../redux/users-reducer";

type UsersCPropsType = {
    users: Array<UsersType>
    follow: (u: number) => void
    unfollow: (u: number) => void
    setUsers: (u: Array<UsersType>) => void
}

export class UsersC extends React.Component<UsersCPropsType> {

   componentDidMount() {
       axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
           this.props.setUsers(response.data.items)
       })
   }

    render() {
        return (
                <div>
                    {
                        this.props.users.map((u) => {
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
                                                    this.props.follow(u.id)
                                                }}>follow</button> :
                                                <button onClick={() => {
                                                    this.props.unfollow(u.id)
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
    }
}