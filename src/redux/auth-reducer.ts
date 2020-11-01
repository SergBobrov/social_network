const SET_USER_DATA = 'SET_USER_DATA'


export type AuthStateType = {
    id: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean,
}


export type AuthActionsType =
    ReturnType<typeof setAuthUserData>


let initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionsType) => {

    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
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


