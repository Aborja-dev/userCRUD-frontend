/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-case-declarations */
import { reducerAction, User } from "@/types/types"


export const userReducer = (state: User[], action: reducerAction): User[] => {
    switch (action.type) {
        case 'LOAD':
            return action.payload
        case 'EDIT':
            const updateState: User[] = state.map(user => {
                if (user.id === action.payload.id) {
                    return {
                        ...user,
                        ...action.payload.data
                    }
                }
                return user
            })
            return updateState
        case 'DELETE':
            const deletedState: User[] = state.filter(user => user.id !== action.payload)
            return deletedState
        default:
            return state
    }
}