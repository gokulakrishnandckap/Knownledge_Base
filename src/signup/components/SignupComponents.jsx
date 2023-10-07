import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import google from '../../assets/images/google.png';
import logo from '../../assets/images/onboard.png';
import { Link } from 'react-router-dom';



export default function SignupComponents() {

  // const initialValues = {
  //   username:"",
  //   email:"",
  //   password:"",
  //   confirmPassword:""
  // }

  const [errors,setError] =  useState({})
  const [formValues, setFormValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [ConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  function togglePassword() {
    setPasswordVisible((prevState) => !prevState);
  }

  function toggleConfirmPassword() {
    setConfirmPasswordVisible((prevState) => !prevState);
  }

  const handleSumbit = (e)=>{
    e.preventDefault();
    const validationErrors ={}
    
    if(!formValues.username.trim())
    {
      validationErrors.username = "username is reqired"
    }
    if(!formValues.email.trim())
    {
      validationErrors.email = "email is reqired"
    }
    if(!/\S+@\S\.\S+/.test(formValues.email))
    {
      validationErrors.email = "email is not valid"

    }

    if(!formValues.password.trim())
    {
      validationErrors.password = "password is reqired"
    }
    if(!formValues.confirmPassword.trim())
    {
      validationErrors.confirmPassword = "confirmPassword is reqired"
    }
    if(formValues.password !== formValues.confirmPassword)
    {
      validationErrors.confirmPassword = "Password not match"
    }




    setError(validationErrors)

    if(Object.keys(validationErrors).length === 0)
    {
      alert("Form Sumbitted successfully")
    }

  }

  const HandleChange = (e) =>{
    const {name,value} = e.target;
    setFormValues({...formValues, [name]:value});
  }


  return (
    <div className=''>
      <div className='flex '>
        <div className='bg-primary w-1/2 h-screen'>
          <img src={logo} className='pt-32 px-28' />
        </div>
        <div className='bg-secondary w-1/2'>  
          <div className='pt-11 px-32 space-y-1'>
            <h2 className='text-textPrimary font-bold text-2xl'>Welcome to Knowledge Base! 👋</h2>
            <h3 className='text-textPrimary'>Please sign into your account</h3>

            <form class="space-y-1" onSubmit={handleSumbit}>
              <div>
                <label for="username" className="text-textPrimary text-base	">Username <span className='text-red-500'>*</span></label>
                <div class="mt-2">
                  <Input name="username" type="username" event={HandleChange} value={formValues.username} placeholder="Username"/>
                  {errors.username && <span className='text-red-500'>{errors.username}</span>}

                </div>

              </div>
              <div>
                <label for="email" class="text-textPrimary text-base">Email <span className='text-red-500'>*</span></label>
                <div class="mt-2">
                  <Input name="email" type="email" event={HandleChange} value={formValues.email} placeholder="Email" />
                  {errors.email && <span className='text-red-500'>{errors.email}</span>}
                </div>
              </div>
              <div className='relative'>
                <label for="password" class="text-textPrimary text-base	">Password <span className='text-red-500'>*</span></label>
                <div class="mt-2">
                  <Input name="password" type={PasswordVisible ? "text" : "password"} value={formValues.password} placeholder="Password" event={HandleChange} />
                  {errors.password && <span className='text-red-500'>{errors.password}</span>}

                  {PasswordVisible ? (
                    <span class="material-symbols-outlined absolute right-5 top-10 cursor-pointer text-gray-500 text-xl" onClick={togglePassword}>
                      visibility
                    </span>
                  ) : (
                    <span class="material-symbols-outlined absolute right-5 top-10 cursor-pointer text-gray-500 text-xl" onClick={togglePassword}>
                      visibility_off
                    </span>
                  )
                  }
                </div>
              </div>
              <div>
                <label for="confirmPassword" class="text-textPrimary text-base	">Confirm Password <span className='text-red-500'>*</span></label>
                <div class="mt-2 relative">
                  <Input name="confirmPassword" type={ConfirmPasswordVisible ? "text" : "password"} placeholder="Confirm Password" value={formValues.confirmPassword} event={HandleChange} />
                  {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword}</span>}


                

                  {ConfirmPasswordVisible ? (
                     <span class="material-symbols-outlined absolute right-5 top-2 cursor-pointer text-gray-500 text-xl " onClick={toggleConfirmPassword}>
                     visibility
                   </span>
                  ) : (
                    <span class="material-symbols-outlined absolute right-5 top-2 cursor-pointer text-gray-500 text-xl " onClick={toggleConfirmPassword}>
                    visibility_off
                  </span>
                  )
                  }





                </div>
              </div>
              <div>
                <Button name="Signup" />
              </div>
            </form>
            <div className='space-x-1 mt-5 ml-12'>
              <span className='text-textPrimary '>
                Already have an account?
              </span>
              <Link to="/Signin" className='text-primary '>
                Signin Here
              </Link >
            </div>
            <div className='flex ml-16'>
              <div className='bg-white w-10 h-10 '>
                <img src={google} className='p-2' />

              </div>
              <button class="bg-primary w-40 h-10   text-white rounded">Signup with google</button>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

