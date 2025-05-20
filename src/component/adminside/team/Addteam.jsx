
import React, { useState , useEffect } from 'react';
import { addEditDeparmentFTE, getFteData, deleteFteData , getProject , addEditTeam } from '../../../redux/features/auth/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import { MdErrorOutline } from "react-icons/md";
import Stickyheader from '../../upperheader/Stickyheader';
import TeamAPI from './TeamAPI';
import Teamlist from './Teamlist';
const Addteam = ({selectedModule}) => {
    const dispatch = useDispatch();
    const [invalidName, setInvalidName] = useState(false);
    const [invalidDescription, setInvalidDescription] = useState(false);
        const [getfterender, setgetfterender] = useState('')
    const [renderfte, setrenderfte] = useState(false);
    const rerender=()=>{
      setgetfterender(true);
    }
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const [name, setName] = useState('');
    const [Description, setDescription] = useState('');
    const [depdatalist, setdepdatalist] = useState([])
    const [selectedOption, setSelectedOption] = useState('');
    const [invalidselectoption, setinvalidselectoption] = useState(false)

    const handleDropdownOptionSelect = (option) => {
      setSelectedOption(option.name);
      setdepid(prevState => ({
        ...prevState,
          departmentId: option.id 
      }));
      setinvalidselectoption(false);

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
        if (!name.trim() || !Description.trim() || !selectedOption) {
          setInvalidName(!name.trim());
          setInvalidDescription(!Description.trim());
          setinvalidselectoption(!selectedOption);
          return; 
      }
        try {
          console.log("datappost");

        const updatedDepid = {
            ...depid,
            name: name,
            Description: Description
        };

        const response = await dispatch(addEditTeam(updatedDepid));
        
        setName('');
        setDescription('');
        setSelectedOption('');
         
        } catch (error) {
          console.log('Failed to create your FTE.');
        }
    }
      const fetchDepdropdown = async () => {
        try {
           dispatch(getProject())
                           .then((response) => {
                               setdepdatalist(response.payload);
                              
                           });
        } catch (error) {
           console.error('Error fetching FTE data:', error);
         }
       }
         useEffect(() => {
            fetchDepdropdown();
         }, []);
         const handleclear = () => {
          setName('');
          setDescription('')
          setSelectedOption('')
         
}
  return (

   <>
     <div className="childsection ">
  <h1>HR Admin</h1>
  </div>
   <div className="d-flex p-1 pt-2 mt-3 ps-4 pt-0 topnavbar-card" style={{backgroundColor:"#FFFFFF" ,  
      boxShadow:"5.83px 5.83px 52.51px 0px #0000000D"
 }} >
        <h1>Home </h1>
           <h1 className="ms-1 me-1">/</h1>
           <h1>HR Admin </h1>
           <h1 className="ms-1 me-1">/</h1>
           <h1 style={{color:"#4880FF" , 
           }}>{selectedModule}</h1>
     </div>
    <TeamAPI/> 
    <Teamlist/>
   
   </>

  )
}

export default Addteam