import React, { useState, useEffect, useContext } from 'react';
import './WFOSidebar.css';  
import { ReactComponent as DashboardLogo } from '../../../assets/WfoAssets/SVG/DashboardLogo.svg';  
import { ReactComponent as FTECalculation } from '../../../assets/WfoAssets/SVG/FTECalculation.svg';  
import { ReactComponent as Hradmin } from '../../../assets/WfoAssets/SVG/HR.svg';  
import { ReactComponent as User } from '../../../assets/WfoAssets/SVG/user.svg';  
import { ReactComponent as Estimation } from '../../../assets/WfoAssets/SVG/Estimation.svg';  
import { ReactComponent as Costing } from '../../../assets/WfoAssets/SVG/Costing.svg';  
import { ReactComponent as SidebarVector } from '../../../assets/WfoAssets/SVG/SidebarVector.svg';  
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useLocation } from 'react-router-dom';
import AuthContext from '../../../context/AuthProvider';

const WFOSidebar = ({ onCloseSidebar, onModuleSelect }) => {
  const { permissions, role} = useContext(AuthContext);
  console.log("🚀 ~ WFOSidebar ~ role:", role)
  const [activeTab, setActiveTab] = useState('');
  const [expandedMenus, setExpandedMenus] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if user has permission for a module
  const hasPermission = (moduleName) => {
    if (role === 1) return false;
    if (permissions === null) return true; // Show all if permissions not loaded yet
    if (!permissions?.userPermissions) return false; // No permissions at all
    
    const moduleToPermissionMap = {
      'FTE Calculation': ['Organization FTE', 'Department FTE', 'Sub-Department FTE', 'Project FTE', 'Team FTE'],
      'Employee Type': ['Employee Type'],
      'Department': ['Department'],
      'Sub-Department': ['Sub-Department'],
      'Project': ['Project'],
      'Team': ['Team'],
      'Add Employee': ['Employee'],
      'Employees Detail': ['Employees Detail'],
      'Roles Detail': ['Roles Detail'],
      'Estimation Details': ['Estimation Details'],
      'Estimation Report': ['Estimation Report'],
      'Costing': ['Costing']
    };

    const permissionNames = moduleToPermissionMap[moduleName] || [moduleName];
    
    // Check if any of the required permissions exist with View sub-permission
    return permissionNames.some(permissionName => {
      const permission = permissions.userPermissions.find(p => p.permissionName === permissionName);
      return permission?.subPermissions?.some(sp => sp.subPermissionName === 'View');
    });
  };

  // Get all available tabs in priority order
  const getAvailableTabs = () => {
    const availableTabs = [];
    
    // Define the priority order of tabs
    const tabPriority = [
      { 
        name: 'FTE Calculation', 
        check: () => hasPermission('FTE Calculation') 
      },
      { 
        name: 'HR Admin', 
        check: () => ['Employee Type', 'Department', 'Sub-Department', 'Project', 'Team'].some(module => hasPermission(module))
      },
      { 
        name: 'User Management', 
        check: () => ['Employees Detail', 'Roles Detail'].some(module => hasPermission(module))
      },
      { 
        name: 'Estimation', 
        check: () => ['Estimation Details', 'Estimation Report'].some(module => hasPermission(module))
      },
      { 
        name: 'Costing', 
        check: () => hasPermission('Costing') 
      }
    ];
    
    // Add tabs that are available
    tabPriority.forEach(tab => {
      if (tab.check()) {
        availableTabs.push(tab.name);
      }
    });
    
    return availableTabs;
  };


  // Get the first available sub-tab for a main tab
  const getFirstAvailableSubTab = (mainTab) => {
    switch (mainTab) {
      case 'HR Admin':
        if (hasPermission('Employee Type')) return 'Employee Type';
        if (hasPermission('Department')) return 'Department';
        if (hasPermission('Sub-Department')) return 'Sub-Department';
        if (hasPermission('Project')) return 'Project';
        if (hasPermission('Team')) return 'Team';
        break;
      case 'User Management':
        if (hasPermission('Employees Detail')) return 'Employees Detail';
        if (hasPermission('Roles Detail')) return 'Roles Detail';
        break;
      case 'Estimation':
        if (hasPermission('Estimation Details')) return 'Estimation Details';
        if (hasPermission('Estimation Report')) return 'Estimation Report';
        break;
      default:
        return mainTab;
    }
    return mainTab;
  };
  

  // Set initial active tab based on available permissions
  useEffect(() => {

    if (role === 1) {
      // For super admin, set active tab to Super Admin
      setActiveTab('Super Admin');
      if (onModuleSelect) {
        onModuleSelect('Super Admin');
      }
      navigate('/SuperAdminDashboard'); // Make sure this route exists
      return;
    }
    if (!activeTab || !hasPermission(activeTab)) {
      const availableTabs = getAvailableTabs();
      if (availableTabs.length > 0) {
        const firstTab = availableTabs[0];
        const firstSubTab = getFirstAvailableSubTab(firstTab);
        
        setActiveTab(firstSubTab);
        if (onModuleSelect) {
          onModuleSelect(firstSubTab);
        }
        
        // Navigate to the first available tab
        const path = getPathForTab(firstSubTab);
        if (path) {
          navigate(path);
        }
        
        // Expand the parent menu if this is a submenu item
        const parentMenu = getParentMenu(firstSubTab);
        if (parentMenu && !expandedMenus.includes(parentMenu)) {
          setExpandedMenus(prev => [...prev, parentMenu]);
        }
      }
    }
  }, [permissions, activeTab]);

  // Map paths to their corresponding tabs
  const pathToTabMap = {
    '/dashboard': 'FTE Calculation',
    '/employeetype': 'Employee Type',
    '/department': 'Department',
    '/dsubdepartment': 'Sub-Department',
    '/project': 'Project',
    '/team': 'Team',
    '/AddEmployee': 'Add Employee',
    '/employeesdetail': 'Employees Detail',
    '/rolesdetails': 'Roles Detail',
    '/estimationdetails': 'Estimation Details',
    '/estimationreport': 'Estimation Report',
    '/costing': 'Costing',
    '/SuperAdminDashboard': 'Super Admin'
  };

  // Get path for a tab
  const getPathForTab = (tab) => {
    const tabToPathMap = {
      'FTE Calculation': '/dashboard',
      'Employee Type': '/employeetype',
      'Department': '/department',
      'Sub-Department': '/dsubdepartment',
      'Project': '/project',
      'Team': '/team',
      'Employees Detail': '/employeesdetail',
      'Roles Detail': '/rolesdetails',
      'Estimation Details': '/estimationdetails',
      'Estimation Report': '/estimationreport',
      'Costing': '/costing',
      '/SuperAdminDashboard': 'Super Admin'

    };
    return tabToPathMap[tab];
  };

  // Set active tab based on current path when component mounts or location changes
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedTab = Object.entries(pathToTabMap).find(([path]) => currentPath.startsWith(path));
    
    if (matchedTab) {
      setActiveTab(matchedTab[1]);
      
      // Also expand the parent menu if this is a submenu item
      const parentMenu = getParentMenu(matchedTab[1]);
      if (parentMenu && !expandedMenus.includes(parentMenu)) {
        setExpandedMenus(prev => [...prev, parentMenu]);
      }
    }
  }, [location.pathname]);

  // Helper function to get parent menu for submenu items
  const getParentMenu = (tab) => {
    const submenuItems = {
      'Employee Type': 'HR Admin',
      'Department': 'HR Admin',
      'Sub-Department': 'HR Admin',
      'Project': 'HR Admin',
      'Team': 'HR Admin',
      'Add Employee': 'User Management',
      'Employees Detail': 'User Management',
      'Roles Detail': 'User Management',
      'Estimation Details': 'Estimation',
      'Estimation Report': 'Estimation'
    };
    return submenuItems[tab];
  };

  const handleClick = (tab, path, isExpandable = false) => {
    if (tab !== "HR Admin" && tab !== "User Management" && tab !== "Estimation") {
      setActiveTab(tab);
    }

    if (onModuleSelect) {
      onModuleSelect(tab);
    }

    if (isExpandable) {
      setExpandedMenus(prev =>
        prev.includes(tab)
          ? prev.filter(item => item !== tab)
          : [...prev, tab]
      );
    } else {
      setExpandedMenus([]);
      navigate(path);
    }
  };

  const handleSubClick = (tab, path) => {
    if (onModuleSelect) {
      onModuleSelect(tab); 
    }
    if (tab !== "HR Admin" && tab !== "User Management" && tab !== "Estimation") {
      setActiveTab(tab);
    }
    navigate(path);
  };
  if (role === 1) {
    return (
      <>
        <div className="logo-container">
          <DashboardLogo className="sidebar-logo" />  
          <div className="sidebar-close d-md-none" onClick={onCloseSidebar}>
            <RxCross2 className='ms-4' style={{ width: '28px', height: '25px', cursor: 'pointer' }} />
          </div>
        </div>

        <div className="sidebar-content">
          <button
            type="button"
            className={`sidebar-button ps-3 ${activeTab === 'Super Admin' ? 'active ps-3' : ''}`}
            onClick={() => {
              setActiveTab('Super Admin');
              if (onModuleSelect) onModuleSelect('Super Admin');
              navigate('/super-admin');
            }}
          >
            {/* <SuperAdminIcon className="sidebar-icon" /> */}
            <span className="sidebar-text">All Users </span>

          </button>
        </div>
      </>
    );
  }

  // Check if modules should be shown
  const showHRAdmin = permissions === null || ['Employee Type', 'Department', 'Sub-Department', 'Project', 'Team']
    .some(module => hasPermission(module));

  const showUserManagement = permissions === null || ['Employees Detail', 'Roles Detail']
    .some(module => hasPermission(module));

  const showEstimation = permissions === null || ['Estimation Details', 'Estimation Report']
    .some(module => hasPermission(module));

  return (
    <>
      <div className="logo-container">
        <DashboardLogo className="sidebar-logo" />  
        <div className="sidebar-close d-md-none" onClick={onCloseSidebar}>
          <RxCross2 className='ms-4' style={{ width: '28px', height: '25px', cursor: 'pointer' }} />
        </div>
      </div>

      <div className="sidebar-content">
        {/* FTE Calculation Button - Only shown if user has permission */}
        {hasPermission('FTE Calculation') && (
          <button
            type="button"
            className={`sidebar-button ps-3 ${activeTab === 'FTE Calculation' ? 'active ps-3' : ''}`}
            onClick={() => handleClick('FTE Calculation', '/dashboard')}
          >
            <FTECalculation className="sidebar-icon" />
            <span className="sidebar-text">FTE Calculation</span>
          </button>
        )}

        {/* HR Admin Button */}
        {showHRAdmin && (
          <>
            <button
              type="button"
              className={`sidebar-button ps-3 ${
                activeTab === 'HR Admin' || 
                ['Employee Type', 'Department', 'Sub-Department', 'Project', 'Team'].includes(activeTab) ? 'active1' : ''
              }`}
              onClick={() => handleClick('HR Admin', '', true)}
            >
              <Hradmin className="sidebar-icon" />
              <span className="sidebar-text">HR Admin</span>
              <SidebarVector className={`sidebarvector-icon ms-3 ${expandedMenus.includes('HR Admin') ? 'expanded' : ''}`} />
            </button>

            {/* HR Admin Submenu */}
            {expandedMenus.includes('HR Admin') && (
              <div className="sidebar-submenu">
                {hasPermission('Employee Type') && (
                  <button
                    className={`sidebar-sub-button ${activeTab === 'Employee Type' ? 'active' : ''}`}
                    onClick={() => handleSubClick('Employee Type', '/employeetype')}
                  >
                    Employee Type
                  </button>
                )}
                {hasPermission('Department') && (
                  <button
                    className={`sidebar-sub-button ${activeTab === 'Department' ? 'active' : ''}`}
                    onClick={() => handleSubClick('Department', '/department')}
                  >
                    Department
                  </button>
                )}
                {hasPermission('Sub-Department') && (
                  <button
                    className={`sidebar-sub-button ${activeTab === 'Sub-Department' ? 'active' : ''}`}
                    onClick={() => handleSubClick('Sub-Department', '/subdepartment')}
                  >
                    Sub-Department
                  </button>
                )}
                {hasPermission('Project') && (
                  <button
                    className={`sidebar-sub-button ${activeTab === 'Project' ? 'active' : ''}`}
                    onClick={() => handleSubClick('Project', '/project')}
                  >
                    Project
                  </button>
                )}
                {hasPermission('Team') && (
                  <button
                    className={`sidebar-sub-button ${activeTab === 'Team' ? 'active' : ''}`}
                    onClick={() => handleSubClick('Team', '/team')}
                  >
                    Team
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* User Management Button */}
        {showUserManagement && (
          <>
            <button
              type="button"
              className={`sidebar-button ps-3 ${activeTab === 'User Management' || 
                ['Employees Detail', 'Roles Detail'].includes(activeTab) ? 'active1' : ''}`}
              onClick={() => handleClick('User Management', '', true)}
            >
              <User className="sidebar-icon" />
              <span className="sidebar-text">User Management</span>
              <SidebarVector className={`sidebarvector-icon ms-3 ${expandedMenus.includes('User Management') ? 'expanded' : ''}`} />
            </button>

            {/* User Management Submenu */}
            {expandedMenus.includes('User Management') && (
              <div className="sidebar-submenu">
                {hasPermission('Employees Detail') && (
                  <button
                    className={`sidebar-sub-button ${activeTab === 'Employees Detail' ? 'active' : ''}`}
                    onClick={() => handleSubClick('Employees Detail', '/employeesdetail')}
                  >
                    Employees Detail
                  </button>
                )}
                {hasPermission('Roles Detail') && (
                  <button
                    className={`sidebar-sub-button ${activeTab === 'Roles Detail' ? 'active' : ''}`}
                    onClick={() => handleSubClick('Roles Detail', '/rolesdetails')}
                  >
                    Roles Detail
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* Estimation Button */}
        {showEstimation && (
          <>
            <button
              type="button"
              className={`sidebar-button ps-3 ${activeTab === 'Estimation' || 
                ['Estimation Details', 'Estimation Report'].includes(activeTab) ? 'active1' : ''}`}
              onClick={() => handleClick('Estimation', '', true)}
            >
              <Estimation className="sidebar-icon" />
              <span className="sidebar-text">Estimation</span>
              <SidebarVector className={`sidebarvector-icon ms-3 ${expandedMenus.includes('Estimation') ? 'expanded' : ''}`} />
            </button>

            {/* Estimation Submenu */}
            {expandedMenus.includes('Estimation') && (
              <div className="sidebar-submenu">
                {hasPermission('Estimation Details') && (
                  <button
                    className={`sidebar-sub-button ${activeTab === 'Estimation Details' ? 'active' : ''}`}
                    onClick={() => handleSubClick('Estimation Details', '/estimationdetails')}
                  >
                    Estimation Details
                  </button>
                )}
                {hasPermission('Estimation Report') && (
                  <button
                    className={`sidebar-sub-button ${activeTab === 'Estimation Report' ? 'active' : ''}`}
                    onClick={() => handleSubClick('Estimation Report', '/estimationreport')}
                  >
                    Estimation Report
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* Costing Button - Only shown if user has permission */}
        {hasPermission('Costing') && (
          <button
            type="button"
            className={`sidebar-button ps-3 ${activeTab === 'Costing' ? 'active ps-3' : ''}`}
            onClick={() => handleClick('Costing', '/costing')}
          >
            <Costing className="sidebar-icon" />
            <span className="sidebar-text">Costing</span>
          </button>
        )}
      </div>
    </>
  );
};

export default WFOSidebar;