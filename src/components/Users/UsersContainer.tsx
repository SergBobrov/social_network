import React from "react";
import axios from 'axios';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC, setTotalCountAC,
    setUserAC, toggleIsFetchingAC,
    unfollowAC,
    UsersType} from "../../redux/users-reducer";
import {Users} from './Users'
import {Preloader} from "../../assets/preloader/Preloader";



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
}

class UsersContainer extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currantPage}&count=${this.props.pageSize}`,{
            withCredentials: true,
            headers: {'API-KEY': '64e9bc29-de8f-41f7-952f-c3c54b8f9de2'}

        })
            .then(response => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUserAC(response.data.items)
                this.props.setTotalCountAC(response.data.totalCount)
            })
    }

    currantPageHandler = (pageNumber: number) => {
        this.props.toggleIsFetchingAC(true)
        this.props.setCurrentPageAC(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true,
                headers: {'API-KEY': '64e9bc29-de8f-41f7-952f-c3c54b8f9de2'}
            })
            .then(response => {
                this.props.toggleIsFetchingAC(false)
                this.props.setUserAC(response.data.items)
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
        isFetching: state.usersPage.isFetching
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
    followAC
})(UsersContainer)




