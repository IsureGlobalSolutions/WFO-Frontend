import React, { useState } from "react";
import "./dashboredbody.css";
import { MdLocalFireDepartment } from "react-icons/md";
import { SiConvertio } from "react-icons/si";
import FTE from "../../fte/FTE";
import Form from "../../dashboredbox/Form";
import OrganizationList from "../../dashboredbox/OrganizationList";
import Summary from "../../dashboredbox/Summary";
import "../../dashboredbox/Form.css";

const Organization = ({displayText}) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [getfterender, setgetfterender] = useState("");
  const rerender = () => {
    setgetfterender(true);
  };
  const handleCheckboxChange = (isChecked) => {
    setIsCheckboxChecked(isChecked);
  };

  return (
    <div className="d-fle">
    <div className="d-flex p-1   ps-4 topnavbar-card" style={{backgroundColor:"#FFFFFF" ,  
     boxShadow:"5.83px 5.83px 52.51px 0px #0000000D",
     marginTop:"1px"
}} >
       <h1>Home </h1>
          <h1 className="ms-2 me-2">/</h1>
          <h1 className=" me-1">FTE Calculation /</h1>

          <h1 style={{color:"#4880FF" , 
          }}>{displayText}</h1>
    </div>
    <div>
    <OrganizationList getfterender={getfterender} />
    <Summary onCheckboxChange={handleCheckboxChange} />
    </div>
    </div>
  
  );
};

export default Organization;
