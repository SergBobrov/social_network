import {ActionsType, sideBarType} from "./Store";

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