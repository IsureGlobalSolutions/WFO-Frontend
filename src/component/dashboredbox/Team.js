
import React, { useState , useEffect } from 'react';
import { addEditDeparmentFTE, getFteData, getTeam , getProject , addEditTeam } from '../../redux/features/auth/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import Subdepfte from '../fte/Subdepfte';
import Subdeporganizationlist from '../dashboredbox/Deporganizationlist';
import Summary from '../dashboredbox/Summary'
import Projectfte from '../fte/Projectfte';
import Projectorganizationlist from '../dashboredbox/Projectorganizationlist';
import Teamfte from '../fte/Teamfte';
import Teamorganizationlist from './Teamorganizationlist';
import { MdErrorOutline } from "react-icons/md";
import TeamAPI from '../adminside/team/TeamAPI';

const Team = ({displayText}) => {
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
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [name, setName] = useState(' ');
    const [Description, setDescription] = useState(' ');
    const [depdatalist, setdepdatalist] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
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
        departmentId: '',
        createdBy: "admin",
        modifiedBy: "admin",
        members: 10,

      });
      

    
    const handleSave = async (e) => {
        e.preventDefault();
      
        try {
          console.log("datappost");

        const updatedDepid = {
            ...depid,
            name: name,
            Description: Description
        };

        // Dispatch the API call with the updated depid object
        const response = await dispatch(addEditTeam(updatedDepid))
        .then((response)=>{
          dispatch(getTeam());
          setrenderfte(true);
          // If API call is successful, show success message
          if (response.payload.isSuccess === false) {
            setPopupVisible(true);
            setPopupMessage(response.payload.alertMessage)
        } else {
            // Handle other status codes here if needed
            // console.error("Error: Unexpected response status", response.status);
            setPopupVisible(true);
            setPopupMessage(response.payload.alertMessage)
        }
        })
         
        } catch (error) {
          // If API call fails, show error message
          console.log('Failed to create your FTE.');
        }
    }
    // Function to handle selection of an item from dropdown
    

      const fetchDepdropdown = async () => {

        try {
           dispatch(getProject())
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
     <div className="d-fle">
        <div className="d-flex p-1 pt-2   ps-4 topnavbar-card" style={{backgroundColor:"#FFFFFF" ,  
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
        <Teamorganizationlist getfterender={getfterender} />
        <Summary onCheckboxChange={handleCheckboxChange} />
        </div>
        </div>
    

  )
}

export default Team
