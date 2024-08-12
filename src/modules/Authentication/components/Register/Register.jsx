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
            let Response = await axios.post('https://upskilling-egypt.com:3006/api/v1/Users/Register',data);
            toast.success("Register successfully")
            navigate("/verifyacc")
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
                        <div className="w-75 px-5 col-md-5 bg-white p-3 text-center rounded rounded-2">
                            <img className="w-50" src={logo} alt="" />
                            <h2 className="text-muted d-flex justify-content-start mt-3">Register</h2>
                            <p className="justify-content-start d-flex text-black-50 mb-4">
                            Welcome Back! Please enter your details
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)}>


<div className='d-flex'> 


                      <div className='w-50'>
                                  <div className=" input-group mb-2 ">
                                    <span className=" input-group-text" id="basic-addon1">
                                        <i className="fa fa-mobile" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type="string"
                                        className="form-control "
                                        placeholder="UserName"
                                        aria-label="UserName"
                                        aria-describedby="basic-addon1"
                                        {...register('userName', {
                                            required: 'UserName Is Required',
                                            pattern: {
                                                value: "",
                                                message: 'User Should Be Valid String',
                                            },
                                        })}
                                    />
                                    
                                </div>

                                <div className="input-group mb-2 mt-4">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type="string"
                                        className="form-control"
                                        placeholder="Country"
                                        aria-label="Country"
                                        aria-describedby="basic-addon1"
                                        {...register('country', {
                                            required: 'Country Is Required',
                                            pattern: {
                                                value: 10,
                                                message: 'country Should Be Valid String',
                                            },
                                        })}
                                    />
                                    
                                </div>

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


                      </div>







                        <div className='w-50 mx-5 '>
                            {/* Email Field */}
                                <div className="input-group mb-2 ">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Your E-mail"
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
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="PhoneNumber"
                                        aria-label="Phone"
                                        aria-describedby="basic-addon1"
                                        {...register('phoneNumber', {
                                            required: 'phoneNumber Is Required',
                                            pattern: {
                                                value: 11,
                                                message: 'phoneNumber Should Be Valid Number',
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
                                        type={isPasswordVisible? "text" : "password"}
                                        className="form-control"
                                        placeholder="confirmPassword"
                                        aria-label="confirmPassword"
                                        aria-describedby="basic-addon1"
                                        {...register('confirmPassword', {
                                            required: 'confirmPassword Is Required',
                                            minLength: {
                                                value: 6,
                                                message: 'confirmPassword must be at least 6 characters',
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
                    
                        </div>
  
</div>







                                







                              

                                {/* Links */}
                                <div className="links d-flex justify-content-end">
                                    <Link
                                        to="/login"
                                        className="text-success text-decoration-none"
                                    >
                                         Login Now?
                                    </Link>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="justify-content-center btn btn-success d-flex w-100 my-3"
                                >
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
