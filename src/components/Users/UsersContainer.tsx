import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    setCurrentPageAC,
    toggleIsFollowingAC, unfollow,
    UsersType
} from "../../redux/users-reducer";
import {Users} from './Users'
import {Preloader} from "../../assets/preloader/Preloader";


type UsersContainerType = {
    users: Array<UsersType>
    follow: (u: number) => void
    unfollow: (u: number) => void
    pageSize: number
    totalUsersCount: number
    currantPage: number
    setCurrentPageAC: (page: number) => void
    isFetching: boolean
    toggleIsFollowingAC: (isFollowing: boolean, id: number) => void
    followingInProgress: number[]
    getUsers: (currantPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currantPage, this.props.pageSize)
    }

    currantPageHandler = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                <Preloader isFetching={this.props.isFetching}/>
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currantPage={this.props.currantPage}
                    currantPageHandler={this.currantPageHandler}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleIsFollowingAC={this.props.toggleIsFollowingAC}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currantPage: state.usersPage.currantPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UsersType>) => {
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage: (CurrentPage: number) => {
//             dispatch(setCurrentPageAC(CurrentPage))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toogleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }

export default connect(mapStateToProps, {
    setCurrentPageAC,
    unfollow,
    follow,
    toggleIsFollowingAC,
    getUsers
})(UsersContainer)




