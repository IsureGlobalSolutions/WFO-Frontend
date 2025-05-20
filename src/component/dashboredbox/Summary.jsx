import React, { useState } from "react";

function Summary({ onCheckboxChange }) {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
    onCheckboxChange(e.target.checked);
  };

  return (
    <>
      <div
        className=" p-0  p-4 ps-0 pt-3 pe-0"
        style={{ backgroundColor:"#FFFFFF" , marginTop:"1px"}}
      >
        <div className=" m-0 ps-4 pt-0 "
         style={{ 
          fontWeight: 600, 
          fontSize: '20px', 
          lineHeight: '100%', 
          letterSpacing: '0px', 
          color:"#000000",
          fontFamily:"Poppins, sans-serif",
        }}
        >FTE Summary</div>
        <div
          className="pt-3  ps-4 pe-4"
          style={{ 
            fontWeight: 400, 
            fontSize: '16px', 
            lineHeight: '32px', 
            letterSpacing: '0.5px', 
            color:"#737373",
            fontFamily:"Poppins, sans-serif",


          }}
        >
          The FTE function calculates the available working hours for each employee. Users input parameters such as daily working hours, breaks, weekly workdays, leave days, and average away days. The system processes this data to yield an accurate FTE value. FTE is vital for workforce planning, budgeting, and resource allocation. It ensures optimal staffing levels and evaluates cost-efficiency. In summary, FTE provides a standardized metric for informed decision-making in managing human resources.
        </div>
        {/* <div className="d-flex gap-2 pt-3">
          <input type="checkbox" name="" id="" onChange={handleCheckboxChange}/>
          <div>Please check the box for enable FTE Add Button</div>
        </div> */}
      </div>
    </>
  );
}

export default Summary;
