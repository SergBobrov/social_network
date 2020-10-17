import {connect} from "react-redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";
import {followAC, setUserAC, unfollowAC, UsersActionsType, UsersType} from "../../redux/users-reducer";
import {UsersC} from "./UsersC";
import {Users} from "./Users";


const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users
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
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer