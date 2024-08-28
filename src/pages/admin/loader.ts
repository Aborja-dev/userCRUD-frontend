import { fetchUsers } from "@/service/api_gateway"
import { getSession } from "@/shared/helpers"
import { redirect } from "react-router-dom"

export const adminLoader = async () => {
    const sesion = getSession()
    if (!sesion) return redirect('/login')
    if (sesion.role !== 'ADMIN') return redirect('/login')
    const users = await fetchUsers()
    return  {
        users
    }
}