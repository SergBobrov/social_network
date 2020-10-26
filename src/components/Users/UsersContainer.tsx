import React from "react";
import axios from 'axios';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setTotalCountAC,
    setUserAC,
    unfollowAC,
    UsersActionsType,
    UsersType
} from "../../redux/users-reducer";
import {Users} from './Users'

type UsersAPIComponentType = {
    users: Array<UsersType>
    follow: (u: number) => void
    unfollow: (u: number) => void
    setUsers: (u: Array<UsersType>) => void
    pageSize: number
    totalUsersCount: number
    currantPage: number
    setCurrentPage: (page: number) => void
    setTotalCount: (userCount: number) => void

}

class UsersAPIComponent extends React.Component<UsersAPIComponentType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currantPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalCount(response.data.totalCount)
            })
    }

    currantPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currantPage={this.props.currantPage}
                currantPageHandler={this.currantPageHandler}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        )
    }
}


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currantPage: state.usersPage.currantPage
    }
}

const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUserAC(users))
        },
        setCurrentPage: (CurrentPage: number) => {
            dispatch(setCurrentPageAC(CurrentPage))
        },
        setTotalCount: (totalCount: number) => {
            dispatch(setTotalCountAC(totalCount))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer