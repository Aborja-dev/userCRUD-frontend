export interface RegisterUser {
    email: string
    name: string
    password: string
    phone?: string
    adress?: string
    avatarURL?: File
}

export interface RejectRequest {
    error: boolean
    message: string
}

export interface LoginRequest {
    email: string
    password: string
}
