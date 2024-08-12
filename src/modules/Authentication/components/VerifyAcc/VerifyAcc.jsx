import React from 'react';
import logo from '../../../../assets/images/4 3.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function VerifyAcc() {
    let navigate = useNavigate()
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    let onSubmit = async(data) =>{
        try {
            let response = await axios.put("https://upskilling-egypt.com:3006/api/v1/Users/verify", data) 
            navigate('/login')
            toast.success(response.data.message)
            
          } catch (error) {
            console.log(error);
            toast.error("Verification failed. Please check your details and try again.");
          }         
    }

  return (<>
                <div className="auth-container">
                <div className="container-fluid bg-overlay">
                    <div className="row vh-100 justify-content-center align-content-center">
                        <div className="px-5 col-md-5 bg-white p-3 text-center rounded rounded-2">
                            <img className="w-50" src={logo} alt="" />
                            <h2 className="text-muted d-flex justify-content-start mt-3">Verify Account</h2>
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
                                        type="text"  // Changed to text to handle leading zeros in codes
                                        className="form-control"
                                        placeholder="code"
                                        aria-label="code"
                                        aria-describedby="basic-addon1"
                                        {...register('code', {
                                            required: 'Code is required',
                                            maxLength: {
                                                value: 6,
                                                message: 'Code must be at most 6 characters'
                                            }
                                        })}
                                    />
                                </div>
                                {errors.code && (
                                    <p className="d-flex justify-content-start text-danger">
                                        {errors.code.message}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="justify-content-center btn btn-success d-flex w-100 my-3"
                                >
                                    Verify
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  </>
  )
}
