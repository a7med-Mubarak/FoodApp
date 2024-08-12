import React from 'react';
import logo from '../../../../assets/images/4 3.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Login({saveLoginData}) {
    let navigate = useNavigate()
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let onSubmit = async (data) => {
        try{
            let Response = await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Login',data);
            localStorage.setItem("token", Response.data.token);
            saveLoginData();
            toast.success("Login successfully")
            navigate("/dashboard")
        } catch (error){
            toast.error(error.response.data.message);
        }
    };

    const [isPasswordVisible,setIsPasswordVisible] = React.useState(false);


    return (
        <>
            <div className="auth-container">
                <div className="container-fluid bg-overlay">
                    <div className="row vh-100 justify-content-center align-content-center">
                        <div className="px-5 col-md-5 bg-white p-3 text-center rounded rounded-2">
                            <img className="w-50" src={logo} alt="" />
                            <h2 className="text-muted d-flex justify-content-start mt-3">Log In</h2>
                            <p className="justify-content-start d-flex text-black-50 mb-4">
                                Welcome Back! Please enter your details
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group mb-2">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        aria-label="Email"
                                        aria-describedby="basic-addon1"
                                        {...register('email', {
                                            required: 'Email Is Required',
                                            pattern: {
                                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                                                message: 'Email Should Be Valid Mail',
                                            },
                                        })}
                                    />
                                    
                                </div>
                                {errors.email && (
                                    <p className="d-flex justify-content-start text-danger">
                                        {errors.email.message}
                                    </p>
                                )}

                                <div className="input-group mb-2 mt-4">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-key" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type={isPasswordVisible? "text" : "password"}
                                        className="form-control"
                                        placeholder="Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                        {...register('password', {
                                            required: 'Password Is Required',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters',
                                            },
                                        })}

                                    />
                                        <button
                                         onMouseDown={(e) => {
                                            e.preventDefault();
                                         }}
                                         onMouseUp={(e) => {
                                            e.preventDefault()
                                         }}
                                        type='button' className="input-group-text" id="basic-addon1" onClick={()=>setIsPasswordVisible((prev)=> !prev)}>
                                            <i className={`fa ${isPasswordVisible?"fa-eye-slash": "fa-eye"}`} aria-hidden="true"></i>
                                        </button>
                                </div>
                                {errors.password && (
                                    <p className="d-flex justify-content-start text-danger">
                                        {errors.password.message}
                                    </p>
                                )}

                                <div className="links d-flex justify-content-between">
                                    <Link
                                        to="/register"
                                        className="text-decoration-none text-muted"
                                    >
                                        Register Now?
                                    </Link>
                                    <Link
                                        to="/forgetPass"
                                        className="text-success text-decoration-none"
                                    >
                                        Forget Password?
                                    </Link>
                                </div>
                                <button
                                    type="submit"
                                    className="justify-content-center btn btn-success d-flex w-100 my-3"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
