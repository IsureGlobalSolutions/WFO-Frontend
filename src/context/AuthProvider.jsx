// context/AuthProvider.js
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  auth: {},
  setAuth: () => {},
  permissions: null,
  setPermissions: () => {},
  loadingPermissions: true,
  role: null,
  setRole: () => {},
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [permissions, setPermissions] = useState(null);
  const [role, setRole] = useState(null);
  const [loadingPermissions, setLoadingPermissions] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    const roleId = localStorage.getItem('roleId');
    const savedPermissions = localStorage.getItem('permissions');
    const savedRole = localStorage.getItem('role');

    if (token) {
      setAuth({ accessToken: token, roleId });
    }

    if (savedPermissions) {
      try {
        setPermissions(JSON.parse(savedPermissions));
      } catch (e) {
        console.error("Failed to parse permissions", e);
      }
    }

    if (savedRole) {
      try {
        setRole(JSON.parse(savedRole));
      } catch (e) {
        console.error("Failed to parse role", e);
      }
    }

    setLoadingPermissions(false);
  }, []);

  // Update both auth state and localStorage
  const updateAuth = (newAuth) => {
    if (newAuth?.accessToken) {
      localStorage.setItem('accessToken', newAuth.accessToken);
    }
    if (newAuth?.roleId) {
      localStorage.setItem('roleId', newAuth.roleId);
    }
    setAuth(newAuth);
  };

  // Update both permissions state and localStorage
  const updatePermissions = (newPermissions) => {
    setPermissions(newPermissions);
    localStorage.setItem('permissions', JSON.stringify(newPermissions));
  };

  // Update both role state and localStorage
  const updateRole = (newRole) => {
    setRole(newRole);
    localStorage.setItem('role', JSON.stringify(newRole));
  };

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth: updateAuth,
      permissions,
      setPermissions: updatePermissions,
      loadingPermissions,
      role,
      setRole: updateRole
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;