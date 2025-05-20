import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link ,useLocation } from 'react-router-dom';
import WFOSidebar from "../../WFODashboard/Sidebar/WFOSidebar";
import DashboardFooter from "../../WFODashboard/DashboardFooter.jsx/DashboardFooter";
import './WfoDashboardLayout.css';
import DashboardHeader from "../../WFODashboard/DashboardHeader/DashboardHeader";
const WfoDashboardLayout = ({children}) => {
  
   
    const [showSidebar, setShowSidebar] = useState(false);
    const [selectedModule, setSelectedModule] = useState('');
    const handleModuleSelect = (tab) => {
       if (tab !== "HR Admin" && tab !== "User Management" && tab !== "Estimation Detail") {
        setSelectedModule(tab);
    }
      };
      
    const toggleSidebar = () => {
      setShowSidebar(prev => !prev);
      console.log(showSidebar , "showSidebar2");

    };
    const closeSidebar = () =>{
        setShowSidebar(false);
        console.log(showSidebar , "showSidebar");
        
    };

  return (
    <>
    <div className="layout">
    <div className={`Wfo-sidebar ${showSidebar ? 'show' : ''}`}>
    <WFOSidebar onCloseSidebar={closeSidebar} onModuleSelect={handleModuleSelect} />
    </div>
  <div className="main-content">
    <header className="header">
        <DashboardHeader onToggleSidebar={toggleSidebar}/>
    </header>
    <div className="content">
  {children && React.cloneElement(children, { selectedModule })}
</div>

    <footer className="Dashboard-footer">
        <DashboardFooter/>
    </footer>
  </div>
  {showSidebar && (
               <div className="sidebar-backdrop" onClick={closeSidebar} />

      )}
</div>

    

    
    </>
  )
}
WfoDashboardLayout.propTypes = {
    children: PropTypes.node.isRequired,
    selectedModule: PropTypes.string

  };
export default WfoDashboardLayout