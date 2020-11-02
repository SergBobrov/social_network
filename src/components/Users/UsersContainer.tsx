import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setTotalCountAC,
    setUserAC, toggleIsFetchingAC, toggleIsFollowingAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {Users} from './Users'
import {Preloader} from "../../assets/preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersContainerType = {
    users: Array<UsersType>
    followAC: (u: number) => void
    unfollowAC: (u: number) => void
    setUserAC: (u: Array<UsersType>) => void
    pageSize: number
    totalUsersCount: number
    currantPage: number
    setCurrentPageAC: (page: number) => void
    setTotalCountAC: (userCount: number) => void
    isFetching: boolean
    toggleIsFetchingAC: (isFetching: boolean) => void
    toggleIsFollowingAC: (isFollowing: boolean) => void
    isFollowing: boolean
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)

        usersAPI.getUsers(this.props.currantPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUserAC(data.items)
            this.props.setTotalCountAC(data.totalCount)
        })
    }

    currantPageHandler = (pageNumber: number) => {
        this.props.toggleIsFetchingAC(true)
        this.props.setCurrentPageAC(pageNumber)

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetchingAC(false)
            this.props.setUserAC(data.items)
        })
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
                    follow={this.props.followAC}
                    unfollow={this.props.unfollowAC}
                    toggleIsFollowingAC={this.props.toggleIsFollowingAC}
                    isFollowing={this.props.isFollowing}
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
        isFollowing: state.usersPage.followingInProgress
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
    toggleIsFetchingAC,
    setTotalCountAC,
    setCurrentPageAC,
    setUserAC,
    unfollowAC,
    followAC,
    toggleIsFollowingAC
})(UsersContainer)




