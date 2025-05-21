import React, { useState, useEffect } from 'react';
// import { registerUser } from '../../redux/features/auth/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../signin/login.css';
import { ReactComponent as EyeSlashIcon } from '../../assets/svg/ic_EyeClosed_24px.svg';
import { ReactComponent as Eyeicon } from '../../assets/svg/ic_EyeOpen_24px.svg';
import { ReactComponent as Img1 } from "../../assets/svg/Loginlogo.svg";
import { Country, State } from 'country-state-city';
import Select from 'react-select';
import { signupUser } from '../../redux/features/auth/authSlice';
import toast from 'react-hot-toast';

function SignupCom() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    country: '',
    city: '',
    companyName: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Load countries on component mount
  useEffect(() => {
    const countryData = Country.getAllCountries().map(country => ({
      value: country.isoCode,
      label: country.name
    }));
    setCountries(countryData);
  }, []);

  // Load cities when country changes
  useEffect(() => {
    if (selectedCountry) {
      const cityData = State.getStatesOfCountry(selectedCountry.value).map(city => ({
        value: city.isoCode,
        label: city.name
      }));
      setCities(cityData);
      setSelectedCity(null);
      setFormData(prev => ({
        ...prev,
        city: ''
      }));
    }
  }, [selectedCountry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormData(prev => ({
      ...prev,
      country: selectedOption.label
    }));
    // Clear country error
    if (errors.country) {
      setErrors(prev => ({
        ...prev,
        country: ''
      }));
    }
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
    setFormData(prev => ({
      ...prev,
      city: selectedOption.label
    }));
    // Clear city error
    if (errors.city) {
      setErrors(prev => ({
        ...prev,
        city: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    // Create FormData object
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    dispatch(signupUser(formDataObj))
      .then((result) => {
        setIsLoading(false);
        if (result.payload?.isSuccess) {
          navigate('/signin', { replace: true });
          toast.success(result.payload?.alertMessage || 'Registration successful! Please login.');
        } else {
          toast.error(result.payload?.alertMessage || 'Registration failed',{duration: 5000});
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Registration error:', error);
        alert('An error occurred during registration');
      });
  };

  return (
    <div>
      <div className='signinpage'>
        <div class="page-body auth px-xl-4" style={{ minHeight: '100vh' }}>
          <div className="row d-flex justify-content-between align-items-center" style={{ height: '100%' }}>
            <div className="col-lg-6 col-sm-6 d-flex justify-content-center">
              <div style={{ maxWidth: "32rem" }}>
                <Link to="/" className="logo-dark ">
                  <Img1 />
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
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 d-flex justify-content-center">
              <div className="shadow-sm p-4 signin " style={{maxHeight:"90vh", overflowY:"auto"}}>
                <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit} style={{ padding: "40px" }}>
                  <div className="col-12 text-center mb-2">
                    <h1>Sign up</h1>
                    <span className="textmuted">
                    Welcome to HRWhizz - Your all-in-one HR management solution!
                    </span>
                  </div>

                  {/* First Name */}
                  <div className="col-md-6">
                    <label className="form-label formtext">First Name</label>
                    <input
                      type="text"
                      className={`form-control p-3 form-control-lg ${errors.firstName ? 'is-invalid' : ''}`}
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  </div>

                  {/* Last Name */}
                  <div className="col-md-6">
                    <label className="form-label formtext">Last Name</label>
                    <input
                      type="text"
                      className={`form-control p-3 form-control-lg ${errors.lastName ? 'is-invalid' : ''}`}
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                  </div>

                  {/* Email */}
                 <div className="col-12">
  <label className="form-label formtext">Email address</label>
  <input
    type="email"
    id="email_${Date.now()}"  // Unique ID each time
    className={`form-control p-3 form-control-lg ${errors.email ? 'is-invalid' : ''}`}
    value={formData.email}
    onChange={handleChange}
    placeholder="Type email here"
    name="email"
    autoComplete="new-email"  // Chrome-specific hint
    readOnly
    onFocus={(e) => {
      e.target.removeAttribute('readonly');
      // Additional measure - clear any autofilled data
      if (e.target.value !== formData.email) {
        e.target.value = '';
      }
    }}
  />
  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
</div>

                  {/* Password */}
                  <div className="col-md-6">
                    <label className="form-label formtext">Password</label>
                    <div className="position-relative">
                      <input
                        className={`form-control p-3 ${errors.password ? 'is-invalid' : ''}`}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      {formData.password && (
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
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>

                  {/* Confirm Password */}
                  <div className="col-md-6">
                    <label className="form-label formtext">Confirm Password</label>
                    <div className="position-relative">
                      <input
                        className={`form-control p-3 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                      />
                      {formData.confirmPassword && (
                        <span
                          onClick={() => setShowConfirmPassword(prev => !prev)}
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
                          {showConfirmPassword ? <Eyeicon /> : <EyeSlashIcon />}
                        </span>
                      )}
                    </div>
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                  </div>
<small className='m-0 text-danger'>* Passoword must be alteast 8 characters</small>
                  {/* Address */}
                  <div className="col-12">
                    <label className="form-label formtext">Address</label>
                    <input
                      type="text"
                      className={`form-control p-3 form-control-lg ${errors.address ? 'is-invalid' : ''}`}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Full address"
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </div>

                  {/* Phone Number */}
                  <div className="col-12">
                    <label className="form-label formtext">Phone Number</label>
                    <input
                      type="tel"
                      className={`form-control p-3 form-control-lg ${errors.phoneNumber ? 'is-invalid' : ''}`}
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone number"
                    />
                    {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                  </div>

                  {/* Country */}
                  <div className="col-md-6">
                    <label className="form-label formtext">Country</label>
                    <Select
                      options={countries}
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      className={`${errors.country ? 'is-invalid' : ''}`}
                      placeholder="Select country"
                    />
                    {errors.country && <div className="invalid-feedback d-block">{errors.country}</div>}
                  </div>

                  {/* City */}
                  <div className="col-md-6">
                    <label className="form-label formtext">Province </label>
                    <Select
                      options={cities}
                      value={selectedCity}
                      onChange={handleCityChange}
                      isDisabled={!selectedCountry}
                      className={`${errors.city ? 'is-invalid' : ''}`}
                      placeholder={selectedCountry ? "Select city" : "Select country first"}
                    />
                    {errors.city && <div className="invalid-feedback d-block">{errors.city}</div>}
                  </div>

                  {/* Company Name */}
                  <div className="col-12">
                    <label className="form-label formtext">Company Name</label>
                    <input
                      type="text"
                      className={`form-control p-3 form-control-lg ${errors.companyName ? 'is-invalid' : ''}`}
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Company name"
                    />
                    {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                  </div>

                  {/* Submit Button */}
                  <div className='col-12 pt-3'>
                    {isLoading ? (
                      <button className="signinbutton w-100" disabled>
                        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Creating account...
                      </button>
                    ) : (
                      <button type="submit" className="signinbutton w-100">
                        Create Account
                      </button>
                    )}
                  </div>

                  {/* Login Link */}
                  <div className="col-12 text-center mt-3">
                    <span className="textmuted">
                      Already have an account? <Link to="/signin" className="text-primary">Login</Link>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupCom;