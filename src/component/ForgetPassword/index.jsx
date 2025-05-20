import React, { useState, useEffect } from 'react';
import { forgetPasswordApi, loginUser } from '../../redux/features/auth/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../signin/login.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";

import useAuth from "../../hooks/useAuth";
import {ReactComponent as Img1} from "../../assets/svg/Loginlogo.svg"
import toast from 'react-hot-toast';
function SigninCom() {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [isLoading, setisLoading] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setInvalidEmail(false);
  };
 

  const handleSubmit = (e) => {
    setisLoading(true)
    e.preventDefault();
    if (email.trim() === '') {
      setInvalidEmail(true);
    }
   
    if (email.trim() !== '' ) {
      console.log('Form submitted:', email);
    }
    let handleLogin = {
      email,
      clientBaseURL:`${process.env.REACT_APP_FRONTEND_URL}/resetforgetpassword/`,
      
    };
    dispatch(forgetPasswordApi(handleLogin))
      .then((result) => {
        if (result.payload.isSuccess) {
          setEmail('');
          toast.success(result?.payload?.alertMessage);
         
                    navigate('signin' , {replace: true});
                    setisLoading(false)
        } else {
          if (result.payload.alertMessage) {
            alert(result.payload.alertMessage);
            setisLoading(false)

          } 
        }
      })
      .catch((error) => {
        setisLoading(false)
         console.log(error , "signinerror");
      });
  };
  return (
    <div>
      <div className='signinpage' >
        <div class="page-body auth px-xl-4 " style={{ minHeight: '100vh'}}>
           <div className="row d-flex justify-content-between align-items-center" style={{ height: '100%' }}>
             <div className="col-lg-6 col-sm-6 d-flex justify-content-center">
                <div  style={{ maxWidth: "32rem" }}>
                <Link to="/" className="logo-dark ">
                <Img1/>
                </Link>                  
                  <div className="mb-5 mt-3 ">
                    <h2 className=" text1">Resource Management:</h2>
                  </div>
                  <ul className="list-unstyled mb-5">
                    <li className="mb-4">
                      <span className="d-block mb-1 fw-light text2">All-in-one tool</span>
                      <span className="color-600 text3">Complete Organization Management System</span>
                    </li>
                    <li>
                      <span className="d-block mb-1 fw-light text2">Easily add &amp; manage services</span>
                      <span className="color-600 text3">It brings together your tasks, Departments, Designations, Projects, Teams and more</span>
                    </li>
                  </ul>
                  <div className="mb-2 ">
                    <span href="#" className="me-3 color-600 fw-light text5">Home</span>
                    <span href="#" className="me-3 color-600 fw-light text5">About Us</span>
                    <span href="#" className="me-3 color-600 fw-light text5">FAQS</span>
                  </div>
                  <div>
                    <FaFacebookSquare style={{ color: '#ccc', fontSize: '20px' }} />
                    <FaSquareTwitter style={{ color: '#ccc', fontSize: '20px', marginLeft: '20px' }} />
                    <IoLogoLinkedin style={{ color: '#ccc', fontSize: '20px', marginLeft: '20px' }} />
                    <FaSquareGithub style={{ color: '#ccc', fontSize: '20px', marginLeft: '20px' }} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6  d-flex justify-content-center"
              >

                <div className="shadow-sm  p-4 signin">
                  <form className="row g-3 needs-validation" novalidate onSubmit={handleSubmit} style={{
                    padding:"40px"
                  }}>
                    <div className="col-12 text-center mb-2">
                      <h3 className='fw-semibold'>Forget Password ?</h3>
                      <span className="textmuted">
                     Want to reset your password
                        </span>
                    </div>
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label formtext">Email </label>
                        <input
                          type="email"
                          className={`form-control  p-3 form-control-lg ${invalidEmail ? 'is-invalid' : ''}`}
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="Enter your email here"
                        />
                      </div>
                      {invalidEmail && <div className="invalidfeedback">Email required?</div>}
                    </div>
                  
                    
                      {isLoading ? (
              <>
                             <div className='col-12 pt-3'>
           <button  className="signinbutton  w-100"  disabled>
  <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
  Loading...
</button>
</div>
              </>
            ) : (
               <div className='col-12 pt-3'>
                 <button type="submit" className="signinbutton w-100">
               Send Email
               </button>
               </div>
            )}
                
                  </form>
                </div>
              </div>
            </div>
    
        </div>
        <div className="modal fade" id="SettingsModal" tabIndex="-1">
        </div>
        <a className="page-setting" href="#" title="Settings" data-bs-toggle="modal" data-bs-target="#SettingsModal"><i className="fa fa-gear text-light"></i></a>
      </div>
      {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
    </div>
  );
}

export default SigninCom;
