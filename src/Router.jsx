import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import SigninContainer from './signin/container/SigninContainer';
import SignupContainer from './signup/container/SignupContainer';
import ForgotPassword from './signin/container/ForgotPassword';
import ChangePassword from './signin/container/ChangePassword';
import EmailVerification from './signup/container/EmailVerification';

const Router = createBrowserRouter([
    {
        path:"/",
        element:<SignupContainer />
    },
    {
        path:"/signup",
        element:<SignupContainer />
    },
    {
        path:"/Signin",
        element:<SigninContainer />
    },
    {
        path:"/forgotpassword",
        element:<ForgotPassword />
    },
    {
        path:"/changepassword",
        element:<ChangePassword />
    },
    {
        path:"/emailverify",
        element:<EmailVerification />
    }

]);


export default Router