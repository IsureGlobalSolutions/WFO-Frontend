import React, { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import './setting.css';
import { TiTick } from "react-icons/ti";
const Settingbox = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
  return (
    <div>
    <div className="your-card1">
      <div className="card-content" >
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
            <hr className='linetag '  style={{ opacity: 0.5 }}/>
        </div>
        <div className="d-flex justify-content-start ms-2 me-3 mt-3">                 
        <GoPlus className='layout2icon2' />
        <div className='name1 '>Create new Team</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Settingbox