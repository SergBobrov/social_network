import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";
import {headerAPI} from "../../api/api";


type HeaderContainerType = {
    setAuthUserData: (data: AuthStateType) => void
    isAuth: boolean
    login: string | null
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {

        headerAPI.getAuthData().then(data => {
                if (data.resultCode === 0) {
                    this.props.setAuthUserData(data.data)
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