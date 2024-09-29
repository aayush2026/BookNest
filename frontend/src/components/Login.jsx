import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form 
            method="dialog" 
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* if there is a button in form, it will close the modal */}
            <Link 
              to="/"
              className="btn btn-sm btn-circle btn-ghost border-none absolute right-2 top-2 text-slate-300"
              onClick={()=>document.getElementById('my_modal_3').close()}
            >✕</Link>
          <h3 className="font-bold text-xl text-slate-300">Login</h3>
          <div>
            <p className='pt-3 pb-1 text-slate-300'>Email</p>
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='w-80 p-2 rounded-md outline-none border-slate-300'
              {...register("email", { required: true })} 
            />
            {errors.email && <p className='text-xs text-red-600'>*This field is required</p>}
            <p className='pt-3 pb-1 text-slate-300'>Password</p>
            <input 
              type="password" 
              placeholder='Enter your password' 
              className='w-80 p-2 rounded-md outline-none border-slate-300'
              {...register("password", { required: true })} 
            />
            {errors.password && <p className='text-xs text-red-600'>*This field is required</p>}
          </div>
          <button className='bg-black text-white px-4 py-1.5 rounded-md hover:bg-slate-800 duration-300 cursor-pointer dark:bg-slate-100 dark:text-black mt-4 shadow-lg'>Login</button>
          <span className='ml-7'>Not Registered?</span>
          <Link 
            to="/signup" 
            className='text-red-600 underline ml-2' 
            onClick={()=>document.getElementById('my_modal_3').close()}
          >Signup</Link>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Login