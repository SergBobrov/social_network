import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {profileType, setUserProfile} from "../../redux/profile-reducer";


type ProfileContainerProps = {
    setUserProfile: (profile: profileType) => void
    profile: profileType
}


class ProfileContainer extends React.Component<ProfileContainerProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileContainer)


