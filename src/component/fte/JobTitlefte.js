import React, { useEffect, useState, useRef } from 'react';
import './fte.css';
import { useDispatch , useSelector } from 'react-redux';
import { addEditDesignationAPIFTE, getFteData, deleteFteData , getJobTitle , getJobTitleFteData} from '../../redux/features/auth/authSlice';
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
import { FaPlus } from "react-icons/fa";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { MdErrorOutline } from "react-icons/md";



import dayjs from 'dayjs';
function JobTitlefte( {isCheckboxChecked , rerender , setgetfterender , setrenderfte , renderfte}) {
    const dispatch = useDispatch();
    // const timePickerRef = useRef(null);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const Jobtitlename = useSelector((state) => state.auth.Jobtitlename );
    const loading = useSelector((state) => state.auth.loading);  
    const [selectedOption, setSelectedOption] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const [errorworkingMessage, seterrorworkingMessage] = useState('');
    const [selectedTime, setSelectedTime] = useState(null);
    const [datalist, setdatalist] = useState([])
    const [latestfte, setlatestfte] = useState()
    const [showErrorMessage, setShowErrorMessage] = useState('');
    // const [showworkingErrorMessage, setShowworkingErrorMessage] = useState(true);
    // const [delete, setdelete] = useState()
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
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
    const [options, setOptions] = useState([]); 
    const [depdatalist, setdepdatalist] = useState([])

    const [selectedRegion, setSelectedRegion] = useState('South Asia');
    const [selectedCountry, setSelectedCountry] = useState('Pakistan');
  
    // Define country options based on regions
    const regionToCountriesMap = {
      'South Asia': ['Pakistan'],
      'East': ['SaudiArabia', 'UAE'],
      'South': ['Canada', 'USA'],
      // Add more mappings as needed
    };
  
    // Handle change in region dropdown
    const handleRegionChange = (event) => {
      const newRegion = event.target.value;
      setSelectedRegion(newRegion);
  
      // Update country based on the selected region
      const countries = regionToCountriesMap[newRegion] || [];
      setSelectedCountry(countries.length > 0 ? countries[0] : ''); // Set default country if available
    };
  
    // Handle change in country dropdown
    const handleCountryChange = (event) => {
      setSelectedCountry(event.target.value);
    };
  
    // Get the list of countries for the currently selected region
    const countriesForSelectedRegion = regionToCountriesMap[selectedRegion] || [];
  

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

         const fetchDepdropdown = async () => {

            try {
               dispatch(getJobTitle())
                               .then((response) => {
                                   console.log(response.payload, "getsubdepdata");
                                   setdepdatalist(response.payload);
                                  
                               });
            } catch (error) {
               console.error('Error fetching FTE data:', error);
             }
           }
             useEffect(() => {
                fetchDepdropdown();
             }, []);    
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
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
    const [formValues, setFormValues] = useState({
        fte: {
            id:0,
            DesignationId:'',
            workingHours: '',
            Country:'',
            breakHours: '',
            workingDays: '',
            totalAwayDays: '',
            totalLeaves: '',
            FTEName: "",
            utilization: '',
            gazettedHolidays: '',
            annualLeaves: '',
            sickLeaves: '',
            additionalLeaves: '', 
            casualLeaves: '',
            breakCustomFields: [  ],
            leavesCustomFields: [ ],
            // departmentId: '', // Uncomment if departmentId is required
            fte: 2.0 // Ensure fte field is a double
        }
    });
    const transformFormData = (formData) => {
        return {
            fte: {
                id: 0,
                // createdDate: new Date().toISO(),
                // modifiedDate: new Date().toISOString(),
                createdBy: "admin",
                modifiedBy: "admin",
                Country:selectedCountry,
                departmentDisplay: "test",
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
                    fieldValue: field.fieldValue.replace('.', ':'),
                })),
                leavesCustomFields: formData.fte.leavesCustomFields.map((field) => ({
                    fieldName: field.fieldName,
                    fieldValue: Number(field.fieldValue),
                })),
                DesignationId:formData.fte.departmentId,
                cancelled: true,
                fte: 0,
                utilization: 0,

            }
        };
    };
  const handleDropdownOptionSelect = (option) => {
    setSelectedOption(option.name);
    // setSelectedOptionId(option.id);
    // Update formValues state with the selected departmentId
    setFormValues(prevState => ({
      ...prevState,
      fte: {
        ...prevState.fte,
        departmentId: option.id // Assign the selected department ID
      }
    }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const transformedData = transformFormData(formValues);
          const response = await dispatch(addEditDesignationAPIFTE(transformedData.fte))
          .then((response)=>{
            dispatch(getJobTitleFteData());
          })
        } catch (error) {
          setPopupMessage('Failed to create your FTE.');
        }
    }

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
    
    useEffect(() => {
      fetchDepdropdown();
      console.log(renderfte , "renderfte2")
   }, [renderfte]);
   const handleDropdowngetfte = ( ) =>{
    setrenderfte(false);
    console.log(renderfte , "renderfte3")
  
  }
  const handleResetButtonClick = () => {
    // Reset form values to initial state
    setFormValues({
      fte: {
        id:0,
        workingHours: '',
        breakHours: '',
        workingDays: '',
        totalAwayDays: '',
        totalLeaves: '',
        FTEName: "",
        utilization: '',
        gazettedHolidays: '',
        annualLeaves: '',
        sickLeaves: '',
        additionalLeaves: '', 
        casualLeaves: '',
        breakCustomFields: [
            {
                fieldName: '',
                fieldValue: ''
            }
        ],
        leavesCustomFields: [
            {
                fieldName: '',
                fieldValue: ''
            }
        ],
        // departmentId: '', // Uncomment if departmentId is required
         // Ensure fte field is a double
    }
      // Set your initial form values here
    });
    console.log("sjjsjsj" , formValues)
  
    // console.log("dndj" , setFormValues())
  
  };
  
    return (
        <>
            {/* <div className=' pt-2 pb-2' style={{ backgroundColor: 'rgb(243, 242, 245)' }}>
                <Stickyheader />
            </div> */}
            {/* <div className='ms-4 ps-2 mt-3 fte  '> Department  (FTE)</div> */}
           
            <div className='gap-0 '>
               <div>
               {popupMessage && (
                <div className='juCkip'>
                  <div className='jiZwRo'>
               <div className="popup m-4" style={{ position: 'fixed', top:"50%", left: '50%', transform: 'translate(-50%, -50%)', zIndex: '999', backgroundColor: 'white', borderRadius: '6px', Width: '100%', width: '650px' }}>
    <div className='' sx={{ width: '100%', position: 'relative' }} spacing={2}>
            <>
                            <div >
                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <div className='mt-2'>
                        <MdErrorOutline style={{ color: 'orange', fontSize: '40px' }} />
                    </div>
                    <div severity="success ps-4" style={{ fontSize: '20px' }}>{popupMessage}</div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px' , marginBottom:'10px' }}>
                    <button className="btn btn-danger close-button" onClick={() => {
                         setPopupMessage("");
                         rerender();
                        // window.location.reload();
                        // or setPopupMessage(null);
                    }}>ok</button>
                </div>
                </div>

            </>
</div>
</div>
</div>
</div>
)}

     <div
      className="container shadow pb-3 pt-1 bg-white rounded"
      style={{ height: "max-content", border: "1px dashed lightgray" }}
    >                 <div
    className="  mt-3 border rounded-top p-3"
    style={{ borderColor: "lightgray" }}
  >
        <div className='d-flex justify-content-between align-items-center'>
         <label htmlFor="inputPassword6" className=" w-50">
          JobTitle
        </label>
   
        <div className="dropdown mb-2 ">
      <button className="form-control  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"
                   onClick={() => handleDropdowngetfte()}
      >
        {selectedOption || "Select "}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      {loading && <tr><td>Loading...</td></tr>}
      {Jobtitlename?.length > 0 ? (
  Jobtitlename?.map((option, index) => {
    return (
      <li key={index}>
        {console.log(option.id, "idindex")}
        <button
          className="dropdown-item"
          onClick={() => handleDropdownOptionSelect(option)}
        >
          {option.name}
        </button>
      </li>
    );
  })
) : (
  <div >    </div>
)}
      </ul>
    </div>
</div>
         <div className='d-flex justify-content-between align-items-center'>
         <label htmlFor="inputPassword6" className="w-50 me-2">
          FTE Name
        </label>

        <div className="tool__container">
          <input
            type="text"
            className="form-control rounded opacity-50 "
            placeholder="FTEName"
            id="FTEName"
            name='FTEName'
            value={formValues.fte.FTEName}
            onChange={handleInputChange} 
          />
          <span className="tool__text">FTE Name</span>
        </div>  </div>  
          </div>
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
                    style={{ width: '96px', height: '34px', marginTop: '8px' , borderRadius:'4px 0px 0px 4px'}}
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
                    style={{ width: '70px', height: '34px', marginTop: '8px'  ,  borderRadius:'0px 4px 4px 0px'  }}
                >
                    < FaPlus style={{paddingTop:'0px'}}/>

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
                    className="inputtaglabel  form-control flex-grow-1"
                    id={`FieldName-${index}`}
                    type='text'
                    placeholder='type'
                    value={field.fieldName}
                    style={{
                     borderRadius: '4px 0px 0px 4px',
                     border: "1px solid rgba(0, 0, 0, 0.23)",
                     height: '34px',
                     width: '50px',
                 }}
     
                />
                <input
                    id={`fieldName-${index}`}
                    type={field.type}
                    value={field.fieldValue}                 
                    onChange={(e) => handleWorkingFieldChange('breakCustomFields', index, 'fieldValue', e.target.value)}
                    className="inputtaglabel  form-control  flex-grow-1"
                    style={{
                        borderRadius: '1px',
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        height: '34px',
                        width: '30px',
                    }}
                    placeholder={`add value`}
                />
                <div className="p-0  m-0 col-lg-2 ms-4 d-flex justify-content-end align-items-center">
                <button
                 className="btn   btn-outline-secondary bg-secondary text-white"
                 style={{ borderRadius: "0 4px 4px 0" , height:"34px" }}
                 type="button"
                 id="button-addon2"
                 onClick={() => handleworkingRemoveCustomField('breakCustomFields', index)}
               >
                 Delete
               </button>
                </div>
            </div>
            
                 
                 ))}
                       
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
        <div className="d-flex overflow-hidden mb-3">
      <div className="col-sm col-md-4">
        <select
          className="form-select"
          id="regionSelect"
          style={{ borderRadius: "5px 0 0 5px" }}
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="South Asia">South Asia</option>
          <option value="East">Middle East</option>
          <option value="South">North America</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="col-sm col-md-4">
        <select
          className="form-select"
          style={{ borderRadius: "0 0 0 0" }}
          id="countrySelect"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          {countriesForSelectedRegion.map((country) => (
            <option key={country} value={country}>
              {country.replace(/([A-Z])/g, ' $1').trim()} {/* Display country name in a human-readable format */}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-4">
        <input
          className="form-control opacity-50"
          type="number"
          placeholder="gazettedHolidays"
          id="gazettedHolidays"
          name="gazettedHolidays"
          value={formValues.fte.gazettedHolidays}
          onChange={handleInputChange}
          // Add appropriate value and onChange handlers as needed
        />
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
                                            border: "1px solid rgba(0, 0, 0, 0.23)",
                                            height: '34px',
                                            width: '50px',
                                        }}
                                        ref={(el) => (inputRef.current[0] = el)}
                                    />
                                    <input
                                        ref={(el) => (selectRef.current[0] = el)}
                                        placeholder='Add Days'
                                        className="ps-2"
                                        style={{
                                            borderRadius: '0px 0 0 0px',
                                            border: "1px solid rgba(0, 0, 0, 0.23)",
                                            height: '34px',
                                            width: '70px',
                                        }}
                                    />
                                       
                                     
                                    
                                    <button
            className="btn btn-outline-secondary bg-secondary text-white"
            onClick={() => handleAddCustomField('leavesCustomFields')}
            style={{ width: '55px', height: '34px' , borderRadius: '0px 4px 4px  0px',
 }}

            >
                    < FaPlus style={{paddingTop:'0px'}}/>
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
                                                border: "1px solid rgba(0, 0, 0, 0.23)",
                                                height: '34px',
                                                width: '40px',
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
                                            border: "1px solid rgba(0, 0, 0, 0.23)",
                                            height: '34px',
                                            width: '50px',
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
                         <div className="ms-1 mt-2">
                         {isCheckboxChecked ? (
  <button
    className="bg-danger border-0 me-2 rounded p-2 text-white"
    onClick={handleSubmit}
  >
    Add
  </button>
) : (
  <button
    className=" border-0 me-2 rounded p-2 text-white" 
    style={{backgroundColor:'#eaa8af'}}
    disabled
  >
    Add
  </button>
)}


          <button className="bg-secondary border-0 rounded p-2 text-white"
                    onClick={handleResetButtonClick}
                    >
                      Rest
          </button>
        </div>
                       
                    </div>
                </div>
               </div>
               </div>
              
            </div>


        </>
    )
}

export default JobTitlefte