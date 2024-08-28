import { Actions, reducerAction, User } from "@/types/types.d"

export const loadAction = (payload: User[]): reducerAction => {
    return {
        type: Actions.LOAD,
        payload
    }
}

export const editAction = (id:number, payload: Partial<User>): reducerAction => {
    return {
        type: Actions.EDIT,
        payload: {
            id,
            data: payload
        }
    }
}

export const deleteAction = (id: number): reducerAction => {
    return {
        type: Actions.DELETE,
        payload: id
    }
}
