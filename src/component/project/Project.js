

import React, { useState , useEffect } from 'react';
import { addEditDeparmentFTE, getFteData, getProject , getSubDepartment , addEditProject } from '../../redux/features/auth/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import Subdepfte from '../fte/Subdepfte';
import Subdeporganizationlist from '../dashboredbox/Deporganizationlist';
import Summary from '../dashboredbox/Summary'
import Projectfte from '../fte/Projectfte';
import Projectorganizationlist from '../dashboredbox/Projectorganizationlist';
import { MdErrorOutline } from "react-icons/md";
import ProjectAPI from '../adminside/project/ProjectAPI';

const Project = ({displayText}) => {
    const dispatch = useDispatch();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [getfterender, setgetfterender] = useState('')
    const [renderfte, setrenderfte] = useState(false);
    const rerender=()=>{
      setgetfterender(true);
    }

    const handleCheckboxChange = (isChecked) => {
      setIsCheckboxChecked(isChecked);
    };
    const [selectedItem, setSelectedItem] = useState('');
    const [name, setName] = useState(' ');
  const [popupMessage, setPopupMessage] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
    const [Description, setDescription] = useState(' ');
    const [depdatalist, setdepdatalist] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const handleDropdownOptionSelect = (option) => {
      setSelectedOption(option.name);
      setdepid(prevState => ({
        ...prevState,
        subDepartmentId: option.id 
      }));
    };
    const [depid, setdepid] = useState({
        name: name,
        Description: Description,
        subDepartmentId: ''
      });
    const handleSave = async (e) => {
        e.preventDefault();
        try {
        const updatedDepid = {
            ...depid,
            name: name,
            Description: Description,
            createdBy: "admin",
            modifiedBy: "admin",
            activity: "1",
            time: 10,
        };
        const response = await dispatch(addEditProject(updatedDepid))
       .then((response)=>{
        dispatch(getProject())
        setrenderfte(true);
        if (response?.payload.isSuccess === false) {
            setPopupVisible(true);
            setPopupMessage(response?.payload.alertMessage)
        } else {
            setPopupVisible(true);
            setPopupMessage(response?.payload.alertMessage)
        }
       })
        } catch (error) {
          console.log('Failed to create your FTE.');
        }
    }
      const fetchDepdropdown = async () => {

        try {
           dispatch(getSubDepartment())
                           .then((response) => {
                               console.log(response, "getdatalist");
                               setdepdatalist(response.payload);
                              
                           });
        } catch (error) {
           console.error('Error fetching FTE data:', error);
         }
       }
         useEffect(() => {
            fetchDepdropdown();
         }, []);

  return (
   
     <div className="">
     <div className="d-flex p-1 pt-2   ps-4 topnavbar-card" style={{backgroundColor:"#FFFFFF" ,  
      boxShadow:"5.83px 5.83px 52.51px 0px #0000000D", marginTop:"1px"
    }} >
      <h1>Home </h1>
          <h1 className="ms-2 me-2">/</h1>
          <h1 className=" me-1">FTE Calculation /</h1>
          <h1 style={{color:"#4880FF" , 
          }}>{displayText}</h1>
     </div>
     <div>
      <Projectorganizationlist getfterender={getfterender} />
      <Summary onCheckboxChange={handleCheckboxChange} />
     </div>
     </div>

  )
}

export default Project
