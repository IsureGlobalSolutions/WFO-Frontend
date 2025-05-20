import React, { useState, useEffect } from 'react';
import { getEmployRolePermissionById, loginUser } from '../../redux/features/auth/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { ReactComponent as EyeSlashIcon } from '../../assets/svg/ic_EyeClosed_24px.svg';
import { ReactComponent as Eyeicon } from '../../assets/svg/ic_EyeOpen_24px.svg';
import { ReactComponent as Signin } from "../../assets/svg/signinlogo.svg";
import useAuth from "../../hooks/useAuth";
import {ReactComponent as Img1} from "../../assets/svg/Loginlogo.svg"
import { setPermissions } from '../../redux/features/permissions/permissionsSlice';
function SigninCom() {
  const [email, setEmail] = useState('');
  const [invalidEmail, setInvalidEmail] = useState(false);
//  const [loading, setloading] = useState(second)
  const [password, setPassword] = useState('');
  const [isLoading, setisLoading] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth , setPermissions , setRole } = useAuth();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setInvalidEmail(false);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setInvalidPassword(false);
  };

  const handleSubmit = (e) => {
    setisLoading(true);
    e.preventDefault();
    
    // Validate form fields
    if (email.trim() === '') {
      setInvalidEmail(true);
    }
    if (password.trim() === '') {
      setInvalidPassword(true);
    }
    
    if (email.trim() !== '' && password.trim() !== '') {
      console.log('Form submitted:', email, password);
      
      let handleLogin = {
        username: email,
        password,
      };
      
      dispatch(loginUser(handleLogin))
        .then((result) => {
          console.log("🚀 ~ .then ~ result:", result);
          
          if (result.payload.isSuccess) {
            // Clear form fields
            setEmail('');
            setPassword('');
            
            // Set auth token
            const authtoken = result.payload.accessToken;
            setAuth({accessToken: authtoken});
            localStorage.setItem('authToken', authtoken);
            
            const role = result.payload.role;
            setRole(role);

            if (role === 1) { // Superadmin case
              console.log("User is Superadmin - navigating to dashboard" , role);
              navigate('/SuperAdminDashboard', {replace: true});
              setisLoading(false);
              return; // Exit early, no need for permission API call
            }
            const roleId = result.payload.roleId;

            if (roleId) {
              dispatch(getEmployRolePermissionById(roleId))
                .then((res) => {
                  console.log("🚀 ~ .then ~ res:", res);
                  setPermissions(res.payload);
                  navigate('/dashboard', {replace: true});
                })
                .catch((error) => {
                  console.error("Error fetching permissions:", error);
                  // Set permissions to null if there's an error
                  setPermissions(null);
                  navigate('/dashboard', {replace: true});
                })
                .finally(() => {
                  setisLoading(false);
                });
            } else {
              console.log("No roleId found - setting permissions to null");
              // Set permissions to null and navigate if no roleId
              setPermissions(null);
              navigate('/dashboard', {replace: true});
              setisLoading(false);
            }
          } else {
            if (result.payload.alertMessage) {
              alert(result.payload.alertMessage);
            }
            setisLoading(false);
          }
        })
        .catch((error) => {
          setisLoading(false);
          console.log(error, "signinerror");
        });
    } else {
      setisLoading(false);
    }
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
                      <h1>Sign in</h1>
                      <span className="textmuted">
                       Free access to <span className="headinghrwhiz">HRWhizz</span> dashboard
                        </span>
                    </div>
                    <div className="col-12">
                      <div className="mb-2">
                        <label className="form-label formtext">Email address</label>
                        <input
                          type="email"
                          className={`form-control  p-3 form-control-lg ${invalidEmail ? 'is-invalid' : ''}`}
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="Type email here"
                        />
                      </div>
                      {invalidEmail && <div className="invalidfeedback">Email required?</div>}
                    </div>
                    <div className="col-12">
                      <div className="">
                        <div className="form-lab d-flex justify-content-between">
                        <label className="form-label formtext">Password</label>
                        <label className="form-label formtextpassword" style={{cursor:'pointer'}} onClick={()=>navigate('/forgetpassword')}>Forgot?</label>
                        </div>
                        {/* <input
                          id="password"
                          className={`form-control  p-3  ${invalidPassword ? 'is-invalid' : ''}`}
                          value={password}
                          onChange={handlePasswordChange}
                          type="password"
                          maxLength="10"
                          placeholder="Enter the password"
                        /> */}
                      </div>
                      <div className="position-relative">
  <input
    id="password"
    className={`form-control p-3 ${invalidPassword ? 'is-invalid' : ''}`}
    value={password}
    onChange={handlePasswordChange}
    type={showPassword ? "text" : "password"}
    maxLength="10"
    placeholder="Enter the password"
  />
  
{/* <EyeSlashIcon/> */}
  {password && (
    <span
      onClick={() => setShowPassword(prev => !prev)}
      style={{
        position: 'absolute',
        right: '15px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#6c757d',
        fontSize: '20px',
        color:"#98A2B3"
      }}
    >
      {showPassword ? <Eyeicon /> : <EyeSlashIcon />}
    </span>
  )}
</div>


                      {invalidPassword && <div className="invalidfeedback mt-0 pt-0"> password required?</div>}
                    </div>
                    <div className="d-flex justify-content-end">
                      <div>
                        <small ><Link to={'/signup'}>Create new Account</Link> </small>
                      </div>
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
               Login now
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
