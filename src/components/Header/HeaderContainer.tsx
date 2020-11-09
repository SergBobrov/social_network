import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthThunks} from "../../redux/auth-reducer";


type HeaderContainerType = {
    getAuthData: () => void
    isAuth: boolean
    login: string | null
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        this.props.getAuthData()
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

const {getAuthData} = AuthThunks


export default connect(mapStateToProps, {
    getAuthData
})(HeaderContainer)