import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {profileThunks, profileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom'


type ProfileContainerProps = {
    getProfile: (userId: string) => void
    profile: profileType | null
}


type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerProps


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        this.props.getProfile(userID)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
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

const {getProfile} = profileThunks

export default connect(mapStateToProps, {
    getProfile
})(WithUrlDataContainerComponent)


