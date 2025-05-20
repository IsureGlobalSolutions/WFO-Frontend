import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
// import Dashboredcom from '../../app/(sharedLayout)/Dashboredcom';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, validationErrors } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [invalidUsername, setInvalidUsername] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const handleLogin = {
      username: email,
      password,
    };
  
    try {
      const loginResult = await dispatch(loginUser(handleLogin)).unwrap();
      console.log("🚀 ~ loginResult:", loginResult);
  
      // Clear form
      setEmail('');
      setPassword('');
  
      if (loginResult.roleId) {
        const permissionResult = await dispatch(getEmployRolePermissionById(loginResult.roleId)).unwrap();
        console.log("🚀 ~ permissionResult:", permissionResult);
        
        if (permissionResult.permissions) {
          setPermissions(permissionResult.permissions.userPermissions || []);
        }
      }
  
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      
      if (error.validationErrors && error.validationErrors.Username) {
        setInvalidUsername(true);
      } else {
        setInvalidUsername(false);
      }
  
      if (error.message === 'Access Denied! Invalid credentials') {
        console.log('Invalid username or password');
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      
      <div className="row g-3">
        <div className="col-lg-12">
          <div className="aai-form-container">
            <div className='form-group'>
              <label htmlFor='username' className='text-in'>
                User name
              </label>
              <br />
              <input
                type="text"
                className="form-control shadow-none mt-3"
                placeholder=" username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="aai-form-container position-relative">
            <div className='form-group'>
              <label htmlFor='username' className='text-in'>
                Password
              </label>
              <br />
              <input
                type="text"
                className="form-control shadow-none mt-3"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="aai-form-eye">
              {/* Your SVG code */}
            </button>
          </div>
        </div>
        <div className="col-lg-12 mb-2">
          <div className="aai-form-container d-flex gap-3 position-relative">
            <input type="checkbox" className="shadow-none" />
            <label className="aai-form-check-label">
                Remember me
                            </label>
          </div>
        </div>
        <div className="col-lg-12">
        <div className="d-grid">
        <button className="aai-btn btn-pill-solid" type='submit' disabled={loading} >
          {loading ? 'Loading.......' : 'Login'}
        </button>

        {error && !invalidUsername && (
          <div className='alert alert-danger ' style={{ backgroundColor: "red", color: 'red' }}>
            {error}
          </div>
        )}

        {invalidUsername && (
          <div className='alert alert-danger ' style={{ backgroundColor: "red", color: 'red' }}>
            Invalid username
          </div>
        )}
      </div>
        </div>
      </div>
      {/* <div className="text-center mt-3">
        <p className="aai-form-support-text">
          Already have an account?{" "}
          <a
            href="/signin"
            className="aai-form-support-link text-decoration-underline"
          >
            Sign Up
          </a>
        </p>
      </div> */}
    </form>
  );
}

export default SignIn;
