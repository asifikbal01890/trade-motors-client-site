import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';
import loginImg from '../../img/auth/login.jpg';
import './Login.css';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, {replace: true});
    }

    const handleLogin = data => {
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                toast('Login Successfully');
            })
            .catch(error => {
                setLoginError(error.message);
            });
    }

    return (
        <div className='flex justify-center items-center h-[900px] lg:w-[1000px] w-full mx-auto '>
            <div className='flex justify-center items-center login-shadow'>
                <div className='hidden md:flex'>
                    <div className='relative login-bg'>
                        <img src={loginImg} alt="" className='h-[30rem] w-[25rem]' />
                    </div>
                </div>
                <div>
                    <div className=' w-[20rem] px-7 '>
                        <div className='text-center'>
                            <img src="https://svgsilh.com/svg/3179431.svg" alt="" className='w-[6rem] login-text mx-auto ' />
                            <h2 className='text-center text-xl font-[Oswald] uppercase login-text'>Trade Motors</h2>
                        </div>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control w-full my-12 mb-2.5">
                                <input {...register("email", { required: "Email Address is required" })} placeholder="Your email" type="email" className="w-full outline-none border-b-2 border-l-slate-800 rounded-none focus:border-b-2 focus:border-primary" />
                                {errors.email && <p role="alert" className='text-red-700 '>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full mt-10">
                                <input {...register("password", {

                                    required: "Password is required",
                                    minLength: { value: 6, message: "Passwords must be at least 6 characters" }

                                })} type="password" placeholder='Password' className="w-full outline-none border-b-2 border-l-slate-800 rounded-none focus:border-b-2 focus:border-primary" />
                                {errors.password && <p role="alert" className='text-red-700 '>{errors.password?.message}</p>}
                                {/* <p className='text-[10px] pt-[2px]'>Forgot Password?</p> */}
                            </div>

                            <input className='btn btn-primary rounded-none w-full mt-4' value="Login" type="submit" />
                            {loginError && <p className='text-red-700 '>{loginError}</p>}
                        </form>
                        <p className='text-xs mt-2.5 mb-7 flex justify-between'><Link className='text-primary' to={'/signUp'}>Register</Link> <span>Forgot your password?</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;