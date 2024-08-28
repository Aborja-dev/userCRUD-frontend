import React from 'react'
export interface LoginFormData {
  username: string
  password: string
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void
  children?: React.ReactNode
}
export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, children }) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data: LoginFormData = {
      username: formData.get('username') as string,
      password: formData.get('password') as string
    }
    onSubmit(data)
  }
  return (
    <form onSubmit={submitHandler}>
      <fieldset>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </fieldset>
      <div className="flex gap-4">
        <button type="submit">Login</button>
        {children}
      </div>
    </form>
  )
}

export default LoginForm
