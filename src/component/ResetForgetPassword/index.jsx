// File: src/pages/ResetPassword.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../signin/login.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { ReactComponent as EyeSlashIcon } from '../../assets/svg/ic_EyeClosed_24px.svg';
import { ReactComponent as Eyeicon } from '../../assets/svg/ic_EyeOpen_24px.svg';
import { ReactComponent as Img1 } from "../../assets/svg/Loginlogo.svg";
import useAuth from "../../hooks/useAuth";
import { resetForgetPasswordApi } from '../../redux/features/auth/authSlice';
import toast from 'react-hot-toast';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [passwordsMismatch, setPasswordsMismatch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setAuth } = useAuth();
const {id}=useParams()
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setInvalidPassword(false);
    setPasswordsMismatch(false);

    if (!password || !confirmPassword) {
      setInvalidPassword(true);
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setPasswordsMismatch(true);
      setIsLoading(false);
      return;
    }

    // Example payload
    const payload = { newPassword: password,confirmPassword,applicationUserId:id };

    // Simulate API call (replace with real resetPassword thunk/action)
    dispatch(resetForgetPasswordApi(payload))
      .then((result) => {
        if (result.payload.isSuccess) {
        toast.success(result.payload.alertMessage);
           setPassword('');
      setConfirmPassword('');
      navigate('/signin');
        }
      })
  
  };

  return (
    <div className='signinpage'>
      <div className="page-body auth px-xl-4" style={{ minHeight: '100vh' }}>
        <div className="row d-flex justify-content-between align-items-center" style={{ height: '100%' }}>
          <div className="col-lg-6 col-sm-6 d-flex justify-content-center">
            <div style={{ maxWidth: "32rem" }}>
            <Link to="/" className="logo-dark ">
                            <Img1/>
                            </Link> 
              <div className="mb-5 mt-3">
                <h2 className="text1">Reset Password:</h2>
              </div>
              <ul className="list-unstyled mb-5">
                <li className="mb-4">
                  <span className="d-block mb-1 fw-light text2">Secure Reset</span>
                  <span className="color-600 text3">Enter your new password and confirm it</span>
                </li>
              </ul>
              <div>
                <FaFacebookSquare style={{ color: '#ccc', fontSize: '20px' }} />
                <FaSquareTwitter style={{ color: '#ccc', fontSize: '20px', marginLeft: '20px' }} />
                <IoLogoLinkedin style={{ color: '#ccc', fontSize: '20px', marginLeft: '20px' }} />
                <FaSquareGithub style={{ color: '#ccc', fontSize: '20px', marginLeft: '20px' }} />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 d-flex justify-content-center">
            <div className="shadow-sm p-4 signin">
              <form onSubmit={handleSubmit} style={{ padding: "40px" }}>
                <div className="col-12 text-center mb-4">
                  <h3 className='fw-semibold m-0'>Reset Password</h3>
                  <span className="textmuted">Create a new password for your account</span>
                </div>

                {[{
                  label: "New Password",
                  value: password,
                  setValue: setPassword,
                  id: "password"
                }, {
                  label: "Confirm Password",
                  value: confirmPassword,
                  setValue: setConfirmPassword,
                  id: "confirmPassword"
                }].map(({ label, value, setValue, id }) => (
                  <div key={id} className="col-12 mb-3">
                    <label className="form-label formtext">{label}</label>
                    <div className="position-relative">
                      <input
                        id={id}
                        className={`form-control p-3 ${invalidPassword ? 'is-invalid' : ''}`}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        maxLength="50"
                        placeholder={`Enter ${label.toLowerCase()}`}
                      />
                      {value && (
                        <span
                          onClick={() => setShowPassword(prev => !prev)}
                          style={{
                            position: 'absolute',
                            right: '15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                            color: '#98A2B3',
                            fontSize: '20px'
                          }}
                        >
                          {showPassword ? <Eyeicon /> : <EyeSlashIcon />}
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {passwordsMismatch && <div className="text-danger">Passwords do not match</div>}

                <div className='col-12 pt-3'>
                  <button type="submit" className="signinbutton w-100" disabled={isLoading}>
                    {isLoading ? (
                      <><span className="spinner-border spinner-border-sm me-2"></span>Sending...</>
                    ) : 'Reset Password'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}
    </div>
  );
}

export default ResetPassword;
