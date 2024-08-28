import React from 'react'
import { ToastContainer } from 'react-toastify'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ToastContainer />
        </>
    )
}

export default MainLayout
