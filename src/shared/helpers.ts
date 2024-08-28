import { Sesion } from "@/types/types"

export const saveToken = (token: string) => {
    localStorage.setItem('token', token)
}
export const getToken = (): string | null => {
    return localStorage.getItem('token')
}
export const deleteToken = () => {
    localStorage.removeItem('token')
}
export const saveSession = (sesion: Omit<Sesion, 'token'>) => {
    localStorage.setItem('session', JSON.stringify(sesion))
}
export const getSession = (): Omit<Sesion, 'token'> | null => {
    const session = localStorage.getItem('session')
    if (!session) {
        return null
    }
    return JSON.parse(session)
}
export const deleteSession = () => {
    localStorage.removeItem('session')
}