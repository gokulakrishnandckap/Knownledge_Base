import React from 'react'
import forgotPassword from '../../assets/images/forgotpassword.png';
import { Link } from 'react-router-dom';


export default function ForgotPassword() {
    return (

        <main className="flex">
            <div className='bg-secondary h-screen w-1/2 p-28' >
                <div className='space-y-2'>
                    <h1 className='text-3xl text-primary font-bold'>Forgot Your Password?</h1>
                    <h2 className='text-base text-textPrimary'>To reset your password please enter the email address
                        of your Pen it account</h2>
                </div>
                <form action="" className=''>
                    <div className='pt-5'>
                        <label className="text-textPrimary text-base">Email <span className='text-red-500'>*</span></label>
                        <div className='pt-3 '>
                            <input type="email" className='w-96 h-10 p-2 rounded-lg focus:outline-gray-400' placeholder='email' />
                        </div>
                    </div>
                    <div className='pt-8'>
                      <Link to="/changepassword"><button type="submit" className="bg-primary text-white h-11 rounded-md w-96 text-base">Reset Password Link</button></Link>
                    </div>
                </form>
                <div className='pt-5 pl-32 underline text-primary'>
                    <Link to="/signin">Go to Signin</Link>
                </div>
            </div>
            <div className='bg-primary w-1/2 h-screen'>
                <img src={forgotPassword} alt="" className='p-16' />
            </div>



        </main>


    )
}

