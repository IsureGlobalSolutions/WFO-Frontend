
import React, { useState , useEffect } from 'react';
import { addEditJobTitle, getJobTitle } from '../../redux/features/auth/authSlice';
import { useDispatch , useSelector } from 'react-redux';
import Subdepfte from '../fte/Subdepfte';
import Summary from '../dashboredbox/Summary'
import Jobtitleorganizationlist from '../dashboredbox/Jobtitleorganizationlist';
import JobTitlefte from '../fte/JobTitlefte';
import { MdErrorOutline } from "react-icons/md";
import JobtitleAPI from '../adminside/Jobtitle/JobtitleAPI';

const JobTitle = () => {
    const dispatch = useDispatch();
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [getfterender, setgetfterender] = useState('')
 
    const [renderfte, setrenderfte] = useState(false);
    const rerender=()=>{
      setgetfterender(true);
    }
    const [popupMessage, setPopupMessage] = useState('');
    const [popupVisible, setPopupVisible] = useState(false);
    const handleCheckboxChange = (isChecked) => {
      setIsCheckboxChecked(isChecked);
    };
    const [name, setName] = useState(' ');
    const [Description, setDescription] = useState(' ');
    
    const [depid, setdepid] = useState({
        name: name,
        Description: Description,
        // departmentId: ''
      });
      

    
    
    

     

  return (
    <div className='toolbarbody ms-2'>
    <div className="designationlist m-2 mt-0">
      <div className="page-body px-sm-4 mt-0">
        <div class="">
                <JobtitleAPI/>
                <div class=" ps-0" >
         <div class="page-body  mt-0 pt-0 ">
         <div
        className="d-flex gap-2 mt-2"
      >
        <div className='formwidth1 '>
          <div className='ps-0 ms-0'>
           <JobTitlefte isCheckboxChecked={isCheckboxChecked} rerender={rerender}  setgetfterender={setgetfterender}  setrenderfte={setrenderfte}  renderfte={renderfte}/>
          </div>
        </div>
        <div className='formwidth2'>
        <Jobtitleorganizationlist getfterender={getfterender} />
         <Summary   onCheckboxChange={handleCheckboxChange} />
        </div>
      </div>
    </div>
    </div>
            </div>
        </div>
    </div>  
    </div> 

  )
}

export default JobTitle
