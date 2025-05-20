
// UseNavigateInterpretor.js
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch , useSelector } from 'react-redux';
import { signout } from '../src/redux/features/auth/authSlice';

const UseNavigateInterpretor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tokenExpirationTime = useSelector((state) => state.auth.tokenExpirationTime);

  useEffect(() => {
    if (!tokenExpirationTime) return;
    const currentTime = new Date().getTime();
    const timeUntilExpiration = tokenExpirationTime - currentTime;
    if (timeUntilExpiration <= 0) {
      handleSignout();
    } else {
      const timeoutId = setTimeout(handleSignout, timeUntilExpiration);
      return () => clearTimeout(timeoutId);
    }
  }, [tokenExpirationTime]);

  const handleSignout = async () => {
    try {
      await dispatch(signout()).unwrap();
      // dispatch(clearAuthState());
      toast.error('Session expired. Please sign in again.');
      navigate('/signin');
    } catch (error) {
      console.error('Error during signout', error);
      toast.error('Failed to sign out. Please try again.');
      navigate('/signin');
    }
  };

  return null; // This component does not render anything
};

export default UseNavigateInterpretor;

