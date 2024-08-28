import { Button } from '@/shared/Buttons'
import { guardAuthLoaderProps } from '@/shared/guards'
import { deleteSession, deleteToken } from '@/shared/helpers'
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'

const PrivateLayout = () => {
    const { name, role } = useLoaderData() as guardAuthLoaderProps
    const navigate = useNavigate()
    return (
        <main>
            <header>
                <p>{name}</p>
                <p>{role}</p>
                <Button onClick={() => {
                    deleteSession()
                    deleteToken()
                    navigate('/login')
                }}>Logout</Button>
            </header>
            <Outlet />
        </main>
    )
}

export default PrivateLayout
