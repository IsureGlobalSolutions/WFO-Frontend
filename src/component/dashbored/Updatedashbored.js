import { useState, useEffect, useContext } from 'react';
import Stickyheader from '../upperheader/Stickyheader';
import Updatefooter from './updatefooter/Updatefooter';
import Pagetoolbar from './pagetoolbar/Pagetoolbar';
import Dashboredbody from './dashboredbody/Organization';
import Department from '../department/Department';
import Subdepartment from '../dashboredbox/Subdepartment';
import './updatedashbored.css';
import Project from '../project/Project';
import JobTitle from '../jobtitle/JobTitle';
import Team from '../dashboredbox/Team';
import Organization from './dashboredbody/Organization';
import AuthContext from '../../context/AuthProvider';

const Updatedashbored = ({ sidebarcloseopen, isSidebarExpanded, toggleSidebar, selectedModule }) => {
  const { permissions } = useContext(AuthContext);
  console.log("🚀 ~ Updatedashbored ~ permissions:", permissions)
  const [topping, setTopping] = useState("Organization FTE");
  const [displayText, setDisplayText] = useState('Organization FTE');
  
  // Map between display names and permission names
  const tabPermissionMap = {
    'Organization FTE': 'Organization FTE',
    'Department FTE': 'Department FTE',
    'Sub-Department FTE': 'Sub-Department FTE',
    'Project FTE' : 'Project FTE',
    'Team FTE': 'Team FTE',
    'Job Title': 'Job Title'
  };

  // Check permission for a specific tab
  // const hasPermission = (tab) => {
  //   // If permissions is null, allow all (for development)
  //   if (permissions === null) return true;
    
  //   // If no permissions object, deny all
  //   if (!permissions?.userPermissions) return false;
    
  //   const permissionName = tabPermissionMap[tab];
    
  //   // If no mapping exists, allow by default
  //   if (!permissionName) return true;
    
  //   return permissions.userPermissions.some(permission => {
  //     // Check both direct permission and FTE variation
  //     if (permission.permissionName === permissionName || 
  //         permission.permissionName === `${permissionName}`) {
  //       return permission.subPermissions.some(sp => sp.subPermissionName === 'View');
  //     }
  //     return false;
  //   });
  // };

  const hasPermission = (tab) => {
    // Allow all permissions if permissions is null (e.g., in development or admin mode)
    if (permissions === null) return true;
  
    // If no permissions object, deny all
    if (!permissions?.userPermissions) return false;
  
    const permissionName = tabPermissionMap[tab];
    
    // If no mapping exists, allow by default
    if (!permissionName) return true;
  
    return permissions.userPermissions.some(permission => {
      if (
        permission.permissionName === permissionName ||
        permission.permissionName === `${permissionName}`
      ) {
        return permission.subPermissions?.some(sp => sp.subPermissionName === 'View');
      }
      return false;
    });
  };
  // Get available tabs based on permissions
  const getAvailableTabs = () => {
    const allTabs = [
      "Organization FTE", 
      "Department FTE", 
      "Sub-Department FTE", 
      "Project FTE", 
      "Team FTE",
      // "Job Title"
    ];
    if (permissions === null) return allTabs;

    return allTabs.filter(tab => hasPermission(tab));
  };

  // Set initial tab based on available permissions
  useEffect(() => {
    const availableTabs = getAvailableTabs();
    
    // If current tab is not available, switch to first available tab
    if (availableTabs.length > 0 && !availableTabs.includes(topping)) {
      const firstAvailableTab = availableTabs[0];
      setTopping(firstAvailableTab);
      setDisplayText(firstAvailableTab);
    }
  }, [permissions]);

  // Update display text when selected module changes
  useEffect(() => {
    if (selectedModule) {
      // Map sidebar module names to dashboard display names
      const moduleMap = {
        'FTE Calculation': 'Organization FTE',
        'Employee Type': 'Organization FTE',
        'Department FTE': 'Department FTE',
        'Sub-Department FTE': 'Sub-Department FTE',
        'Project FTE': 'Project FTE',
        'Team FTE': 'Team FTE',
        'Job Title': 'Job Title'
      };
      
      const mappedName = moduleMap[selectedModule] || selectedModule;
      
      // Only update if the mapped tab is available
      if (getAvailableTabs().includes(mappedName)) {
        setTopping(mappedName);
      }
    }
  }, [selectedModule]);

  const onOptionChange = (value) => {
    console.log("Tab changed to:", value);
    setTopping(value);
    setDisplayText(value);
  };
  

  const renderComponent = () => {
    console.log("Tab changed to  dskkfdkk", topping);

    switch(topping) {
      case "Department FTE": return <Department displayText={displayText} />;
      case "Sub-Department FTE": return <Subdepartment displayText={displayText} />;
      case "Organization FTE": return <Organization displayText={displayText} />;
      case "Project FTE": return <Project displayText={displayText} />;
      case "Team FTE": return <Team  displayText={displayText}/>;
    }
  };

  const availableTabs = getAvailableTabs();

  return (
    <>
      <div className="childsection ">
        <h1>FTE Calculation</h1>
        {availableTabs.length > 0 && (
          <div className="pt-1">
            <div className="row g-0">
              {availableTabs.map((item) => (
                <div className="col-12 col-sm-2 d-flex  align-items-center" key={item}>
                  <button
                    type="button"
                    className={`w-100 childbutton p-3 ${topping === item ? 'active' : ''}`}
                    onClick={() => onOptionChange(item)}
                    disabled={!hasPermission(item)}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {renderComponent()}
    </>
  );
};

export default Updatedashbored;