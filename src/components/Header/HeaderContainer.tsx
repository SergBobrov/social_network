import React from 'react';
import {Header} from "./Header";
import axios from 'axios'
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthStateType, setAuthUserData} from "../../redux/auth-reducer";


type HeaderContainerType = {
    setAuthUserData: (data: AuthStateType) => void
}


class HeaderContainer extends React.Component<HeaderContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.1/auth/me`, {
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
            <Header/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    {
    }
}

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)