import React from 'react';

const EstimationAlldropdown = ({
  handleOrganizationSelectChange,
  FTEwithid,
  showd,
  handleSelectfte,
  organizationfte,
  isOrganizationSelected,
  handleCategoryChange,
  showC,
  handleSelectChange,
  selectedCategory,
  setSelectedFTE,
  selectedFTE,
  selectedDepartment, 
  setSelectedDepartment,
}) => {
  const onCategoryChange = (event) => {
    const value = event.target.value;
    handleCategoryChange(event);
  };

  const onDepartmentChange = (event) => {
    const value = event.target.value;
    setSelectedDepartment(value);
    handleSelectChange(event);
  };

  const onFTEChange = (event) => {
    const value = event.target.value;
    setSelectedFTE(value);
    handleSelectfte(event);
  };

  // Calculate column classes based on number of visible dropdowns
  const getColumnClass = () => {
    if (showd) return ' col-md-4'; // 4 items
    if (showC || showd) return ' col-md-4'; // 2 items
    return ' col-md-4'; // 1 item
  };

  return (
    <div className=" p-4 pt-0 mb-0">
      <div className="row g-3">
        {/* Category Dropdown - Always visible */}
       
        <div className={`${getColumnClass()} mb-0 mt-0 pt-3`}>
        <p className="pb-0 label-tag" >Select Category</p>
          <select
            id="selectcategory"
            name="selectcategory"
            className="form-select"
            onChange={onCategoryChange}
            value={selectedCategory}
            style={{
              border: '0.94px solid #D6D6D6',
              color: selectedCategory ? '#000' : '#A3A3A3',
              borderRadius: '10px',
              padding: '10px 15px',
              height: '46px',
              cursor: 'pointer',
            }}
          >
            <option disabled value="" style={{ color: '#A3A3A3' }}>
              Select category
            </option>
            <option value="organization">Organization</option>
            <option value="department">Department</option>
            <option value="subdepartment">Sub-Department</option>
            <option value="project">Project</option>
            <option value="team">Team</option>
            <option value="jobtitle">Job Title</option>
          </select>
        </div>

        {/* Department Dropdown - Conditionally visible */}
        {showC && (
          <div className={`${getColumnClass()} mb-0 pt-0`}>
              <p className="label-tag">Select {selectedCategory || "Fields"}</p>
            <select
              id="department_Dropdown"
              className="form-select"
              onChange={onDepartmentChange}
              value={selectedDepartment}
              style={{
                border: '0.94px solid #D6D6D6',
                color: selectedDepartment ? '#000' : '#A3A3A3',
                borderRadius: '10px',
                padding: '10px 15px',
                height: '46px',
                cursor: 'pointer',
              }}
            >
              <option value="" style={{ color: '#A3A3A3' }}>Select Department</option>
              {organizationfte?.map((department) => (
                <option key={department.id} value={department.id} className='label-option'>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* FTE Dropdown - First Conditionally visible */}
        {showC && (
          <div className={`${getColumnClass()} mb-0`}>
              <p className="label-tag" >Select FTE</p>
            <select
              id="organizationFTE"
              className="form-select"
              onChange={onFTEChange}
              value={selectedFTE}
              style={{
                border: '0.94px solid #D6D6D6',
                color: selectedFTE ? '#000' : '#A3A3A3',
                borderRadius: '10px',
                padding: '10px 15px',
                height: '46px',
                cursor: 'pointer',
              }}
            >
              
              <option value="" style={{ color: '#A3A3A3' }}>Select FTE</option>
              {FTEwithid?.map((department) => (
                <option key={department.id} value={department.id} className='label-option'>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* FTE Dropdown - Second Conditionally visible */}
        {showd && (
          <div className={`${getColumnClass()} mb-0`}>
              <p className="label-tag">Select FTE</p>
            <select
              id="organizationFTE"
              className="form-select"
              onChange={handleOrganizationSelectChange}
              style={{
                border: '0.94px solid #D6D6D6',
                color: '#A3A3A3',
                borderRadius: '10px',
                padding: '10px 15px',
                height: '46px',
                cursor: 'pointer',
              }}
            >
              <option value="" style={{ color: '#A3A3A3' }}>Select FTE</option>
              {organizationfte?.map((department) => (
                <option key={department.id} value={department.id} className='label-option'>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Add hover and focus styles globally */}
      <style jsx>{`
        
        .form-select:focus {
          border-color: #4880FF !important;
          box-shadow: 0 0 0 0.2rem rgba(72, 128, 255, 0.25) !important;
        }
        option:hover {
          background-color: #4880FF !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
};

export default EstimationAlldropdown;