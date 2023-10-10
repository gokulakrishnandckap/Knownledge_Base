import React, { useState } from 'react'
import logo from '../../assets/images/onboard.png'
import { Link } from 'react-router-dom'

export default function SigninComponents() {


    const [PasswordVisible, setPasswordVisible] = useState(false);
    const [errors, setError] = useState({})
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })


    function togglePassword() {
        setPasswordVisible((prevState) => !prevState);
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        // console.log(e.target.value);

        const validationErrors = {}

        if (!formValues.email.trim()) {
            validationErrors.email = "email is reqired"
        }

        if (!formValues.password.trim()) {
            validationErrors.password = "password is reqired"
        }

        setError(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Sumbitted successfully")
        }

    }

    const HandleChange = (e) => {

        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });


    }


    return (
        <main className="flex">
            <div className=' lg:bg-primary w-1/2 max-h-full '>
                <img src={logo} alt="" className='max-w-[390px]  m-auto mt-[130px] mb-[112px] lg:block' />
            </div>
            <div className='bg-secondary max-h-full w-1/2 ' >
                <div className='max-w-[390px]  m-auto mt-[100px]'>
                    <div>
                        <h2 className='text-2xl text-textPrimary'>Happy to see you back</h2>
                        <h3 className='pt-2 text-base text-textPrimary'>Log in and unlock your world!</h3>
                    </div>
                    <form onSubmit={handleSumbit}>
                        <div className='pt-5'>
                            <label className="text-textPrimary text-base">Email <span className='text-red-500'>*</span></label>
                            <div className='pt-3 '>
                                <input type="email" onChange={HandleChange} className='w-96 h-10 p-2 rounded-lg focus:outline-gray-400' placeholder='email' />
                                {!errors.email ? <div><p className='invisible pt-2'>Required</p></div> :
                                    <div ><p className='text-red-500 pt-2'>{errors.email}</p></div>}

                            </div>
                        </div>
                        <div className='pt-1'>
                            <label className="text-textPrimary text-base">Password <span className='text-red-500'>*</span></label>
                            <div className='pt-3 absolute'>
                                <input type={PasswordVisible ? "text" : "password"} onChange={HandleChange} className='w-96 h-10 p-2 rounded-lg focus:outline-gray-400' placeholder='Password' />

                                {PasswordVisible ? (
                                    <span className="material-symbols-outlined absolute right-3 top-5 cursor-pointer text-gray-500 text-xl" onClick={togglePassword}> visibility
                                    </span>
                                ) : (
                                    <span className="material-symbols-outlined absolute right-3 top-5 cursor-pointer text-gray-500 text-xl" onClick={togglePassword}> visibility_off
                                    </span>
                                )
                                }

                            </div>


                            <div className='mt-14 flex items-center justify-between '>
                                {!errors.password ? <div><p className='invisible'>Required</p></div> :
                                    <div ><p className='text-red-500'>{errors.password}</p></div>}

                                <Link to="/forgotpassword"><p className='text-primary text-sm  pt-2'>Forgot Password</p></Link>
                            </div>
                        </div>
                        <div className='pt-5 text-center'>
                            <button type="submit" className="bg-primary w-36 text-white h-11 rounded-md ">Signin</button>
                        </div>
                    </form>
                    <div className='space-x-1 pt-4  text-center'>
                        <span className='text-textPrimary'>Create an account?</span>
                        <Link to="/" className='text-primary'>Signup</Link>
                    </div></div>
            </div>
        </main>

    )
}
