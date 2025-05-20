import  { lazy } from 'react';
import PropTypes from 'prop-types';
import PublicLayout from '../component/plugins/PublicLayout';
import LoginLayout from '../component/plugins/LoginLayout';
import '../App.css';
import Dashboardlayout from '../component/plugins/Dashboardlayout';

import AddUserDetail from '../component/UserManagement/AddUser/AddUserDetail';
const AddUser =lazy(()=>import("../component/UserManagement/AddUser/AddUser"))
const EditEmployee =lazy(()=>import("../component/UserManagement/AddUser/UpdateEmployee.jsx"))
const WfoDashboardLayout =lazy(()=>import("../component/plugins/WfoDahboardLayout/WfoDashboardLayout"))
const LandingPage =lazy(()=>import("../component/pages/landingScreens/LandingPage"))
const LoginScreen =lazy(()=>import(".././app/signin/page"))
// const SignupScreen =lazy(()=>import("../pages/signup/Signup"))
const Dashboard =lazy(()=>import("../app/(sharedLayout)/dashboard/Dashboard"))
const About = lazy(()=>import("../component/pages/aboutpage/About"))
// const ForgotPassword =lazy(()=>import("../pages/ForgotPassword/ForgotPassword.jsx"))
const CheckOut =lazy(()=>import("../component/pages/checkout/CheckOut"))
// const ResetPassword =lazy(()=>import("../pages/ResetPassword/ResetPassword.jsx"))
const ContactUs =lazy(()=>import("../component/pages/contact/Contact"))
const ServicesDetail =lazy(()=>import("../component/pages/services/servicesdetail/ServicesDetail"))
const ServiecesList =lazy(()=>import("../component/pages/services/ServiecesList"))
const Pricing = lazy(()=>import("../component/pages/pricing/Pricing"))
const Addjobtitle= lazy(()=>import("../component/adminside/Jobtitle/JobtitleAPI"))
const Jobtitlelist= lazy(()=>import("../component/adminside/Jobtitle/JobtitleList"))
const  Addemployeetype = lazy(()=>import("../component/adminside/employeetype/Employtype"))
const Employeetypoelist =lazy(()=>import("../component/adminside/employeetype/Employeelist"))
const Adddepartment =lazy(()=>import("../component/adminside/department/Adddepartment"))
const Departmentlist =lazy(()=>import("../component/adminside/department/Departmentlist"))
const Addsubdepartment =lazy(()=>import("../component/adminside/sub-department/Addsubdepartment"))
const Subdepartmentlist =lazy(()=>import("../component/adminside/sub-department/Subdepartmentlist"))
const Addproject =lazy(()=>import("../component/adminside/project/Addproject"))
const Projectlist =lazy(()=>import("../component/adminside/project/Projectlist"))
const Addteam =lazy(()=>import("../component/adminside/team/Addteam"))
const Teamlist =lazy(()=>import("../component/adminside/team/Teamlist"))
const Estimation =lazy(()=>import("../component/estimationdesign/estimationwithapi/Estimation"))
const EstimationReport =lazy(()=>import("../component/estimationdesign/estimationreport/EstimationReport"))
const Costing =lazy(()=>import("../component/dashbored/costing/CostingReport"))
const AllUsers=lazy(()=>import("../component/UserManagement/AllUsers"))
const UserDetail=lazy(()=>import("../component/UserManagement/UserDetail/UserDetail"))
const RoleList=lazy(()=>import("../component/UserManagement/RoleList"))
const AddRole=lazy(()=>import("../component/UserManagement/AddRole"))
const forgetpassword=lazy(()=>import("../component/ForgetPassword/index.jsx"))
const resetForgetPassword=lazy(()=>import("../component/ResetForgetPassword/index.jsx"))
const WfoDahboard=lazy(()=>import("../component/plugins/WfoDahboardLayout/WfoDashboardLayout"))
const SignUpScreen=lazy(()=>import("../component/signup/index.jsx"))
const SuperDashboard=lazy(()=>import("../app/(sharedLayout)/dashboard/SuperDashboard"))






const 
config = [ 
  {
  path: '/',
  loginRequired: false,
  layout: PublicLayout,
  component: LandingPage
},
{
  path: '/signin',
  loginRequired: false,
  layout: LoginLayout,
  component: LoginScreen
},
{
  path: '/signup',
  loginRequired: false,
  layout: LoginLayout,
  component: SignUpScreen
},

{
  path: '/ContactUs',
  loginRequired: false,
  layout: PublicLayout,
  component:ContactUs
}
,
{
  path: '/forgetpassword',
  loginRequired: false,
  layout: LoginLayout,
  component:forgetpassword
}
,
{
  path: '/resetforgetpassword/:id*',
  loginRequired: false,
  layout: LoginLayout,
  component:resetForgetPassword
}
,
{
  path: '/About',
  loginRequired: false,
  layout: PublicLayout,
  component: About,
},
{
  path: '/CheckOut',
  loginRequired: false,
  layout: PublicLayout,
  component: CheckOut,
},
{
  path: '/ServicesDetail',
  loginRequired: false,
  layout: PublicLayout,
  component:ServicesDetail
}
,
{
  path: '/ServiecesList',
  loginRequired: false,
  layout: PublicLayout,
  component:ServiecesList
}
,
{
  path: '/Pricing',
  loginRequired: false,
  layout: PublicLayout,
  component:Pricing
},
{
  path: '/SuperAdminDashboard',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:SuperDashboard
},

{
  path: '/dashboard',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component: Dashboard
},
{
  path: '/addjobtitle',
  loginRequired: true,
  layout: Dashboardlayout,
  component:Addjobtitle,
}
,
{
  path: '/jobtitlelist',
  loginRequired: true,
  layout: Dashboardlayout,
  component:Jobtitlelist,
}
,
{
  path: '/employeetype',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:Addemployeetype,
}

,
{
  path: '/department',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:Adddepartment,
},
{
  path: '/subdepartment',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:Addsubdepartment,
}

,
{
  path: '/project',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:Addproject,
}

,
{
  path: '/team',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:Addteam,
},
{
  path: '/UserDetail',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:UserDetail,
},
{
  path: '/employeesdetail',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:AllUsers,
}
,
{
  path: '/rolesdetails',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:RoleList,
}
,
{
  path: '/AddEmployee',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:AddUser,
}
,
{
  path: '/editEmployee',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:EditEmployee,
}
,
{
  path: '/estimationdetails',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:Estimation,
}
,
{
  path: '/estimationreport',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:EstimationReport,
}
,
{
  path: '/costing',
  loginRequired: true,
  layout: WfoDashboardLayout,
  component:Costing,
}
];

config.propTypes = {
  path: PropTypes.string.isRequired,
  loginRequired: PropTypes.bool,
  layout: PropTypes.elementType.isRequired,
  component: PropTypes.elementType.isRequired
};

export default config;
