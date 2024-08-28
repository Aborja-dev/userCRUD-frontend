import RegisterForm from '@/pages/register/components/registerForm'
import { fetchRegister } from '@/service/api_gateway'
import { Button } from '@/shared/Buttons'

const RegisterPage = () => {
  return (
    <div>
      <h1>Crear Nuevo Usuario</h1>
      <RegisterForm onSubmit={(values) => fetchRegister(values)}>
        <Button.Back>Regresar</Button.Back>
      </RegisterForm>
    </div>
  )
}

export default RegisterPage
