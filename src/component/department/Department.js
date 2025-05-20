import React, { useState } from 'react';
import Form from '../dashboredbox/Form'
import OrganizationList from '../dashboredbox/OrganizationList'
import Summary from '../dashboredbox/Summary'
import { addEditDeparment, getDepartmentData, deleteFteData } from '../../redux/features/auth/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import Deporganizationlist from '../dashboredbox/Deporganizationlist';
import Depfte from '../fte/Depfte';
import { MdErrorOutline } from "react-icons/md";
import Adddepartment from '../adminside/department/Adddepartment';
import DepartmentApi from '../adminside/department/DepartmentApi';
import '../dashboredbox/Form.css'
const Department = ({displayText}) => {
  const dispatch = useDispatch();
  const [popupMessage, setPopupMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [Depformvalue, setDepformvalue] = useState({
    name,
    description,
    createdBy: "string",
    modifiedBy: "string",
  })
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [getfterender, setgetfterender] = useState('')
  const [renderfte, setrenderfte] = useState(false);
  const rerender=()=>{
    setgetfterender(true);
  }
  const handleCheckboxChange = (isChecked) => {
    setIsCheckboxChecked(isChecked);
  };
 
  return (

 <div className="pt-0">
 <div className="d-flex p-1 ps-4 topnavbar-card" style={{backgroundColor:"#FFFFFF" ,  
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
 <Deporganizationlist getfterender={getfterender} />
 <Summary onCheckboxChange={handleCheckboxChange} />
 </div>
 </div>

 )
}

export default Department



