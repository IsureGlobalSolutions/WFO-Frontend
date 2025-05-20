import React, { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import './notification.css'
import { TiTick } from "react-icons/ti";
import img1 from "../../assets/img/dashboard/imghr.png"
const Notificationpage = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
  return (
    <div>
    <div className="card4">
    <div className='name ms-2'>Notification</div>
      <div className='your-card3 ms-3'>
        <div className='d-flex justify-content-between ms-0'>
        <div>
            <div className="name mt-0 pt-0" style={{fontSize:'15px'}}>Help Center</div>
            {/* <div className='name2 ms-2 pb-2 mt-0'>Your float Question answered</div> */}
       </div>
       <div>
        <img src={img1} className='imgtag1 me-2' />
       </div>

        </div>
      
      </div>
      {/* <div className='your-card3 ms-3 mt-3'>
        <div className='d-flex justify-content-between ms-0'>
        <div>
            <div className="name mt-0 pt-0" style={{fontSize:'15px'}}>Help Center</div>
            <div className='name2 ms-2 pb-2 mt-0'>Your float Question answered</div>
       </div>
       <div>
        <img src={img1} className='imgtag1 me-2' />
       </div>

        </div>
      
      </div> */}
      
      {/* <div className="card-content" >
        <div className="name ms-2 mt-2">Team</div>
        <div className="d-flex justify-content-between ms-2 me-3"> 
        <div className='name1 '>Rizwan</div>
        <div > <TiTick className='sidebaricon'/> </div>
        </div>
        <div className="d-flex justify-content-start ms-2 me-3 mt-2">                 
        <IoSettingsOutline className='layout2icon2' />
        <div className='name1 '>Team Setting</div>
        </div>
        <div className='ms-2 mt-3'>
            <hr className='linetag '/>
        </div>
        <div className="d-flex justify-content-start ms-2 me-3 mt-3">                 
        <GoPlus className='layout2icon2' />
        <div className='name1 '>Create new Team</div>
        </div>
      </div> */}
    </div>
    </div>
  )
}

export default Notificationpage