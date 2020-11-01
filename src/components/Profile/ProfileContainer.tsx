import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {profileType, setUserProfile} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router-dom'


type ProfileContainerProps = {
    setUserProfile: (profile: profileType) => void
    profile: profileType | null
}


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerProps



class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId

        if(!userID) {userID = "2"}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {

                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile profile = {this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
})(WithUrlDataContainerComponent)


