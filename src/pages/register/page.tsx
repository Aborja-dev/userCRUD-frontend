import RegisterForm, { RegisterFormData } from '@/pages/register/components/registerForm'
import { fetchRegister } from '@/service/api_gateway'
import { Alert } from '@/shared/Alerts'
import { Button } from '@/shared/Buttons'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()
  const registerHandler = async (values: RegisterFormData) => {
    const formData = new FormData()
    formData.append('email', values.email)
    formData.append('password', values.password)
    formData.append('name', values.name)
    if (values.avatar) {
      formData.append('avatar', values.avatar)
    }
    const result = await fetchRegister(formData)
    if ('error' in result) {
      return Alert.error(result.message)
    }
    navigate('/login')
    return Alert.success('Usuario creado')
  }
  return (
    <div>
      <h1>Crear Nuevo Usuario</h1>
      <RegisterForm onSubmit={registerHandler}>
        <Button.Back>Regresar</Button.Back>
      </RegisterForm>
    </div>
  )
}

export default RegisterPage
