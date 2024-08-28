import Table from '@/pages/admin/components/Table'
import { fetchDelete, fetchUpdate } from '@/service/api_gateway'
import { Alert } from '@/shared/Alerts'
import { User } from '@/types/types'

import { useLoaderData } from 'react-router-dom'

const AdminPage = () => {
  const { users } = useLoaderData()  as {users: User[]}
  console.log(users);
  const onDelete = async (id: number) => {
    const result = await fetchDelete(id)
    if ('error' in result) {
      return Alert.error('No se pudo eliminar el usuario')
    }
    return Alert.success('Usuario eliminado')
  }
  const onEditHandler = async (id: number, role: string) => {
    const result = await fetchUpdate(id, role)
    if ('error' in result) {
      return Alert.error('No se pudo actualizar el usuario')
    } else {
      return Alert.success('Usuario actualizado')
    }

  }
  return (
    <div>
      <h1>Admin dashboard</h1>
      {
        users.length === 0 
        ? <p>No hay usuarios</p>
        : <Table rows={users} onDelete={onDelete} onEdit={onEditHandler} />
      }
      
    </div>
  )
}

export default AdminPage
