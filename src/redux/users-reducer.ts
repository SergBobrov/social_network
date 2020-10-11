const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

type UsersStateType = {
    users: Array<{
        id: number
        followed: boolean
        fullName: string
        status: string
        location: { city: string, country: string }
    }>
}

let initialState: UsersStateType = {
    users: [
        {id: 1, followed: true, fullName: 'Dmitry', status: 'Im ok', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Ivan', status: 'Im fine', location: {city: 'Kiev', country: 'Ukraine'}},
        {
            id: 3,
            followed: false,
            fullName: 'Anton',
            status: 'Im perfect',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 4,
            followed: false,
            fullName: 'Evgen',
            status: 'Im awesome',
            location: {city: 'Warsaw', country: 'Poland'}
        },
    ]
}

const usersReducer = (state: UsersStateType = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        default:
            return state
    }

}


export const followAC = (userId: number) => {
    return ({type: FOLLOW, userId} as const)
};

export const unfollowAC = (userId: number) => {
    return ({type: UNFOLLOW, userId} as const)
};

export default usersReducer;