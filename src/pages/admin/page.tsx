import Table from '@/pages/admin/components/Table'
import { deleteAction, editAction, loadAction } from '@/pages/admin/reducer/actions'
import { fetchDelete, fetchUpdate } from '@/service/api_gateway'
import { userReducer } from '@/service/reducer'
import { Alert } from '@/shared/Alerts'
import { User } from '@/types/types.d'

import { useEffect, useReducer } from 'react'

import { useLoaderData } from 'react-router-dom'

const INITIAL_STATE: User[] = []
const AdminPage = () => {
  const { users } = useLoaderData()  as {users: User[]}
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  useEffect(() => {
    dispatch(loadAction(users))
  }, [users])
  const onDelete = async (id: number) => {
    const result = await fetchDelete(id)
    if ('error' in result) {
      return Alert.error('No se pudo eliminar el usuario')
    }
    dispatch(deleteAction(id))
    return Alert.success('Usuario eliminado')
  }
  const onEditHandler = async (id: number, role: string) => {
    const result = await fetchUpdate(id, role)
    if ('error' in result) {
      return Alert.error('No se pudo actualizar el usuario')
    } else {
      dispatch(editAction(id, {role: role as User['role']}))
      return Alert.success('Usuario actualizado')
    }

  }
  return (
    <div>
      <h1>Admin dashboard</h1>
      {
        users.length === 0 
        ? <p>No hay usuarios</p>
        : <Table rows={state} onDelete={onDelete} onEdit={onEditHandler} />
      }
      
    </div>
  )
}

export default AdminPage
