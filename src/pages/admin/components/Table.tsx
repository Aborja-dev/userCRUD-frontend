import { SelectField } from '@/shared/SelectField'
import { User } from '@/types/types'
import React from 'react'

interface TableRowProps {
    name: User['name']
    state: User['state']
    role: User['role']
    id: User['id']
}

interface Props {
    rows: TableRowProps[]
    onDelete: (id: number) => void
    onEdit: (id: number, role: string) => void
}   


const options = [
  { value: 'ADMIN', label: 'Admin' },
  { value: 'USER', label: 'User' },
]


const Table: React.FC<Props> = ({ rows, onDelete, onEdit }) => {
  const [value, setValue] = React.useState<string>()
  const changeHandler = (value: string) => {
    setValue(value)
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Estatus</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.state}</td>
            <td><SelectField deafultValue={row.role} options={options} onChange={changeHandler}/></td>
            <td style={{ display: 'flex' }}>
              <button onClick={() => onEdit(row.id, value ?? row.role)}>Edit</button>
              <button onClick={() => onDelete(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Table