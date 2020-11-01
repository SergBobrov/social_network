import React from 'react';
import {Header} from "./Header";
import axios from 'axios'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";


type HeaderContainerType = {
    setAuthUserData: (data: AuthStateType) => void
    isAuth: boolean
    login: string | null
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(resp => {
                if (resp.data.resultCode === 0) {
                    this.props.setAuthUserData(resp.data.data)
                }
            })
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return (
        {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
        }
    )

}

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)