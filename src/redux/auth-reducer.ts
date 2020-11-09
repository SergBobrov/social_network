import {headerAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";

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

type ThunkType = ThunkAction<void, AppStateType, unknown, AuthActionsType>

type DispatchType = ThunkDispatch<AppStateType, unknown, AuthActionsType>


export const AuthThunks = {
    getAuthData: (): ThunkType => {
        return (dispatch: DispatchType) => {
            headerAPI.getAuthData().then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data))
                }
            })
        }
    }
}


