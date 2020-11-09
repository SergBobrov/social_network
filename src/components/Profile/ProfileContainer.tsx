import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {profileType, setUserProfile} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {profileAPI} from "../../api/api";


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

        profileAPI.getProfile(userID).then(response => {

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


