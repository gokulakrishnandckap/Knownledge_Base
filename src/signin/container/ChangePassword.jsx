import React from 'react'
import changePassword from '../../assets/images/Changepassword.png';
import { Link } from 'react-router-dom';
import Input from '../../signup/components/Input';

export default function ChangePassword() {
  return (
    <main className="flex">
    <div className='bg-secondary h-screen w-1/2 p-28' >
        <div className='space-y-2'>
            <h1 className='text-3xl text-primary font-bold'>Change Your Password?</h1>
            <h2 className='text-base text-textPrimary'>To reset your password please enter the email address
                of your Pen it account</h2>
        </div>
        <form class="space-y-2 pt-3" action="#" method="POST">
                <div>
                  <label for="email" class="text-textPrimary text-base">Email <span className='text-red-500'>*</span></label>
                  <div class="mt-2">
                    <Input name="email" type="email" placeholder="Email" />
                    {/* <p>req</p> */}
                  </div>
                </div>
                <div className='relative'>
                  <label for="password" class="text-textPrimary text-base	">New Password <span className='text-red-500'>*</span></label>
                  <div class="mt-2">
                    <Input name="password" type="password" placeholder="Password" />
                    <span class="material-symbols-outlined absolute right-12 top-10 cursor-pointer text-gray-500 text-xl " >
                        visibility_off
                      </span>
                  </div>
                </div>
                <div>
                  <label for="confirmPassword" class="text-textPrimary text-base	">Confirm New Password <span className='text-red-500'>*</span></label>
                  <div class="mt-2 relative">
                    <Input name="confirmPassword" type="password" placeholder="Confirm Password" />
                    {/* <p>req</p> */}

                    <span class="material-symbols-outlined absolute right-12 top-2 cursor-pointer text-gray-500 text-xl " >
                        visibility_off
                      </span>
                  </div>
                </div>
  
                <div className='pt-8'>
                      <Link to="/changepassword"><button type="submit" className="bg-primary text-white h-11 rounded-md w-96 text-base">Reset My Password</button></Link>
                    </div>
                    <div className='pt-5 pl-32 underline text-primary'>
                    <Link to="/signin">Go to Signin</Link>
                </div>
              </form>
    </div>
    <div className='bg-primary w-1/2 h-screen'>
        <img src={changePassword} alt="" className='p-16' />
    </div>



</main>
  )
}
