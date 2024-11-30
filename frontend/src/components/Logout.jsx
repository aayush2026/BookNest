import React from 'react'
import { useAuth } from '../context/authProvider'
import toast from 'react-hot-toast'

const Logout = () => {
  const [authUser,setAuthUser]=useAuth()
  const handleLogout= () => {
    try {
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("Users")
      toast.success("Logout Successfull")
      setTimeout(() => {
        window.location.reload()
      }, 800);
    } catch (error) {
      toast.error("Error"+error.message)
    }
  }

  return (
    <div>
      <a className="bg-red-500 text-white px-4 py-2.5 rounded-md hover:bg-slate-800 duration-300 cursor-pointer dark:bg-red-500 dark:text-white" onClick={handleLogout}>Logout</a>
    </div>
  )
}

export default Logout