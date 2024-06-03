import React from 'react'
import { useForm } from "react-hook-form"


  
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div>

{/* Put this part before </body> tag */}
<dialog id="my_modal_2" className="modal">

  <div className="modal-box text-slate-700 dark:bg-neutral-content">
  <form method="dialog" className="modal-backdrop" onSubmit={handleSubmit(onSubmit)}>
  {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
    <h3 className="font-bold text-lg text-center text-slate-700">Login</h3>
    <div className='mt-4 items-center justify-center text-slate-700'>
        <span>Email</span>
        <br/>
        <input type="email"
            placeholder='Enter your email'
            className='w-80 px-3 py-1 border rounded-md outline:none mb-4 mt-2'
            {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-sm text-pink-700'>This field is required</span>}
        <br/>
        <span>Password</span>
        <br/>
        <input type="text"
            placeholder='Enter your password'
            className='w-80 px-3 py-1 border rounded-md outline:none'
            {...register("password", { required: true })}
        />
         <br/>
        {errors.password && <span className='text-sm text-pink-700'>This field is required</span>}
        
    </div>
    {/* Buttons */}
    <div className='flex justify-around'>
        <button className='bg-pink-500 text-white px-2 py-1 mt-4 rounded-md hover:bg-pink-600 duration-200' type="submit">Login</button>
        <p className=' mt-5'><span className='text-slate-700'>Not Registered </span><span className='text-pink-500'>yet?</span> <span className='text-pink-500 underline cursor pointer' ><a href="/signup">Signup</a></span></p>
    </div>
    </form>
  </div>
  <form className="modal-backdrop">
    <button>close</button>
    </form>
  
</dialog>
    </div>
  )
}

export default Login