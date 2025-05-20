import React, { useState } from 'react';
import './People.css';
import { LuContact2 } from "react-icons/lu";
import img from '../../assets/img/dashboard/Demon.jpg'
import imghr from '../../assets/img/dashboard/imgpeople.svg'
import Peopleheader from '../upperheader/Subdepartmentheader';


// ... (previous imports)

const People = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <div className='p-0' style={{backgroundColor:'rgb(243, 242, 245)'}} >
                <Peopleheader/>
            </div>
            <div className='ms-4 mt-2 ps-2 sidebarico'>
                <div className='d-flex '>
                    <LuContact2 className='sidebaricon' />
                    <div className='dropdown2 ps-2 ms-0 mt-2'>
                        <h1
                            className='dropdown-toggle toggle ms-0 ps-0'
                            href='#'
                            role='button'
                            id='dropdownMenuLink'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                        >
                            Active
                        </h1>

                        <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                            <li>
                                <a className='dropdown-item' href='#'>
                                    Schedule
                                </a>
                            </li>
                            <li>
                                <a className='dropdown-item' href='#'>
                                    Project Plan
                                </a>
                            </li>
                            <li>
                                <a className='dropdown-item' href='#'>
                                    Team
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className=" ms-4 ps-2 mt-4">
                <table className="table no-border-radius">
                    <thead>
                        <tr>
                            <th scope="col">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={handleCheckboxChange} />
                                    <div className='ps-2 mt-2 sidebarico'>
                                        <div className='d-flex '>
                                            <div className='dropdown2 ms-0 '>
                                                <h1
                                                    className='toggle1 ms-0 ps-0 mt-1'
                                                    href='#'
                                                    role='button'
                                                    id='dropdownMenuLink'
                                                    data-bs-toggle='dropdown'
                                                    aria-expanded='false'
                                                >
                                                    Name
                                                </h1>

                                                <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
                                                    <li>
                                                        <a className='dropdown-item' href='#'>
                                                            Schedule
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className='dropdown-item' href='#'>
                                                            Project Plan
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className='dropdown-item' href='#'>
                                                            Team
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th scope="col "> <span className='tabledata ms-4 ps-4'>Role</span></th>
                            <th scope="col"><span className='tabledata'>Department</span></th>
                            <th scope="col"><span className='tabledata'>Access</span></th>
                            <th scope="col"><span className='tabledata'>Manages</span></th>
                            <th scope="col"><span className='tabledata'>Department</span></th>
                            <th scope="col"><span className='tabledata'>Types</span></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr style={{ backgroundColor: 'red' }}>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={handleCheckboxChange} />
                                    <div className='ps-2 mt-2 sidebarico'>
                                        <div className='d-flex'>
                                            <div className='dropdown2 d-flex ms-0'>
                                                <div className='profile-pic-container'>
                                                    <img src={img} alt='' className='profile-pic' />
                                                </div>
                                                <h1 className='toggle1 ms-2 ps-0 mt-1'>
                                                    Name
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><span className='ms-4 ps-4 pt-4'> __ </span></td>
                            <td>__</td>
                            <td>__</td>
                            <td>__</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{ backgroundColor: 'red' }}>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={handleCheckboxChange} />
                                    <div className='ps-2 mt-2 sidebarico'>
                                        <div className='d-flex'>
                                            <div className='dropdown2 d-flex ms-0'>
                                                <div className='profile-pic-container'>
                                                    <img src={img} alt='' className='profile-pic' />
                                                </div>
                                                <h1 className='toggle1 ms-2 ps-0 mt-1'>
                                                    Name
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><span className='ms-4 ps-4 pt-4'> __ </span></td>
                            <td>__</td>
                            <td>__</td>
                            <td>__</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{ backgroundColor: 'red' }}>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={handleCheckboxChange} />
                                    <div className='ps-2 mt-2 sidebarico'>
                                        <div className='d-flex'>
                                            <div className='dropdown2 d-flex ms-0'>
                                                <div className='profile-pic-container'>
                                                    <img src={img} alt='' className='profile-pic' />
                                                </div>
                                                <h1 className='toggle1 ms-2 ps-0 mt-1'>
                                                    Name
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><span className='ms-4 ps-4 pt-4'> __ </span></td>
                            <td>__</td>
                            <td>__</td>
                            <td>__</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr style={{ backgroundColor: 'red' }}>
                            <td>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked={isChecked} onChange={handleCheckboxChange} />
                                    <div className='ps-2 mt-2 sidebarico'>
                                        <div className='d-flex'>
                                            <div className='dropdown2 d-flex ms-0'>
                                                <div className='profile-pic-container'>
                                                    <img src={img} alt='' className='profile-pic' />
                                                </div>
                                                <h1 className='toggle1 ms-2 ps-0 mt-1'>
                                                    Name
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td><span className='ms-4 ps-4 pt-4'> __ </span></td>
                            <td>__</td>
                            <td>__</td>
                            <td>__</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-center mt-4'>
               <img className='imgtag' src={imghr}/>                
            </div>
            <div className='d-flex justify-content-center '>
            <button class="btn btn-primary" type="submit">import Your Project</button>
     <div>
            </div>
            </div>
            <div className='d-flex justify-content-center mt-3'>
            <span className='link'>No Thanks</span>
            </div>
        </>
    );
}

export default People;
