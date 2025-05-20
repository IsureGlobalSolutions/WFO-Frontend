import React, { useEffect, useState, useRef } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { PiArrowsDownUpThin } from "react-icons/pi";
import { addEditFte, getJobTitleFteData, deleteJobTitleFteData } from '../../redux/features/auth/authSlice';
import { MdErrorOutline } from "react-icons/md";
import {Modal } from "react-bootstrap";

import { MdDeleteForever } from "react-icons/md";

const arrData = [
  
  "ID",
  "FTENAME",
  "WORKINGHOURS",
  "BREAKHOURS",
  "GAZETTEDHOLIDAYS",
  "ANNUALLEAVES",
  "SICKLEAVES",
  "CASUALLEAVES",
  "WORKINGDAYS",
  "TOTALFTE",
  "Delete"
];

function Jobtitleorganizationlist({getfterender}) {
  const dispatch = useDispatch();
  const JobTitleData = useSelector((state) => state.auth.JobTitleData );
  const loading = useSelector((state) => state.auth.loading);
  const [latestfte, setlatestfte] = useState()
  const [isActive, setIsActive] = useState(false);
  const [datalist, setdatalist] = useState([])
  const [updateget, setupdateget] = useState(false);
  const [deleteTrigger, setDeleteTrigger] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  
  const fetchmethod = async (e) => {
try {
  
  dispatch(getJobTitleFteData())
  .then((response) => {
      console.log(response, "getdatalist");
      setdatalist(response.payload);
      response?.payload?.map((element, i) => {
          if (response?.payload?.length - 1 === i) {
              setlatestfte(element);
          }
      });
  });
} catch (error) {
  
}
}
useEffect(() => {
fetchmethod()
}, [deleteTrigger])
useEffect(() => {
  fetchmethod();
}, [getfterender])
  
  const handleSelectFocus = () => {
    setIsActive(true);
  };

  const handleSelectBlur = () => {
    setIsActive(false);
  };
  const [deleteid, setdeleteid] = useState(null)

const conformDelete = async () => { 
  try {
    const response =  await dispatch(deleteJobTitleFteData(deleteid));
     if (response.payload.isSuccess){
        setShow(false);
     }else{
        setShow(false);
     }
      setDeleteTrigger((prev) => !prev);
  } catch (error) {
    setPopupMessage("Error occuring FTE Not Deleted")   
  }
  setdeleteid(null);
};
const [show, setShow] = useState(false);
  const handleDelete = async (id) => {
  setShow(true);
  setPopupMessage("Are you sure you want to delete this FTE? All associated files and related data will be permanently removed")
  setdeleteid(id);   
};
const handleClosedata = () => setShow(false);
  
  return (
    <>
       <Modal show={show} onHide={handleClosedata} centered>
           <Modal.Body style={{ position: 'relative' , margin:'10px'}}>
  <button type="button" className="btn-close" aria-label="Close" style={{ position: 'absolute', top: '0', right: '0' , }} onClick={handleClosedata}></button>
  <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
    <div className='mt-2'>
      <MdErrorOutline style={{ color: '#dc3545', fontSize: '40px' }} />
    </div>
    <div severity="success ps-4" style={{ fontSize: '20px' }}>{popupMessage}</div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '10px' }}>
    <button type="button" className="btn btn-danger" onClick={conformDelete}>Delete</button>
  </div>
</Modal.Body>
      </Modal>
      <div className="card   ms-1 p-2 shadow bg-white rounded h-auto" style={{ border: "1px dashed lightgray" }}>
      <p className="text-warning ms-1">JobTitle FTE List</p>
      {/* <div className="d-flex align-items-center justify-content-between mb-2 ms-2" style={{ fontSize: "15px", fontWeight: 500 }}>
        <div>
          show{" "}
          <select
            className={`pe-4 py-2 ${isActive && "text-warning border-warning"}`}
            onFocus={handleSelectFocus}
            onBlur={handleSelectBlur}
          >
            <option defaultValue>10</option>
            <option value="1">25</option>
            <option value="2">50</option>
            <option value="3">100</option>
          </select>{" "}
          entries
        </div>

        <div className=" d-flex align-items-center justify-content-center">
          <label htmlFor="validationCustom01">Search: </label>
          <input
            type="text"
            className={`form-control ms-2 ${
              isActive && "text-warning border-warning"
            }`}
            onFocus={handleSelectFocus}
            onBlur={handleSelectBlur}
            required
          />
        </div>
      </div> */}
      <div className="d-flex align-items-start overflow-scroll ">
        <table className="table mt-1 overflow-scroll table-hover">
          <thead className="">
            <tr style={{borderBottom:'1px solid #dee2e6' }}>
              {arrData?.length && arrData?.map((data, index) => (
                <th scope="col" key={index}   
                style={{ fontSize: "12px" }}>
                 
                  <div className='d-flex'>
                  <span><PiArrowsDownUpThin /> </span>
                  <span className="ms-1">{data}</span>
                  </div>
                
                </th>
              ))}
            </tr>
          </thead>
       

          <tbody
            className="overflow-scroll text-center"
            style={{ fontSize: "15px"  }}
          >
                                         {loading && <tr><td>Loading...</td></tr>}
{JobTitleData && JobTitleData?.length > 0 ?
    JobTitleData?.map((item, id) => {
        return (
            <tr key={id}>
              {/* <td style={{ borderBottom:'1px solid #dee2e6' }}> <input type="checkbox" name="checkbox" style={{ marginTop: "0px" }} /></td> */}
                <td style={{ borderBottom:'1px solid #dee2e6' }}>{item.designationId}</td>
                <td style={{ borderBottom:'1px solid #dee2e6' }}>{item.fteName}</td>
                <td style={{ borderBottom:'1px solid #dee2e6' }}>{item.workingHours}</td>
                <td style={{ borderBottom:'1px solid #dee2e6' }}>{item.breakHours}</td>
                <td style={{ borderBottom:'1px solid #dee2e6' }}>{item.gazettedHolidays}</td>
                <td style={{ borderBottom:'1px solid #dee2e6' }}>{item.annualLeaves}</td>
                <td style={{ borderBottom:'1px solid #dee2e6' }}>{item.sickLeaves}</td>
                <td style={{ borderBottom:'1px solid #dee2e6' }}>{item.casualLeaves}</td>
                <td style={{ borderBottom:'1px solid #dee2e6' }}>{item.workingDays}</td>
                <td style={{ borderBottom:'1px solid #dee2e6'
                  // backgroundColor: 'white', border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '500', textAlign: 'center', padding: '13', letterSpacing: '0.6px', fontSize: '12px', 
                  }}>{item.fte}</td>
                <td style={{ borderBottom:'1px solid #dee2e6'}}>
                <button
                                    type="button"
                                    class="btn btn-sm btn-outline-danger ms-1"
                                    onClick={() => handleDelete(item.id)}
                                  >
                                    <i class="fa fa-trash-o">
                                      {" "}
                                      <MdDeleteForever />
                                    </i>
                                  </button>
                </td>
            </tr>
        )
    })
    :

(    <tr><td colSpan="11" style={{ borderBottom: "1px solid #dee2e6" }}>No data available</td></tr>
)}
            
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}


export default Jobtitleorganizationlist