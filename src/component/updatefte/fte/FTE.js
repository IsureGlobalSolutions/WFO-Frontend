import React, { useEffect, useState, useRef } from 'react';
import './fte.css';
import { useDispatch , useSelector } from 'react-redux';
import { addEditFte, getFteData, deleteFteData } from '../../redux/features/auth/authSlice';
import Stickyheader from '../upperheader/Stickyheader';
import { FaPlusSquare } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { RxCrossCircled } from "react-icons/rx";
import { GiLobArrow } from "react-icons/gi";
import { RiQuestionMark } from "react-icons/ri";

import dayjs from 'dayjs';
function FTE() {
    const dispatch = useDispatch();
    // const timePickerRef = useRef(null);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const [errorMessage, setErrorMessage] = useState('');
    // const [errorworkingMessage, seterrorworkingMessage] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);
    const [datalist, setdatalist] = useState([])
    const [latestfte, setlatestfte] = useState()
    const [showErrorMessage, setShowErrorMessage] = useState('');
    // const [showworkingErrorMessage, setShowworkingErrorMessage] = useState(true);

    // const [delete, setdelete] = useState()

    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(false);

    const inputRef = useRef([]);
    const workingRef = useRef([]);
    const timeRef = useRef([]);
    const toggleContainerRef = useRef(null);

    const selectRef = useRef([]);

    const [selectedTimer, setSelectedTimer] = React.useState(null);
    const [deleteTrigger, setDeleteTrigger] = useState(false);
    const [updateget, setupdateget] = useState(false);


    const handleTimeChange = (time) => {
      setSelectedTimer(time);
    };
    const handleRemoveCustomField = (fieldType, index) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            fte: {
                ...prevValues.fte,
                [fieldType]: prevValues.fte[fieldType].filter((_, i) => i !== index),
            },
        }));
    };
    const handleworkingRemoveCustomField = (fieldType, index) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            fte: {
                ...prevValues.fte,
                [fieldType]: prevValues.fte[fieldType].filter((_, i) => i !== index),
            },
        }));
    };
  

    const addBtnClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Stop the event from propagating to the document body
        setToggle(true);
        setShowErrorMessage(true);

    };
    const workingbtnclick = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Stop the event from propagating to the document body
        setToggle1(true);
        setErrorMessage(true);


    };
   const [showTable, setShowTable] = useState(false);

    const handleDelete = async (id) => {
        try {
            await dispatch(deleteFteData(id));
            console.log("delete ", id)
            setDeleteTrigger((prev) => !prev);
        } catch (error) {
            console.error('Error deleting FTE:', error);
        }
        // window.location.reload();

    };
    const fetchFTEData = async () => {

     try {
        dispatch(getFteData())
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
        console.error('Error fetching FTE data:', error);
      }
    }
      useEffect(() => {
        fetchFTEData();
      }, []);
    
    useEffect(() => {

                if (updateget || deleteTrigger ) {
                    dispatch(getFteData())
                        .then((response) => {
                            console.log(response, "getdatalist");
                            setdatalist(response.payload);
                            response?.payload?.map((element, i) => {
                                if (response?.payload?.length - 1 === i) {
                                    setlatestfte(element);
                                }
                            });
                        });
                    
                    // Reset updateget after using it
                    setupdateget(false);
                } 

    }, [deleteTrigger ,isLoggedIn , updateget ]

    )
    console.log(datalist, "datalist")
   
   
    const [formValues, setFormValues] = useState({
        fte: {
            id:0,
            workingHours: 2,
            breakHours: 2,
            workingDays: 3,
            totalAwayDays: 4,
            totalLeaves: 11,
            FTEName: "Test1FTcEsss",
            utilization: 0,
            gazettedHolidays: 3,
            annualLeaves: 4,
            sickLeaves: 3,
            additionalLeaves: 12, 
            casualLeaves: 1,
            breakCustomFields: [
                {
                    fieldName: "Prayer",
                    fieldValue: "00:30"
                }
            ],
            leavesCustomFields: [
                {
                    fieldName: "Emergency",
                    fieldValue: "2"
                }
            ],
            // departmentId: '', // Uncomment if departmentId is required
            fte: 2.0 // Ensure fte field is a double
        }
    });
    
    const transformFormData = (formData) => {
        return {
            fte: {
                id: 0,
                // createdDate: new Date().toISOString(),
                // modifiedDate: new Date().toISOString(),
                // createdBy: "string",
                // modifiedBy: "string",
                workingHours: parseInt(formData.fte.workingHours, 10) || 0,
                breakHours: parseInt(formData.fte.breakHours, 10) || 0,
                workingDays: parseInt(formData.fte.workingDays, 10) || 0,
                totalAwayDays: parseInt(formData.fte.totalAwayDays, 10) || 0,
                totalLeaves: parseInt(formData.fte.totalLeaves, 10) || 0,
                fteName: formData.fte.FTEName, 
                gazettedHolidays: parseInt(formData.fte.gazettedHolidays, 10) || 0,
                annualLeaves:parseInt(formData.fte.annualLeaves, 10) || 0,
                sickLeaves:parseInt(formData.fte.sickLeaves, 10) || 0,
                addtionalLeaves: parseInt(formData.fte.addtionalLeaves, 10) || 0,
                casualLeaves :parseInt(formData.fte.casualLeaves, 10) || 0,
                breakCustomFields: formData.fte.breakCustomFields.map((field) => ({
                    fieldName: field.fieldName,
                    fieldValue: field.fieldValue ,
                })),
                leavesCustomFields: formData.fte.leavesCustomFields.map((field) => ({
                    fieldName: field.fieldName,
                    fieldValue: Number(field.fieldValue),
                })),
                departmentId: 1,
                cancelled: true,
                fte: 0,
                utilization: 0,

            }
        };
    };
    
    const handleAddCustomField = (leavesCustomFields) => {
        // Check if label and type are filled for the new custom field
        const newFieldLabel = inputRef.current[0].value.trim();
        const newFieldType = selectRef.current[0].value;

        if (newFieldLabel && newFieldType ) {
            // If both label and type are filled, proceed to add the custom field
            const newCustomField = {
                fieldName: newFieldLabel,
                type: newFieldType,
                fieldValue: newFieldType, // You can set an initial value if needed
            };

            setFormValues((prevFormValues) => ({
                ...prevFormValues,
                fte: {
                    ...prevFormValues.fte,
                    [leavesCustomFields]: [...prevFormValues.fte[leavesCustomFields], newCustomField],
                },
            }));

            // Reset the input fields and toggle state
            inputRef.current[0].value = '';
            selectRef.current[0].value = '';
            setToggle(false);
            setShowErrorMessage(false);
       console.log(newFieldType , "inputag")
            // Clear any previous error message
            setShowErrorMessage('');
        } else {
            // Display an error message if any of the fields are empty
            if (showErrorMessage) {
                setShowErrorMessage("Please fill both feild");
            }
        }
    };
    const handleAddWorkingCustomField = (breakCustomFields) => {
        const newFieldLabel = workingRef.current[0].value.trim();
        const newFieldType = timeRef.current[0].value;
        const dtime = dayjs(selectedTime).format('HH:mm').trim();
        console.log(dtime)
        if (newFieldLabel  &&  dtime) {
            const formattedTime = dayjs(dtime, 'HH:mm').format('HH.mm');

            const newworkingCustomField = {
                fieldName: newFieldLabel,
                type: newFieldType,
                fieldValue: formattedTime,
                // selectedTime: selectedTime,
            };

            setFormValues((prevFormValues) => ({
                ...prevFormValues,
                fte: {
                    ...prevFormValues.fte,
                    [breakCustomFields]: [...prevFormValues.fte[breakCustomFields], newworkingCustomField],
                },
            }));

            workingRef.current[0].value = '';
            timeRef.current[0].value = '';
            setToggle1(false);
            setErrorMessage('');

        } else {
            if (errorMessage) {
                setErrorMessage("Please fill both feild");
            }        }
        // setToggle1(false);

    };
    const handleCustomFieldChange = (fieldType, index, fieldName, fieldValue) => {

        setFormValues((prevValues) => ({
            ...prevValues,
            fte: {
                ...prevValues.fte,
                [fieldType]: prevValues.fte[fieldType].map((field, i) =>
                    i === index ? { ...field, [fieldName]: fieldValue } : field
                ),
            },
        }));
    };
    const handleWorkingFieldChange = (fieldType, index, fieldName, fieldValue) => {
        console.log(fieldType, "feild")
        setFormValues((prevValues) => ({
            ...prevValues,
            fte: {
                ...prevValues.fte,
                [fieldType]: prevValues.fte[fieldType].map((field, i) =>
                    i === index ? { ...field, [fieldName]: fieldValue } : field
                ),
            },
        }));
    };

    const handleSubmit = () => {
        console.log("datappost");

        // Transform formValues before dispatching
        const transformedData = transformFormData(formValues);

        // Dispatch the addEditFte action with transformed data
        dispatch(addEditFte(transformedData.fte));

        setupdateget(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            fte: {
                ...formValues.fte,
                [name]: value
            }
        });
    };
    const handleButtonClick = () => {
        setShowTable(!showTable);
    };
    

    return (
        <>
            {/* <div className=' pt-2 pb-2' style={{ backgroundColor: 'rgb(243, 242, 245)' }}>
                <Stickyheader />
            </div> */}
            {/* <div className='ms-4 ps-2 mt-3 fte  '> Department  (FTE)</div> */}
           
            <div className='d-flex gap-0 ms-2'>
               <div>
                
               <div
      className="container shadow pb-3 pt-1 bg-white rounded"
      style={{ height: "max-content", border: "1px dashed lightgray" }}
    >                 <div
    className="d-flex justify-content-between align-items-center mt-3 border rounded-top p-3"
    style={{ borderColor: "lightgray" }}
  >
           <label htmlFor="inputPassword6" className="w-50 me-2">
          FTE Name
        </label>

        <div className="tool__container">
          <input
            type="text"
            className="form-control rounded opacity-50 w-100"
            placeholder="FTEName"
            id="FTEName"
            name='FTEName'
            value={formValues.fte.FTEName}
            onChange={handleInputChange} 
          />
          <span className="tool__text">FTE Name</span>
        </div>      </div>
      <div
        className=" mt-1 border rounded p-3"
        style={{ borderColor: "lightgray" }}
      >
          <div className="text-warning ">CalCulate FTE</div>

          <div className="tool__container w-100 mt-4">
          <input
            className="form-control mb-3 opacity-50 py-3 "
            type="number"
            placeholder="Daily Working Hours"
            id="workingHours"
            name='workingHours'
            value={formValues.fte.workingHours}
            onChange={handleInputChange}
          />
          <span className="tool__text">Daily Working Hours</span>
        </div>
                    <div className="table-container tablecontainer" >
                    <div className="d-flex mb-2">
          <div className="tool__container w-100">
            <input
              type="number"
              className="form-control opacity-50 py-3"
              style={{ borderRadius: "5px 0 0 5px" }}
              id="breakHours"
              name='breakHours'
              value={formValues.fte.breakHours}
              onChange={handleInputChange}
              placeholder="Daily Break Hours"
            />
            <span className="tool__text">Daily Break Hours</span>
         
          </div>

          <button
            className="btn btn-outline-secondary bg-secondary text-white"
            style={{ borderRadius: "0 5px 5px 0" }}
            type="button"
            id="button-addon2"
            onClick={workingbtnclick} 

          >
            Add
          </button>
        </div>
                    
        <div ref={toggleContainerRef} className='mt-0 mb-2 pt-0 widtharea'>
            {!toggle1 ? (
                <div></div>
               
            ) : (
                <>
                     <div className="dialog-box d-flex mt-0 pt-0 ms-0 ps-0 w-100">
                <input
                    type="text"
                    placeholder="type"
                    className="inputtaglabel ms-0"
                    ref={(el) => (workingRef.current[0] = el)}
                    style={{ width: '76px', height: '34px', marginTop: '8px' , borderRadius:'4px 0px 0px 4px'}}
                />
                <div style={{ width: '110px', height: '34px'  }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <div className='pt-0 mt-0' style={{ height: '60px', marginTop: '0px', paddingTop: 'none' , paddingLeft:'0px' }}>
                            <TimePicker
    ref={(el) => (timeRef.current[0] = el)}
    onChange={(newValue) => setSelectedTime(newValue)}
    className='timepicker d-flex w-100 pt-0 mt-0 ms-0 ps-0'
    label="Clock"
    ampm={false}  
    seconds={false}  
    minutesStep={15}  
    viewRenderers={{
        hours: renderTimeViewClock,
        minutes: renderTimeViewClock,
    }}
/>

                            </div>
                        </DemoContainer > 
                    </LocalizationProvider>
                </div>
                <button
            className="btn btn-outline-secondary bg-secondary text-white"
            onClick={() => handleAddWorkingCustomField('breakCustomFields')}
                    style={{ width: '50px', height: '34px', marginTop: '8px'  ,  borderRadius:'0px 4px 4px 0px'  }}
                >
                    Add
                </button>
            </div>
                    <div>
                        {errorMessage && (
                            <div className="ms-0" style={{ color: 'orange', marginTop: '5px'  , fontSize:"11px"}}>
                                {errorMessage}
                            </div>
                        )}
                    </div>
                </>
            )}
            
        </div>
             {formValues.fte.breakCustomFields.map((field, index) => (
                
           <div key={index} className="fiel d-flex align-items-center mb-2">
        

    
           <input 
               className="labelfei  form-control flex-grow-1"
               htmlFor={`FieldName-${index}`}
               value={field.fieldName}
               style={{
                borderRadius: '4px 0px 0px 4px',
                border: '1px solid grey',
                height: '34px',
                width: '30px',
            }}

           />
           <input
               id={`fieldName-${index}`}
               type={field.type}
               value={field.fieldValue}                 
               onChange={(e) => handleWorkingFieldChange('breakCustomFields', index, 'fieldValue', e.target.value)}
               className="input   form-control  flex-grow-1"
               style={{
                   borderRadius: '1px',
                   border: '1px solid grey',
                   height: '34px',
                   width: '30px',
               }}
               placeholder={`add value in ${field.type}`}
           />
           <div className="p-0  m-0 col-lg-2 ms-4 d-flex justify-content-end align-items-center">
           <button
            className="btn   btn-outline-secondary bg-secondary text-white"
            style={{ borderRadius: "0 4px 4px 0" , height:"34px" ,}}
            type="button"
            id="button-addon2"
            onClick={() => handleworkingRemoveCustomField('breakCustomFields', index)}
          >
            Delete
          </button>
               {/* <RxCrossCircled className="formicon"  /> */}
           </div>
       </div>
       
            
            ))}
                        {/* <div className=' mt-4 p-0 pe-0 pt-0'>

                             <div>
                             <label className="ms-3  d-flex">
                    <span>
                        <input
                            type="text"
                            id="breakHours"
                            name="breakHours"
                            placeholder="Break hours"
                            value={formValues.fte.breakHours}
                            onChange={handleInputChange}
                            style={{
                                paddingLeft: '7px',
                                border: '1px solid grey',
                                height: '34px',
                                width: '200px',
                                borderRadius: '5px 0px 0px 5px',
                            }}
                        />
                    </span>
                    <span className="p-0 m-0 d-flex justify-content-center align-items-center" style={{
                        paddingLeft: '2px',
                        borderRadius: '0px 5px 5px 0px',
                        backgroundColor: 'rgb(243, 242, 245)',
                        border: '1px solid grey',
                        width: '61px',
                    }}>
                        
                        <FaPlusSquare className="formiconplus" onClick={workingbtnclick} />
                    </span>
                </label>
                <div ref={toggleContainerRef}>
            {!toggle1 ? (
                <div></div>
               
            ) : (
                <>
                     <div className="dialog-box d-flex mt-0 pt-0">
                <input
                    type="text"
                    placeholder="type"
                    className="inputtaglabel ms-3"
                    ref={(el) => (workingRef.current[0] = el)}
                    style={{ width: '100px', height: '34px', marginTop: '8px' }}
                />
                <div style={{ width: '110px', height: '34px' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimePicker']}>
                            <div className='pt-0 mt-0' style={{ height: '60px', marginTop: '0px', paddingTop: 'none' , paddingLeft:'0px' }}>
                            <TimePicker
    ref={(el) => (timeRef.current[0] = el)}
    onChange={(newValue) => setSelectedTime(newValue)}
    className='timepicker d-flex w-100 pt-0 mt-0 ms-0 ps-0'
    label="Clock"
    ampm={false}  
    seconds={false}  
    minutesStep={15}  
    viewRenderers={{
        hours: renderTimeViewClock,
        minutes: renderTimeViewClock,
    }}
/>

                            </div>
                        </DemoContainer > 
                    </LocalizationProvider>
                </div>
                <button
                    className="addbuttonfte"
                    onClick={() => handleAddWorkingCustomField('breakCustomFields')}
                    style={{ width: '50px', height: '34px', marginTop: '8px' }}
                >
                    Add
                </button>
            </div>
                    <div>
                        {errorMessage && (
                            <div className="ms-3" style={{ color: 'black', marginTop: '5px' }}>
                                {errorMessage}
                            </div>
                        )}
                    </div>
                </>
            )}
            
        </div>
             {formValues.fte.breakCustomFields.map((field, index) => (
                <div key={index} className="field">
                    <div className='d-flex'>
                        <label
                            className="labelfeil ms-4 mt-2 ps-4 col-md-7 col-lg-5 col-sm-7"
                            type="text"
                            placeholder="Field Name"
                            value={field.fieldName}
                            onChange={(e) => handleWorkingFieldChange('breakCustomFields', index, 'fieldName', e.target.value)}
                        >
                            {field.fieldName}
                        </label>
                        <div className="p-0 mt-1 m-0 col-lg-4  ms-4  d-flex justify-content-end align-items-center">
                            <RxCrossCircled className="formicon" onClick={() => handleworkingRemoveCustomField('breakCustomFields', index)} />
                        </div>
                       
                    </div>
                    <input
                        type={field.type}
                        value={field.fieldValue}                 
                               onChange={(e) => handleWorkingFieldChange('breakCustomFields', index, 'fieldValue', e.target.value)}
                        className="inputtag  mt-1 mb-1"
                        style={{
                            borderRadius: '5px',
                            border: '1px solid grey',
                            height: '30px',
                            marginLeft:'45px', 
                            width: '230px',
                        }}
                        placeholder={`add value in ${field.type}`}
                    />
                </div>
            ))}
         
        </div>
                           
                        </div> */}
                         <div className="tool__container w-100">
          <input
            className="form-control mb-3 opacity-50 py-3"
            type="number"
            placeholder="Weekly Working Days"
            id="workingDays"
            name='workingDays'
            value={formValues.fte.workingDays}
            onChange={handleInputChange}
          />
          <span className="tool__text">Weekly Working Days</span>
        </div>

        <div className="d-flex align-items-center">
          Gazetted Holidays
          <div className="tool__container">
            <RiQuestionMark />
            <span className="tool__text">
              Kashmir Solidarity Day 1 Pakistan Day 1 Labour Day 1 Independence
              Day 1 Iqbal Day 1 Quaid-e-Azam Day 1 Eid-ul-fitar 3 Eid-ul-Adha 3
              Milad ul Nabi 1 Ashura 2
            </span>
          </div>
        </div>

        <div className="d-flex h-40 overflow-hidden mb-3">
          <div className="col-sm">
            <select
              className="form-select "
              id="specificSizeSelect"
              style={{ borderRadius: "5px 0 0 5px" }}
            >
              <option defaultValue>South Asia</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col-sm d-flex ">
            <select
              className="form-select"
              style={{ borderRadius: "0 0 0 0" }}
              id="specificSizeSelect"
            >
              <option defaultValue>Pakistan</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <div
              className="d-flex align-items-center rounded-end bg-secondary text-white"
              style={{
                padding: "0px 9px",
              }}
            >
              15
            </div>
          </div>
        </div>

        <div className="tool__container w-100">
          <input
            className="form-control mb-3 opacity-50 py-3"
            type="number"
            placeholder="Annual Leaves"
            id="annualLeaves"
            name='annualLeaves'
            value={formValues.fte.annualLeaves}
            onChange={handleInputChange}

          />
          <span className="tool__text">Annual Leaves</span>
        </div>

        <div className="tool__container w-100">
          <input
            className="form-control mb-3 opacity-50 py-3"
            type="number"
            placeholder="Sick Leaves"
            id="sickLeaves"
            name='sickLeaves'
            value={formValues.fte.sickLeaves}
            onChange={handleInputChange}
          />
          <span className="tool__text">Sick Leaves</span>
        </div>

        <div className="tool__container w-100">
          <input
            className="form-control mb-3 opacity-50 py-3"
            type="number"
            placeholder="Casual Leaves"
            id="casualLeaves"
            name='casualLeaves'
            value={formValues.fte.casualLeaves}
            onChange={handleInputChange}
          />
          <span className="tool__text">Casual Leaves</span>
        </div>
                         {/* <input
          className="form-control mb-2"
          type="text"
          placeholder="Weekly Working Days"
        />
         <p>Gazetted Holidays?</p>
        <div className="d-flex h-40 overflow-hidden gap-1">
          <div className="col-sm">
            <select className="form-select" id="specificSizeSelect">
              <option defaultValue>South Asia</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-sm d-flex ">
            <select
              className="form-select"
              style={{ borderRadius: "5px 0 0 5px" }}
              id="specificSizeSelect"
            >
              <option defaultValue>Pakistan</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div
              className="d-flex align-items-center rounded-end bg-secondary text-white"
              style={{
                padding: "0px 9px",
              }}
            >
              15
            </div>
          </div>
        </div>
        <input
          className="form-control my-3 "
          type="text"
          placeholder="Annual Leaves"
        />
        <input
          className="form-control mb-3 "
          type="text"
          placeholder="Sick Leaves"
        />
        */}
      
        
        <div className="d-flex mb-3">
          <div className="tool__container w-100">
            <input
              type="number"
              className="form-control opacity-50 py-3"
              style={{ borderRadius: "5px 0 0 5px" }}
              placeholder="Other Away Days"
            name='totalAwayDays'
            id='totalAwayDays'
              value={formValues.fte.totalAwayDays}
              onChange={handleInputChange}
            />
            <span className="tool__text">Other Away Days</span>
          </div>

          <button
            className="btn btn-outline-secondary bg-secondary text-white"
            style={{ borderRadius: "0 5px 5px 0" }}
            type="button"
            id="button-addon2"
            onClick={addBtnClick}

          >
            Add
          </button>
        </div>
              <div className='widtharea'>

        {!toggle ? (
                                <div></div>
                               
                            ) : (
                                <>
                                <div className="dialog-box d-flex mt-2 ">
                                    <input
                                        type="text"
                                        placeholder="type"
                                        className="inputtaglabel ms-0"
                                        style={{
                                            borderRadius: '4px 0 0 4px',
                                            border: '1px solid grey',
                                            height: '34px',
                                            width: '90px',
                                        }}
                                        ref={(el) => (inputRef.current[0] = el)}
                                    />
                                    <input
                                        ref={(el) => (selectRef.current[0] = el)}
                                        placeholder='Add Days'
                                        className="ps-2"
                                        style={{
                                            borderRadius: '0px 0 0 0px',
                                            border: '1px solid grey',
                                            height: '34px',
                                            width: '90px',
                                        }}
                                    />
                                       
                                     
                                    
                                    <button
            className="btn btn-outline-secondary bg-secondary text-white"
            onClick={() => handleAddCustomField('leavesCustomFields')}
            style={{ width: '55px', height: '34px' , borderRadius: '0px 4px 4px  0px',
 }}

            >
                                        Add
                                    </button>
                                </div>
                                  <div>
                                  {showErrorMessage && (
                            <div className="ms-0" style={{ color: 'orange', marginTop: '5px'  , fontSize:"11px"}}>
                            {showErrorMessage}
                                        </div>
                                    )}
                                  </div>
                                  </>
                            )}

                            {formValues.fte.leavesCustomFields.map((field, index) => (
                                
                             <div key={index} className="fiel d-flex align-items-center mb-2">                                
                                        <input
               className="  form-control flex-grow-1"
               type="text"
                                            placeholder="Field Name"
                                            value={field.fieldName}
                                            style={{
                                                borderRadius: '4px 0 0 4px',
                                                border: '1px solid grey',
                                                height: '34px',
                                                width: '85px',
                                            }}
                                            onChange={(e) =>
                                                handleCustomFieldChange('leavesCustomFields', index, 'fieldName', e.target.value)
                                            }
                                       />
                                       <div>
                                       <input
                                        type={field.type}
                                        value={field.fieldValue}
                                        onChange={(e) =>
                                            handleCustomFieldChange('leavesCustomFields', index, 'fieldValue', e.target.value)
                                        }
                                        className="input   form-control  flex-grow-1"
                                        style={{
                                            borderRadius: '0px',
                                            border: '1px solid grey',
                                            height: '34px',
                                            width: '78px',
                                        }}
                                        placeholder={`add days`}
                                    />
                                        </div>
                                   
                                        <div className="p-0  m-0  d-flex justify-content-end align-items-center">
                                        <button
         className="btn   btn-outline-secondary bg-secondary text-white"
         style={{ borderRadius: "0 4px 4px 0" , height:"34px" ,}}
         type="button"
         id="button-addon2"
         onClick={() => handleRemoveCustomField('leavesCustomFields', index)}
         >
         Delete
       </button>
                                        </div>
                                    
                                   

                                </div>
                            ))}
                                    </div> 

                        {/* <div className='mt-4 p-0 pe-0 pt-0  '>
                        <div className="ms-3 labeltag"> Total Leaves</div>

                        <label className="ms-3  me-3 d-flex "

>
    <input
    type="text"
    id="totalLeaves"
    name="totalLeaves"
    placeholder="Total leaves"
    value={formValues.fte.totalLeaves}
    onChange={handleInputChange}
    style={{
        paddingLeft: '7px',
        border: '1px solid grey', 
        height: '34px', 
        width: '200px',
        borderRadius:'5px 0px 0px 5px'
    }}
/>
    <span className="p-0 m-0  d-flex justify-content-center align-items-center"
        style={{
            paddingLeft: '2px',
            borderRadius:'0px 5px 5px 0px' ,
            backgroundColor: 'rgb(243, 242, 245)',
            border: '1px solid grey',
            width:'61px'
        }}
    >
        <FaPlusSquare className="formiconplus" onClick={addBtnClick} />
    </span>
</label>
                            {!toggle ? (
                                <div></div>
                               
                            ) : (
                                <>
                                <div className="dialog-box  mt-2">
                                    <input
                                        type="text"
                                        placeholder="type"
                                        className="inputtaglabel ms-3"
                                        ref={(el) => (inputRef.current[0] = el)}
                                    />
                                    <input
                                        ref={(el) => (selectRef.current[0] = el)}
                                        placeholder='Add Days'
                                        className="inputlabel2 ps-2"
                                    />
                                       
                                     
                                    
                                    <button className="addbuttonfte" onClick={() => handleAddCustomField('leavesCustomFields')}>
                                        Add
                                    </button>
                                </div>
                                  <div>
                                  {showErrorMessage && (
                                        <div className="ms-3" style={{ color: 'black', marginTop: '5px' }}>
                                            {showErrorMessage}
                                        </div>
                                    )}
                                  </div>
                                  </>
                            )}

                            {formValues.fte.leavesCustomFields.map((field, index) => (
                                <div key={index} className="field ">
                                    <div className='d-flex'>
                                        <label
                                            className="labelfeil ms-4 ps-4 mt-2 col-md-7 col-lg-5 col-sm-7"
                                            type="text"
                                            placeholder="Field Name"
                                            value={field.fieldName}
                                            onChange={(e) =>
                                                handleCustomFieldChange('leavesCustomFields', index, 'fieldName', e.target.value)
                                            }
                                        >{field.fieldName}</label>
                                        <div className="p-0 mt-1 m-0 col-lg-5 d-flex justify-content-end align-items-center">
                                            <RxCrossCircled className="formicon"
                                                onClick={() => handleRemoveCustomField('leavesCustomFields', index)}

                                            />
                                        </div>
                                    </div>
                                    <input
                                        type={field.type}
                                        value={field.fieldValue}
                                        onChange={(e) =>
                                            handleCustomFieldChange('leavesCustomFields', index, 'fieldValue', e.target.value)
                                        }
                                        className="inputtag  mt-1 mb-1"
                                        style={{
                                            borderRadius: '5px',
                                            border: '1px solid grey',
                                            marginLeft:'45px', 
                                            height: '30px',
                                            width: '230px',
                                        }}
                                        placeholder={`add days`}
                                    />

                                </div>
                            ))}
                        </div> */}
                        {/* <div className='mt-4 d-flex flex-column'>
                        <div className="ms-3 labeltag">Working days </div>

                            <div className='ms-3 '>
                                <input
                                    type="text"
                                    id="workingDays"
                                    name="workingDays"
                                    placeholder="Working days"
                                    value={formValues.fte.workingDays}
                                    onChange={handleInputChange}
                                    style={{
                                        paddingLeft: '7px',
                                        borderRadius: '5px',
                                        border: '1px solid grey',
                                        height: '34px',
                                        width: '260px',
                                        marginTop: '2px'
                                    }}
                                />
                            </div>
                        </div> */}
                        {/* <div className='mt-1 d-flex flex-column'>
                            <div className='ms-3'>
                                <input
                                    type="text"
                                    id="addtionalLeaves"
                                    name="addtionalLeaves"
                                    placeholder="Additional Away Days"
                                    value={formValues.fte.addtionalLeaves}
                                    onChange={handleInputChange}
                                    style={{
                                        borderRadius: '5px',
                                        paddingLeft: '7px',
                                        border: '1px solid grey', // Main div border color
                                        height: '34px', // Adjusted height
                                        width: '260px',
                                        marginTop: '2px'

                                    }}
                                />
                            </div>
                        </div> */}
                         <div className="ms-1 mt-2">
          <button className="bg-danger border-0 me-2 rounded p-2 text-white"
            onClick={handleSubmit}
          >
            Add
          </button>
          <button className="bg-secondary border-0 rounded p-2 text-white">
            Rest
          </button>
        </div>
                        {/* <div className='mt-4 d-flex flex-column'>
                            <div className=' d-flex flex-column col-lg-4 ms-3 mb-2'>
                                <button type="button" className="submitbutton"
                                    onClick={handleSubmit}>Submit</button>
                            </div>
                        </div> */}
                    </div>
                </div>
               </div>
               </div>
                {/* <div className="historycard col-lg-9 col-md-8 col-xl-9 col-sm-6 ps-0 ms-3" style={{ backgroundColor: 'white', borderWidth: '1px', borderRadius: '5px' }}>
                    <table className="table mb-0 " style={{ borderRadius: '10px', backgroundColor: 'rgba(224, 220, 220, 0.921)' }}>
                        <thead>
                            <tr>
                                <th colSpan="6 " className='ms-4 ps-3 headingfte2' style={{ backgroundColor: 'rgba(224, 220, 220, 0.921)' }}>
                                    Your FTE history
                                </th>
                            </tr>
                        </thead>
                    </table>
                    <div className="table-container tablecontainer" >

                        <table className="table table-hover" >
                            <tbody style={{}}>

                                <tr className=''>
                                    <td style={{ border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '600', textAlign: 'center', width: '50px', padding: '12px', fontSize: '13px', letterSpacing:"0.6px"     }}>#</td>
                                    <td style={{ border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '600', textAlign: 'center', padding: '12px', fontSize: '13px',  letterSpacing:"0.6px"}}> Working hours</td>
                                    <td style={{ border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '600', textAlign: 'center', padding: '12px', fontSize: '13px', letterSpacing:"0.6px" }}>Breaking hours</td>
                                    <td style={{ border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '600', textAlign: 'center', padding: '12px', fontSize: '13px',  letterSpacing:"0.6px"}}>Working days</td>
                                    <td style={{ border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '600', textAlign: 'center', padding: '12px', fontSize: '13px', letterSpacing:"0.6px" }}>Total leave days</td>
                                    <td style={{ border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '600', textAlign: 'center', padding: '12px', fontSize: '13px', letterSpacing:"0.6px" }}>Calculated  FTE</td>
                                    <td style={{ border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '600', textAlign: 'center', padding: '12px', fontSize: '13px',  letterSpacing:"0.6px"}}>Delete</td>
                                </tr>
                                {datalist?.length > 0 ?
                                    datalist?.map((item, id) => {
                                        return (
                                            <tr key={id}>
                                                <td style={{ backgroundColor: 'white', border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '500', textAlign: 'center', padding: '13', letterSpacing: '0.6px', fontSize: '12px', }}>{item.id}</td>
                                                <td style={{ backgroundColor: 'white', border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '500', textAlign: 'center', padding: '13', letterSpacing: '0.6px', fontSize: '12px', }}>{item.workingHours}</td>
                                                <td style={{ backgroundColor: 'white', border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '500', textAlign: 'center', padding: '13', letterSpacing: '0.6px', fontSize: '12px', }}>{item.breakHours}</td>
                                                <td style={{ backgroundColor: 'white', border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '500', textAlign: 'center', padding: '13', letterSpacing: '0.6px', fontSize: '12px', }}>{item.workingDays}</td>
                                                <td style={{ backgroundColor: 'white', border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '500', textAlign: 'center', padding: '13', letterSpacing: '0.6px', fontSize: '12px', }}>{item.totalLeaves}</td>
                                                <td style={{ backgroundColor: 'white', border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '500', textAlign: 'center', padding: '13', letterSpacing: '0.6px', fontSize: '12px', }}>{item.fte}</td>
                                                <td style={{ backgroundColor: 'white', border: '1px solid black', fontfamily: 'Roboto sans-serif', fontWeight: '400', textAlign: 'center' , padding:'4px' }}>
                                                    <button type="submit" className="deletebuttonfte pt-2"
                                                        onClick={() => handleDelete(item.id)}>
                                                        <span className='pt-1' style={{fontWeight:"500"}}>Delete</span></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <div>Loading..</div>
                                }



                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>


        </>
    )
}

export default FTE