import {ActionsType} from "./redux-store";

type sideBarType = {
    friends: Array<{
        id: number
        name: string
    }>
}


let initialState = {
    friends: [
        {id: 1, name: "Fernanda"},
        {id: 2, name: "Oskar"},
        {id: 3, name: "John"}
    ]
}

const sidebarReducer = (state: sideBarType=initialState, action: ActionsType) => {


    return state
}

export default sidebarReducer;