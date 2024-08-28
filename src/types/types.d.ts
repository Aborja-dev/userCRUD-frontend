export interface Sesion {
    id: number
    role: 'MODERADOR' | 'VIP' | 'SELLER' | 'CLIENT' | 'ADMIN'
    name: string
    avatarURL: string
    token: string
}
interface FormProps <T>{
    onSubmit: (data: T) => void
    children?: React.ReactNode
}

export interface User {
    id: number
    email: string
    name: string
    password: string
    phone: string
    adress?: string
    avatarURL: string
    isAdmin: boolean
    state: 'INACTIVE' | 'ACTIVE' | 'SUSPENDED'
    role: 'MODERADOR' | 'VIP' | 'SELLER' | 'CLIENT' | 'ADMIN'
}

export interface reducerAction {
    type: Actions
    payload: any
}

export enum Actions {
    'LOAD' = 'LOAD',
    'EDIT' = 'EDIT',
    'DELETE' = 'DELETE'
}