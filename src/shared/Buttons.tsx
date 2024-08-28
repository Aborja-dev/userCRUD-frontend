import React from "react"
import { Link, useNavigate } from "react-router-dom"
const BackButton = ({ children }: { children?: React.ReactNode }) => {
  const navigate = useNavigate()
  return (
    <Button onClick={() => navigate(-1)}>{
      children ?? 'Back'
    }</Button>
  )
}
export const Button = ({ children, onClick }: { children: React.ReactNode, onClick?: () => void }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}
Button.Link = ({ url, children }: { url: string, children: React.ReactNode }) => {
  return (
    <Link to={url}>
      <Button>{children}</Button>
    </Link>
  )
}

Button.Back = ({ children }: { children?: React.ReactNode }) => {
  return (
    <BackButton>{children}</BackButton>
  )
}