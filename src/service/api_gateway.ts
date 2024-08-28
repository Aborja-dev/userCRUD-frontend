import { RegisterFormData } from '@/pages/register/components/registerForm';
import { LoginFormData } from "@/pages/login/components/LoginForm";
import { FetchApiRequest, FetchApiWithToken } from "@/service/classes/FetchRequest";
import { Sesion, User } from "@/types/types";
import { LoginRequest, RegisterUser, RejectRequest } from '@/service/types';
import { getToken } from '@/shared/helpers';
const baseUrl = 'http://localhost:3000';


export const fetchLogin = async (values: LoginFormData): Promise<Sesion | RejectRequest> => {
    const request = new FetchApiRequest(`${baseUrl}/users`)
    const response = await request.post<LoginRequest>({
            email: values.username,
            password: values.password
        })
        .fetch('login')
    if (response.status === 200) {
        return await response.json()
    } else {
        return {
            error: true,
            message: 'Invalid credentials'
        }
    }
}

export const fetchRegister = async (values: RegisterFormData): Promise<Sesion | RejectRequest> => {
    const request = new FetchApiRequest(`${baseUrl}/users`)
    const response = await request.post<RegisterUser>({
            email: values.email,
            name: values.name,
            password: values.password,
        })
        .fetch('register')
    if (response.status === 200) {
        return await response.json()
    } else {
        return {
            error: true,
            message: 'No se pudo registrar el usuario'
        }
    }
}


export const fetchUsers = async (): Promise<User[] | RejectRequest> => {
    const token = getToken()
    if (!token) return Promise.reject('No token')
    const request = new FetchApiWithToken(`${baseUrl}/users`, token)
    const response = await request.get().fetch('')
    if (response.status === 200) {
        return await response.json()
    } else {
        return {
            error: true,
            message: 'No se pudieron cargar los usuarios'
        }
    }
}

export const fetchUpdate = async (id: number, role: string): Promise<{message: string} | RejectRequest> => {
    const token = getToken()
    if (!token) return Promise.reject('No token')
    const request = new FetchApiWithToken(`${baseUrl}/users/`, token)
    const response = await request.patch({
        role
    }).fetch(`edit/${id}`)
    if (response.status === 200) {
        return await response.json()
    } else {
        return {
            error: true,
            message: 'No se pudo actualizar el rol del usuario'
        }
    }
}



export const fetchDelete = async (id: number): Promise<{message: string} | RejectRequest> => {
    const token = getToken()
    if (!token) return Promise.reject('No token')
    const request = new FetchApiWithToken(`${baseUrl}/users/`, token)
    const response = await request.delete().fetch(`${id}`)
    if (response.status === 200) {
        return await response.json()
    } else {
        return {
            error: true,
            message: 'No se pudo eliminar el usuario'
        }
    }
}