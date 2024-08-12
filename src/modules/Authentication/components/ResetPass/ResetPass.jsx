

import React from 'react';
import logo from '../../../../assets/images/4 3.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
    let navigate = useNavigate()
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let onSubmit = async (data) => {
        try{
            let Response = await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Reset',data);
            toast.success("successfully")
            navigate("/login")
            console.log("try");
            
        } catch (error){
          console.log(error);
          
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
                            <h2 className="text-muted d-flex justify-content-start mt-3"> Reset  Password</h2>
                            <p className="justify-content-start d-flex text-black-50 mb-4">
                              Please Enter Your Otp  or Check Your Inbox
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Email Field */}
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

                                    {/* Password Field */}
                                  <div className="input-group mb-2 mt-4">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-key" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type="string"
                                        className="form-control"
                                        placeholder="OTP"
                                        aria-label="otp"
                                        aria-describedby="basic-addon1"
                                        {...register('seed', {
                                            required: 'otp Is Required',
                                            minLength: {
                                                value: "4",
                                                message: 'OTP must be valid',
                                            },
                                        })}
                                    />
                                </div>
                                {errors.password && (
                                    <p className="d-flex justify-content-start text-danger">
                                        {errors.password.message}
                                    </p>
                                )}
                              
                                {/* Password Field */}
                                <div className="input-group mb-2 mt-4">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type={isPasswordVisible? "text" : "password"}
                                        className="form-control"
                                        placeholder="New Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                        {...register('password', {
                                            required: 'Password Is Required',
                                            
                                            pattern: {
                                              value: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$",
                                              message: 'The password must include at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 6 characters long.',
                                            }
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
                                
                                   {/* Password Field */}
                                 <div className="input-group mb-2 mt-4">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type={isPasswordVisible? "text" : "password"}
                                        className="form-control"
                                        placeholder="Confirm New Password"
                                        aria-label="Password"
                                        aria-describedby="basic-addon1"
                                        {...register('confirmPassword', {
                                            required: 'Confirm Password Is Required',
                                            minLength: {
                                                value: 6,
                                                message: 'Confirm Not Match Password',
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

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="justify-content-center btn btn-success d-flex w-100 my-4 py-2"
                                >
                                    Reset Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}