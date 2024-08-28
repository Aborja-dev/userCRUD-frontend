import LoginForm, { LoginFormData } from "@/pages/login/components/LoginForm"
import { fetchLogin } from "@/service/api_gateway"
import { Alert } from "@/shared/Alerts"
import { Button } from "@/shared/Buttons"
import { saveSession, saveToken } from "@/shared/helpers"
import { redirect, useNavigate } from "react-router-dom"


const LoginPage = () => {
  const navigate = useNavigate()
  const submitHandler = async (values: LoginFormData) => {
    const result = await fetchLogin(values)
    if ('error' in result) {
      return 
    }
    const { token, ...session } = result
    saveSession(session)
    saveToken(token)
    Alert.success('Login successful')
    if (session.role === 'ADMIN')  {
      console.log('es admin');
      return navigate('/admin')
    }
    navigate('/')
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={submitHandler} >
        <Button.Link url="/register">Register</Button.Link>
      </LoginForm>

    </div>
  )
}

export default LoginPage