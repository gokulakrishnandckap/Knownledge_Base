import React from 'react'
import logo from '../../assets/images/onboard.png'
import { Link } from 'react-router-dom'

export default function SigninComponents() {
    return (
        <main className="flex">
            <div className='bg-primary w-1/2 h-screen'>
                <img src={logo} alt=""  className='p-16 '/>
            </div>
            
            <div className='bg-secondary h-screen w-1/2 p-28' >
                <div>
                    <h2 className='text-2xl text-textPrimary'>Happy to see you back</h2>  
                    <h3 className='pt-2 text-base text-textPrimary'>Log in and unlock your world!</h3>
                </div>
                <form action="" className=''>
                <div className='pt-5'>
                    <label className="text-textPrimary text-base">Email <span className='text-red-500'>*</span></label>
                    <div className='pt-3 '>
                        <input type="email" className='w-96 h-10 p-2 rounded-lg focus:outline-gray-400' placeholder='email' />
                    </div>
                </div>
                <div className='pt-5'>
                    <label className="text-textPrimary text-base">Password <span className='text-red-500'>*</span></label>
                    <div className='pt-3 relative'>
                        <input type="password" className='w-96 h-10 p-2 rounded-lg focus:outline-gray-400' placeholder='Password' />
                        <span class="material-symbols-outlined absolute right-12 top-5 cursor-pointer text-gray-500 text-xl"> visibility_off
                      </span>
                    </div>
                    <div>
                        <Link to="/forgotpassword"><p className='text-primary text-sm pl-64 pt-2'>Forgot Password</p></Link>
                    </div>
                </div>
                <div className='pt-4 text-center'>
                <button type="submit" className="bg-primary w-36 text-white h-11 rounded-md ">Signin</button>
                </div>
                </form>
                <div className='space-x-1 pt-4 text-center '>
                    <span className='text-textPrimary'>Create an account?</span>
                    <Link to="/" className='text-primary'>Signup</Link>
                </div>

            </div>
        </main>

    )
}
