import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Components/Loading';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import useToken from '../Hooks/useToken';
import './Sign.css'
const SignIn = () => {
    const [hide,setHide]=useState(false)
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);
    const [nuser, nloading, nerror] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, perror] = useSendPasswordResetEmail(
        auth
    );
    const [email, setEmail] = useState()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setEmail(data.email)
        signInWithEmailAndPassword(data.email, data.password)

    };

    const [token] = useToken(user || guser || nuser || fuser)
    const navigate = useNavigate()
    const location = useLocation()
    let signInError;

    let from = location.state?.from?.pathname || '/'
    useEffect(() => {
        if (token) {
            console.log(user)
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])
    if (gloading || loading || nloading || floading) {
        return <Loading></Loading>
    }




    if (gerror || error || perror) {
        signInError = <p className='text-red-500'><small>{error?.message || gerror?.message || perror?.message}</small></p>
    }

    console.log(email)
    const resetPassword = async () => {


        if (user) {
            await sendPasswordResetEmail(user);
            toast('Sent email');

        }
        else {
            toast.error('Please enter your email')

        }
    }

    return (
        <div>
            <div className='flex justify-center bg-accent items-center h-screen'>


                <div class="rounded-xl flex-shrink-0 w-full max-w-sm  bg-secondary border border-primary ">

                    <div className='text-center mt-5 py-5 w-full border-b border-primary rounded-t-lg  '>
                        <h1 className='text-4xl font-bold text-primary font-Goldman title '>CHILL</h1>
                        <p className='text-white '>Enjoy the world of entertainment</p>
                    </div>
                    <div class="card-body  ">


                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className='flex gap-3'>
                                <label className="label">
                                    <span className="label-text text-xl"><i class="fa-solid fa-user"></i></span>
                                </label>
                                <input


                                    type="email"
                                    placeholder="Enter Email"
                                    className="bg-secondary px-2 text-white"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                            </div>
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>

                            <hr className='bg-secondary' />
                            <div className='flex items-center gap-3 mt-5'>
                                <label className="label">
                                    <span className="label-text text-xl"><i class="fa-solid fa-lock"></i></span>
                                </label>
                                <input
                                    type={!hide?'password':'text'}
                                    placeholder="Enter password"
                                    className="bg-secondary px-2 text-white"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <p className='cursor-pointer' onClick={()=>setHide(!hide)}>{
                                   !hide? <i class="fa-solid fa-eye-slash"></i>:
                                    <i class="fa-solid fa-eye"></i>
                                }
                                
                                </p>
                            </div>
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>

                            <hr className='bg-secondary mb-5' />

                            {signInError}

                            <input className='py-3 rounded btn-primary w-full max-w-xs  text-black font-bold uppercase' type="submit" value="Sign In" />
                        </form>
                         <Link to='/signup' className=' text-center py-3 rounded btn-secondary w-full max-w-xs  text-primary border border-primary font-bold uppercase'>Sign Up</Link> 
                        {/* <p>Forget Password ? <Link to='' 
                         onClick= {resetPassword}
                        className='text-cyan-400'><small>Reset Password</small></Link> </p> */}
                        <div class="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='btn btn-glass hover:btn-accent'>Continue with Google</button>
                        {/* <button className='btn btn-glass hover:btn-accent'>Continue with Github</button> */}
                        {/* <button onClick={() => signInWithFacebook()} className='btn btn-glass hover:btn-accent'>Continue with Facebook</button> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignIn;