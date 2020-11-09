import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {thunks, UsersStateType, UsersType} from "../../redux/users-reducer";
import {Users} from './Users'
import {Preloader} from "../../assets/preloader/Preloader";


type PropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    usersPage: UsersStateType
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    getCurrentPage: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currantPage, this.props.usersPage.pageSize)
    }

    setCurrentPage = (pageNumber: number) => {
        this.props.getCurrentPage(pageNumber, this.props.usersPage.pageSize)
    }


    setFollow = (userId: number) => {
        this.props.follow(userId)
    }

    setUnfollow = (userId: number) => {
        this.props.unfollow(userId)
    }


    render() {
        return <>
            {this.props.usersPage.isFetching ? <Preloader isFetching/> : <Users
                follow={this.setFollow}
                unfollow={this.setUnfollow}
                usersPage={this.props.usersPage}
                setCurrentPage={this.setCurrentPage}
            />
            }
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        usersPage: state.usersPage
    }
}

const {getUsers, getCurrentPage, follow, unfollow} = thunks

export default connect(mapStateToProps, {
    getUsers, getCurrentPage, follow, unfollow
})(UsersContainer)




