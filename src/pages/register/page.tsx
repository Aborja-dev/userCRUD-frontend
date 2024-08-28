import RegisterForm, { RegisterFormData } from '@/pages/register/components/registerForm'
import { fetchRegister } from '@/service/api_gateway'
import { Alert } from '@/shared/Alerts'
import { Button } from '@/shared/Buttons'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()
  const registerHandler = async (values: RegisterFormData) => {
    const result = await fetchRegister(values)
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
