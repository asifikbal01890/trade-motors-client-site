import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';
import loginImg from '../../img/auth/login.jpg'



const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, googleLogIn, updateUser } = useContext(AuthContext);
    const [signUpError, setSingUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [btnState, setBtnState] = useState(false);
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if (token) {
        navigate('/');
    }

    const handleSignUp = data => {
        console.log(data);
        setSingUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('Sign Up Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => setSingUpError(err));
            })
            .catch(error => setSingUpError(error));
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogIn = () => {
        setSingUpError('')
        googleLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                const role = false;
                saveUser(user.displayName, user.email, role);
                toast('Sign Up Successfully');
            })
            .catch(e => setSingUpError(e.message));
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://trade-motors-server-site.vercel.app/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }





    const handleBtnClick = () => {
        setBtnState(btnState => !btnState);
    }

    const btnToggle = btnState ? 'Seller Mood' : 'Buyer Mood';

    return (
        <div className='flex justify-center items-center h-[900px] lg:w-[1000px] w-full mx-auto'>
            <div className='flex justify-center items-center login-shadow'>
                <div className='hidden md:flex'>
                    <div className='relative login-bg'>
                        <img src={loginImg} alt="" className='h-[37rem] w-[29rem]' />
                    </div>
                </div>
                <div>
                    <div className=' w-[25rem] px-7 '>
                        <div className='text-center'>
                            <img src="https://svgsilh.com/svg/3179431.svg" alt="" className='w-[6rem] login-text mx-auto ' />
                            <h2 className='text-center text-xl font-[Oswald] uppercase login-text'>Trade Motors</h2>
                        </div>
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control w-full my-7">
                                <input {...register("name", { required: "Enter your name" })} type="name" placeholder='Your name' className="w-full outline-none border-b-2 border-l-slate-800 rounded-none focus:border-b-2 focus:border-primary" />
                                {errors.name && <p role="alert" className='text-red-700 '>{errors.name?.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <input {...register("email", { required: "Email Address is required" })} type="email" placeholder='Your Email' className="w-full outline-none border-b-2 border-l-slate-800 rounded-none focus:border-b-2 focus:border-primary" />
                                {errors.email && <p role="alert" className='text-red-700 '>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full mt-7">
                                <input {...register("password", {

                                    required: "Password is required",
                                    minLength: { value: 6, message: "Passwords must be at least 6 characters" }

                                })} type="password" placeholder='New password' className="w-full outline-none border-b-2 border-l-slate-800 rounded-none focus:border-b-2 focus:border-primary" />
                                {errors.password && <p role="alert" className='text-red-700 '>{errors.password?.message}</p>}

                                <div className="form-control w-full mt-7 mb-3">
                                    <label className="cursor-pointer label">
                                        <span className="label-text font-medium">{btnToggle}</span>
                                        <input onClick={handleBtnClick} type="checkbox" className="toggle toggle-accent" {...register("role")} />
                                    </label>
                                </div>

                            </div>

                            <input className='btn btn-primary rounded-none w-full' value="Sign Up" type="submit" />
                            {signUpError && <p className='text-red-700 '>{signUpError}</p>}

                        </form>
                        <p className='text-xs mt-2.5 mb-4'>Already Have a Account? <Link className='text-primary hover:text-secondary' to={'/login'}>Please Login</Link> </p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleLogIn} className="btn btn-outline rounded-none btn-accent w-full mb-6 flex gap-2"><span className='text-2xl'><FcGoogle></FcGoogle></span> Sing In by Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;