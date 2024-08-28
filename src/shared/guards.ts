import { getSession } from "@/shared/helpers"
import { redirect } from "react-router-dom"

export interface guardAuthLoaderProps {
    name: string
    role: string
    avatarURL: string
}

export const guardAuthLoader = () => {
    const sesion = getSession()
    if (!sesion) {
        return redirect('/login')
    } else {
        return {
            name: sesion.name,
            role: sesion.role,
            avatarURL: sesion.avatarURL
        } 
    }
}