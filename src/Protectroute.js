import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Protectroute = ({ Component }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate('/signin', { replace: true }); 
    }
  }, [isAuthenticated, navigate]);
  // useEffect(() => {
  //   if (isAuthenticated === true) {
  //     navigate('/dashboard', { replace: true });
  //   }
  // }, [isAuthenticated, navigate]);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <Component /> : null;
}

export default Protectroute;
