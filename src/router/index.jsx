import React, { useEffect } from 'react';
import {  BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// import { getAuthState } from '../utils/auth';
import config from './config';
import useAuth from '../hooks/useAuth';
import RequireAuth from './RequireAuth.jsx';
import PageNotFound from '../component/pages/PageNotFound/PageNotFound';

const CustomRoute = ({ loginRequired = true, layout: Layout, component: Component }) => {
  
const {auth}=useAuth()

return (
  <Layout>
    <Component />
  </Layout>
);
  
};

const AppRoutes = () => {

const loginRequiredPaths = config.filter((item)=>item.loginRequired===true)
console.log("🚀 ~ AppRoutes ~ loginRequiredPaths:", loginRequiredPaths)
const withoutLogin = config.filter((item)=>item.loginRequired===false)
  return (

<BrowserRouter> <Routes>
    {withoutLogin.map(route => (
      <Route key={route.path} path={route.path} element={<CustomRoute {...route} />} />
    ))}
    <Route element={<RequireAuth/>}>
    {loginRequiredPaths.map(route => (
      <Route key={route.path} path={route.path} element={<CustomRoute {...route}/>} />
    ))}
    </Route>
    <Route path="*" element={<PageNotFound/>} />
  </Routes>
</BrowserRouter>
    
   


  );
};

export default AppRoutes;
