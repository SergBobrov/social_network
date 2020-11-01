const SET_USER_DATA = 'SET_USER_DATA'
const UNFOLLOW = 'UNFOLLOW'


export type AuthStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
}


export type AuthActionsType =
    ReturnType<typeof setAuthUserData>


let initialState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}


export const setAuthUserData = (data: AuthStateType) => {
    return ({
        type: SET_USER_DATA,
        data: {
            ...data
        }
    } as const)
};


