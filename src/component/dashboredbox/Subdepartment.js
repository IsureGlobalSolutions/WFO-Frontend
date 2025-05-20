
import React, { useState , useEffect } from 'react';
import { addEditDeparmentFTE, getFteData, getSubDepartment , getDepartmentData , addEditSubDepartment } from '../../redux/features/auth/authSlice';
import { useDispatch  } from 'react-redux';
import Subdepfte from '../fte/Subdepfte';
import Subdeporganizationlist from './Subdeporganizationlist';
import Summary from '../dashboredbox/Summary'
import SubdepartmentAPI from '../adminside/sub-department/Subdepartmentapi';

const Subdepartment = ({displayText}) => {
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
    const [Description, setDescription] = useState(' ');
    const [depdatalist, setdepdatalist] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
    const handleDropdownOptionSelect = (option) => {
      setSelectedOption(option.name);
      setdepid(prevState => ({
        ...prevState,
          departmentId: option.id 
      }));
    };
    const [depid, setdepid] = useState({
        name: name,
        Description: Description,
        departmentId: ''
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
        };
        const response = await dispatch(addEditSubDepartment(updatedDepid))
        .then((response)=>{
          dispatch(getSubDepartment());
            setrenderfte(true); 
      if (response.payload.isSuccess===true) {
        setPopupVisible(true);
        setPopupMessage(response.payload.alertMessage)
    } else {
        setPopupVisible(true);
        setPopupMessage(response.payload.alertMessage)
    }
        })
        } catch (error) {
            alert("Failed API error")
        }
    }
      const fetchDepdropdown = async () => {

        try {
           dispatch(getDepartmentData())
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
    const handleDropdownSelect = (event) => {
      setSelectedItem(event.target.value);
    };
  return (

     <div className="">
     <div className="d-flex p-1 pt-2  ps-4 topnavbar-card" style={{backgroundColor:"#FFFFFF" ,  
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
     <Subdeporganizationlist getfterender={getfterender} />
     <Summary onCheckboxChange={handleCheckboxChange} />
     </div>
     </div>

  )
}

export default Subdepartment
