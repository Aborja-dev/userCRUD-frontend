import { FormProps } from '@/types/types'
import React from 'react'
export interface RegisterFormData {
    email: string
    password: string
    name: string
    confirmPassword: string

}

const RegisterForm: React.FC<FormProps<RegisterFormData>> = ({ onSubmit, children }) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string
if (password !== confirmPassword) {
      return alert('Passwords do not match')
    }
    const data: RegisterFormData = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      name: formData.get('name') as string,
      confirmPassword: formData.get('confirmPassword') as string,
    }
    console.log(formData, data);
    
    onSubmit(data) 
    fetch('http://localhost:3001/users/register', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      response.json().then((data) => {
        console.log(data)
    })
    })
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </fieldset>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </fieldset>
        <fieldset>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </fieldset>
        <div className="flex gap-4">
          <button type="submit">Crear usuario</button>
          {children}
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
