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
import {UsersAPIComponent} from "./UsersAPIComponent";


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