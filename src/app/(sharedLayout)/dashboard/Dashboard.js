import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Sidebar from "../../../component/sidebar/Sidebar";
import Project from "../../../component/project/Project";
import { Provider } from "react-redux";
import {store} from "../../../redux/store/store";
import Subdepartment from "../../../component/dashboredbox/Subdepartment";
import Team from "../../../component/dashboredbox/Team";
import Updatedashbored from "../../../component/dashbored/Updatedashbored";
import Estimation from "../../../component/estimationdesign/estimationwithapi/Estimation";
import EstimationReport from "../../../component/estimationdesign/estimationreport/EstimationReport";
import CostingReport from "../../../component/dashbored/costing/CostingReport";
import Jobtitle from "../../../component/adminside/Jobtitle/Jobtitle";
import Jobtitlelist from "../../../component/adminside/Jobtitle/JobtitleList";
import Adddepartment from "../../../component/adminside/department/Adddepartment";
import Addsubdepartment from "../../../component/adminside/sub-department/Addsubdepartment";
import Addproject from "../../../component/adminside/project/Addproject";
import Addteam from "../../../component/adminside/team/Addteam";
import Departmentlist from "../../../component/adminside/department/Departmentlist";
import Subdepartmentlist from "../../../component/adminside/sub-department/Subdepartmentlist";
import Projectlist from "../../../component/adminside/project/Projectlist";
import Teamlist from "../../../component/adminside/team/Teamlist";
import AllUsers from "../../../component/UserManagement/AllUsers";
import AddUser from "../../../component/UserManagement/AddUser/AddUser";
import RoleList from "../../../component/UserManagement/RoleList";
import AddRole from "../../../component/UserManagement/AddRole";
import { Toaster } from 'react-hot-toast';
import Employtype from "../../../component/adminside/employeetype/Employtype";
import Employeelist from "../../../component/adminside/employeetype/Employeelist";
import {ReactComponent as Icon} from '../../../assets/svg/hrwizzLogo2.svg';
const Dashboard = ({selectedModule}) => {
  const storedIcon = localStorage.getItem("selectedIcon");
  const [selectedIcon, setSelectedIcon] = useState("Dashbored");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [sidebarcloseopen, setsidebarcloseopen] = useState(false);
  const toggleSidebar = () => setsidebarcloseopen(!sidebarcloseopen);

  const toggleSidebarClass = () => {
    // setIsSidebarExpanded(!isSidebarExpanded);
  };
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    localStorage.setItem("selectedIcon", icon);
  };
  useEffect(() => {
    localStorage.setItem("selectedIcon", selectedIcon);
  }, [selectedIcon]);
  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      console.log("dat786");
      // dispatch(getFteData());
    }
  }, []);

  return (

    <Provider store={store} >
    <div className="" >
      {selectedIcon == "Dashbored" && (
        <div>
          
          <Provider store={store}>
            <Updatedashbored
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
              toggleSidebar={toggleSidebar}
              sidebarcloseopen={sidebarcloseopen}
              selectedModule={selectedModule}
            />
          </Provider>
        </div>
      )}
    {selectedIcon == "department" && (
        <div>
          <Provider store={store}>
            <Adddepartment
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )} 
      {selectedIcon == "departmentlist" && (
        <div>
          <Provider store={store}>
            <Departmentlist
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}           
      {selectedIcon == "subdepartment" && (
        <div>
          <Provider store={store}>
            <Addsubdepartment
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon == "subdepartmentlist" && (
        <div>
          <Provider store={store}>
            <Subdepartmentlist
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon == "Project" && (
        <div>
          <Provider store={store}>
            <Addproject
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon == "Projectlist" && (
        <div>
          <Provider store={store}>
            <Projectlist
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon == "Addproject" && (
        <div>
          <Provider store={store}>
            <Addproject
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon == "Teamlist" && (
        <div>
          <Provider store={store}>
            <Teamlist
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon == "Addteam" && (
        <div>
          <Provider store={store}>
            <Addteam
              toggleSidebarClass={toggleSidebarClass}
            />
          </Provider>
        </div>
      )}
      {selectedIcon == "Employee" && (
        <div>
          <Provider store={store}>
            <Employtype
             toggleSidebarClass={toggleSidebarClass}
            />
          </Provider>
        </div>
      )}
      {selectedIcon === "Employeelist" && (
        <div>
          <Provider store={store}>
          <Employeelist
                            toggleSidebarClass={toggleSidebarClass}

          />
          </Provider>
        </div>
      )}
     
      {selectedIcon === "people" && (
        <div className="">
          <Provider store={store}>
            <Subdepartment />
          </Provider>
        </div>
      )}
      {selectedIcon === "project" && (
        <div>
          <Provider store={store}>
            <Project />
          </Provider>
        </div>
      )}
      {selectedIcon === "team" && (
        <div>
          <Provider store={store}>
            <Team />
          </Provider>
        </div>
      )}
      {selectedIcon === "Estimation" && (
        <div>
          <Provider store={store}>
            <Estimation
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon === "Estimationreport" && (
        <div>
          <Provider store={store}>
            <EstimationReport
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon === "FTEcosting" && (
        <div>
          <Provider store={store}>
            <CostingReport
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon === "AllUsers" && (
        <div>
          <Provider store={store}>
            <AllUsers
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon === "AddUser" && (
        <div>
          <Provider store={store}>
            <AddUser
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon === "RoleList" && (
        <div>
          <Provider store={store}>
            <RoleList
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      {selectedIcon === "AddRole" && (
        <div>
          <Provider store={store}>
            <AddRole
              toggleSidebarClass={toggleSidebarClass}
              isSidebarExpanded={isSidebarExpanded}
            />
          </Provider>
        </div>
      )}
      
      
    </div>
    <Toaster/>
    </Provider>

  );
};

export default Dashboard;
