

import React, { useState, useEffect } from 'react';
import Stickyheader from "../../upperheader/Stickyheader";
import "../Estimation.css";
import { useDispatch, useSelector } from "react-redux";
import Estimationdetail from "./Estimationdetail";
import Estimationreportheader from "./Estimationreportheader";
import { Radio } from "@mui/material";
import { 
  DeparmentFTEwithid, 
  GetAllEstimationsFileByFTE, 
  GetAllEstimationsFilename, 
  GetReportcalculation 
} from "../../../redux/features/auth/authSlice";
import { useEstimation } from '../../../context/EstimationContext';
import Departmentwisedata from './Departmentwisedata';

const EstimationReport = ({ selectedModule }) => {
  const dispatch = useDispatch();
  const { ftefilename , setftefilename ,  setselectedfile , selectedfile ,  Currency , setCurrency  , selectedCategory, setSelectedCategory, selectedDepartment, setSelectedDepartment, selectedFTE, setSelectedFTE } = useEstimation();

  const [showC, setShowC] = useState(true);
  const [showd, setshowd] = useState(false);
  const FTEwithid = useSelector((state) => state.auth.FTEwithid);
  const Getfilename =useSelector((state)=>state.auth.origionalfile);
  const getexceldata = useSelector((state) => state.auth.getexceldata);
  const [Filedata, setFiledata] = useState([]);
  const [FileCustomdata, setFileCustomdata] = useState([]);
  const [Estimationreport, setEstimationreport] = useState(0);
  const [Depfiledata, setDepfiledata] = useState(0);
  const [CustomDepfiledata, setCustomDepfiledata] = useState(0)
  const [Estimationcustomreport, setEstimationcustomreport] = useState(0);
  const [isOrganizationSelected, setIsOrganizationSelected] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(selectedCategory || "");
  const [organizationfte, setorganizationfte] = useState([]);
  const [FileCustomname, setFileCustomname] = useState("");
  const [Radiobutton, setRadiobutton] = useState("O");
  const [selectoptionfte, setselectoptionfte] = useState(selectedFTE || ""); 
  const [Reportshow, setReportshow] = useState(false);

  const [topping, setTopping] = useState("Original File");
  const [isSubmitting, setisSubmitting] = useState(false);
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    // setSelectedOption(category);
    // setIsOrganizationSelected(category === "organization");
    setShowC(category !== "organization");
    setshowd(category === "organization");
    setSelectedDepartment("")
    setselectoptionfte("");
    setSelectedFTE("");
    setSelectedCategory(category);
    setCurrency("");
    // Update Context API value
  };
useEffect(() => {
  if (selectedCategory === "organization"){
    setshowd(true)
    setShowC(false)
  }
}, [selectedCategory])

  const fetchDepdropdownOrganization = async (selectedCategory) => {
    try {
      dispatch(GetAllEstimationsFileByFTE({ selectedCategory })).then(
        (response) => {
          setorganizationfte(response.payload);
        }
      );
    } catch (error) {
      console.error("Error fetching FTE data:", error);
    }
  };
  useEffect(() => {
    if (selectedCategory && selectedFTE) {
      const type = Radiobutton;
      dispatch(GetAllEstimationsFilename({ selectedCategory, fteid: selectedFTE, type }));
    }
  }, [Radiobutton, selectedCategory, selectedFTE]);
  
  useEffect(() => {
    if (selectedCategory) {
      fetchDepdropdownOrganization(selectedCategory);
    }
  }, [selectedCategory]);

  const handleSelectChange = (e) => {
    const id = e.target.value;
    // setselectedCategoryfields(id);
    dispatch(DeparmentFTEwithid({ id, selectedCategory }));
    setSelectedDepartment(id); // Update Context API value
  };
  const onOptionChange = (value) => {
    setTopping(value);
  
    if (value === "Original File") {
      setRadiobutton("O");
      setselectoptionfte("");
    } else if (value === "Customize File") {
      setRadiobutton("C");
      setselectoptionfte("");
    }
  };
  
  const handleSelectfte = (e) => {
    const fteid = e.target.value;
    const Currency = e.target.options[e.target.selectedIndex].getAttribute('name');
    let currency = "";
    if (Currency === "Pakistan") {
      currency = "PKR";
    } else if (Currency === "UAE") {
      currency = "AED";
    } else if (Currency === "SaudiArabia") {
      currency = "SAR";
    } else if (Currency === "Canada") {
      currency = "CA$";
    } else if (Currency === "USA") {
      currency = "$";
    }
    setCurrency(currency);
    setSelectedFTE(fteid); 
  };

  const handleSelectfilename = (e) => {
    const name = e.target.value;
    setftefilename(name);
    setselectedfile(name)
  };

  const handleGetcost = () => {
    const type = Radiobutton === "O" ? "O" : "C";
    setisSubmitting(true);
    
   
    dispatch(GetReportcalculation({ selectedfile, type })).then((response) => {
      if (response && response.payload && response.payload.data) {
        const blobData = response.payload.data;
         if (!Reportshow) {
      setReportshow(true);
    }
        const reader = new FileReader();
        reader.onload = () => {
          const jsonData = reader.result;
          const parsedData = JSON.parse(jsonData);
          console.log(parsedData, "parsedData");
          if (Radiobutton === "C") {
            setFiledata(parsedData.data);
            setEstimationreport(parsedData.reportCalculations);
            setDepfiledata(parsedData.variableEntityTotalReportCalculationDto)
            setisSubmitting(false);
          } else {
            setFileCustomdata(parsedData.data);
            setEstimationcustomreport(parsedData.reportCalculations);
            setCustomDepfiledata(parsedData.variableEntityTotalReportCalculationDto)
            setisSubmitting(false);

          }
        };
        reader.readAsText(blobData);
      } else {
        setisSubmitting(false);
        console.error("Response or payload is undefined or does not contain data.");
      }
    });
  };

 
  const getColumnClass = () => {
    if (showd) return 'col-md-3'; // When Organization is selected (4 items)
    if (showC) return 'col-md-2'; // When Department is selected (4 items)
    return 'col-md-3'; // Default (3 items)
  };
  return (
    <>
     
     <div className="childsection pb-2">
  <h1>Estimation </h1>
  </div>
  
  <div 
  className="d-flex p-3  topnavbar-card" 
  style={{
    backgroundColor: "#FFFFFF",
    boxShadow: "5.83px 5.83px 52.51px 0px #0000000D",
    // borderRadius: "10px",
    width: "100%",           // Full width
    justifyContent: "start", // Horizontally center content
    alignItems: "center",     // Vertically center content
    flexWrap: "nowrap",       // Prevent wrapping
    whiteSpace: "nowrap"      // Prevent text wrapping
  }}
>
  <h1 style={{ margin: 0 }}>Home</h1>
  <h1 className="ms-1 me-1" style={{ margin: 0 }}>/</h1>
  <h1 style={{ margin: 0 }}>Estimation</h1>
  <h1 className="ms-1 me-1" style={{ margin: 0 }}>/</h1>
  <h1 style={{ color: "#4880FF", margin: 0 }}>{selectedModule}</h1>
</div>
      <div
        className="pt-0 "
        
      >
        <div className=" ">
        <div className="childsectio "  style={{paddingTop:"1px"
        }}>
              <div className="">
                <div className="row g-0">
                  {["Original File", "Customize File"].map((item) => (
                    <div className="col-12 col-sm-2" key={item}>
                      <button
                        type="button"
                        className={`w-100 childbutton p-3 ${topping === item ? 'active' : ''}`}
                        onClick={() => onOptionChange(item)}
                      >
                        {item}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="  ps-4" style={{     backgroundColor: "#FFFFFF",

        }}>
  {topping === "Original File" ? (
    <div className="pt-1 pb-3 mb-0 d-flex flex-wrap">
      {/* Category Dropdown */}
      <div className={`${getColumnClass()} mb-3 pe-2`}>
        <p className="p-4 ps-0 pb-0 label-tag" >Category</p>
        <select
          id="selectcategory"
          name="selectcategory"
          className="form-select form-select-lg"
          aria-label="Default select example"
          onChange={handleCategoryChange}
          value={selectedCategory}
          style={{
            border: '0.94px solid #D6D6D6',
            color: selectedCategory ? '#000' : '#A3A3A3',
            borderRadius: '10px',
            padding: '10px 15px',
            height: '46px',
            cursor: 'pointer',
          }}
        >
          <option value="value1">Select category</option>
          <option value="organization">Organization</option>
          <option value="department">Department</option>
          <option value="subdepartment">Sub-Department</option>
          <option value="project">Project</option>
          <option value="team">Team</option>
          <option value="jobtitle">Job Title</option>
        </select>
      </div>

      {/* Department Dropdown (shown when not Organization) */}
      {showC && (
        <div className={`${getColumnClass()} mb-3 pe-2`}>
          <p className="p-4 ps-0 pb-0 label-tag" >Select {selectedCategory || "Fields"}</p>
          <select
            id="department_Dropdown"
            className="form-select form-select-lg"
            aria-label="Default select example"
            onChange={handleSelectChange}
            value={selectedDepartment}
            style={{
              border: '0.94px solid #D6D6D6',
              color: selectedDepartment ? '#000' : '#A3A3A3',
              borderRadius: '10px',
              padding: '10px 15px',
              height: '46px',
              cursor: 'pointer',
            }}
          >
            <option>Select {selectedCategory}</option>
            {organizationfte?.map((department) => (
              <option key={department.id} value={department.id} className='label-option'>
                {department.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* FTE Dropdown */}
      {(showC || showd) && (
        <div className={`${getColumnClass()} mb-3 pe-2`}>
          <p className="p-4 ps-0 pb-0 label-tag">Select FTE</p>
          <select
            id="organizationFTE"
            className="form-select form-select-lg"
            aria-label="Default select example"
            onChange={handleSelectfte}
            value={selectedFTE}
            style={{
              border: '0.94px solid #D6D6D6',
              color: selectedFTE ? '#000' : '#A3A3A3',
              borderRadius: '10px',
              padding: '10px 15px',
              height: '46px',
              cursor: 'pointer',
            }}
          >
            <option value="" className='label-form'>Select FTE</option>
            {(showd ? organizationfte : FTEwithid)?.map((department) => (
              <option key={department.id} value={department.id} name={department.country} className='label-option'>
                {department.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* File Dropdown */}
      <div className={`${getColumnClass()} mb-3 pe-2`}>
        <p className="p-4 ps-0 pb-0 label-tag" 
         
        >Select File</p>
        <select
          id="organizationFTE"
          className="form-select form-select-lg"
          aria-label="Default select example"
          onChange={handleSelectfilename}
          value={selectedfile}
          style={{
            border: '0.94px solid #D6D6D6',
            color: selectedfile ? '#000' : '#A3A3A3',
            borderRadius: '10px',
            padding: '10px 15px',
            height: '46px',
            cursor: 'pointer',
          }}
        >
          <option value="" >Select File</option>
          {Getfilename?.map((file) => (
            <option key={file.id} value={file.name} className='label-option'>
              {file.name}
            </option>
          ))}
        </select>
      </div>

      {/* Get Button */}
      <div className="col-md-2 mb-3 pe-2 d-flex align-items-end">
  <button
    onClick={handleGetcost}
    disabled={!selectedFTE || !selectedfile} // Disabled when either FTE or file is not selected
    className={`save-button w-75 d-flex justify-content-center align-items-center ${(!selectedFTE || !selectedfile) ? 'disabled-button' : ''}`}
    style={{
      height: '46px',
      borderRadius: '10px',
      fontWeight: 600,
      whiteSpace:"nowrap",
      opacity: (!selectedFTE || !selectedfile) ? 0.6 : 1, // Visual indication when disabled
      cursor: (!selectedFTE || !selectedfile) ? 'not-allowed' : 'pointer'
    }}
  >
  {isSubmitting ? (<div>

<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
Loading..
</div>) : (<div>Add Now</div>)}
  </button>
</div>
    </div>
  ) : (
    <div className="card-header pt-1  mb-0 d-flex flex-wrap">

      <div className={`${getColumnClass()} mb-3 pe-2`}>
        <p className="p-4 ps-0 pb-0 label-tag" >Category</p>
        <select
          id="selectcategory"
          name="selectcategory"
          className="form-select form-select-lg"
          aria-label="Default select example"
          onChange={handleCategoryChange}
          value={selectedCategory}
          style={{
            border: '0.94px solid #D6D6D6',
            color: selectedCategory ? '#000' : '#A3A3A3',
            borderRadius: '10px',
            padding: '10px 15px',
            height: '46px',
            cursor: 'pointer',
          }}
        >
          <option value="value1">Select category</option>
          <option value="organization">Organization</option>
          <option value="department">Department</option>
          <option value="subdepartment">Sub-Department</option>
          <option value="project">Project</option>
          <option value="team">Team</option>
          <option value="jobtitle">Job Title</option>
        </select>
      </div>

      {showC && (
        <div className={`${getColumnClass()} mb-3 pe-2`}>
          <p className="p-4 ps-0 pb-0 label-tag" >Select {selectedCategory || "Fields"}</p>
          <select
            id="department_Dropdown"
            className="form-select form-select-lg"
            aria-label="Default select example"
            onChange={handleSelectChange}
            value={selectedDepartment}
            style={{
              border: '0.94px solid #D6D6D6',
              color: selectedDepartment ? '#000' : '#A3A3A3',
              borderRadius: '10px',
              padding: '10px 15px',
              height: '46px',
              cursor: 'pointer',
            }}
          >
            <option>Select {selectedCategory }</option>
            {organizationfte?.map((department) => (
              <option key={department.id} value={department.id} className='label-option'>
                {department.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* FTE Dropdown */}
      {(showC || showd) && (
        <div className={`${getColumnClass()} mb-3 pe-2`}>
          <p className="p-4 ps-0 pb-0 label-tag" >Select FTE</p>
          <select
            id="organizationFTE"
            className="form-select form-select-lg"
            aria-label="Default select example"
            onChange={handleSelectfte}
            value={selectedFTE}
            style={{
              border: '0.94px solid #D6D6D6',
              color: selectedFTE ? '#000' : '#A3A3A3',
              borderRadius: '10px',
              padding: '10px 15px',
              height: '46px',
              cursor: 'pointer',
            }}
          >
            <option value="">Select FTE</option>
            {(showd ? organizationfte : FTEwithid)?.map((department) => (
              <option key={department.id} value={department.id} name={department.country} className='label-option'>
                {department.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* File Dropdown */}
      <div className={`${getColumnClass()} mb-3 pe-2`}>
        <p className="p-4 ps-0 pb-0 label-tag" >Select File</p>
        <select
          id="organizationFTE"
          className="form-select form-select-lg"
          aria-label="Default select example"
          onChange={handleSelectfilename}
          value={selectedfile}
          style={{
            border: '0.94px solid #D6D6D6',
            color: selectedfile ? '#000' : '#A3A3A3',
            borderRadius: '10px',
            padding: '10px 15px',
            height: '46px',
            cursor: 'pointer',
          }}
        >
          <option value="">Select File</option>
          {Getfilename?.map((file) => (
            <option key={file.id} value={file.name} className='label-option'>
              {file.name}
            </option>
          ))}
        </select>
      </div>

      {/* Get Button */}
      <div className="col-md-2 mb-3 pe-2 d-flex align-items-end">
  <button
    onClickCapture={handleGetcost}
    // onClick={handleGetcost}
    disabled={!selectedFTE || !selectedfile} // Disabled when either FTE or file is not selected
    className={`save-button w-75 ${(!selectedFTE || !selectedfile) ? 'disabled-button' : ''}`}
    style={{
      height: '46px',
      borderRadius: '10px',
      fontWeight: 600,
      opacity: (!selectedFTE || !selectedfile) ? 0.6 : 1, // Visual indication when disabled
      cursor: (!selectedFTE || !selectedfile) ? 'not-allowed' : 'pointer'
    }}
  >
    Add Now
  </button>
</div>
    </div>
  )}
</div>


         
        </div>
       
          <>
          <div style={{     backgroundColor: "#FFFFFF",

        }}>

           <Estimationdetail  setReportshow = { setReportshow} Reportshow={Reportshow}  Currency={Currency}  Estimationreport = {Radiobutton === "O" ? Estimationcustomreport : Estimationreport} />
         {Reportshow &&
         
        <>
        <Departmentwisedata  selectedCategory={selectedCategory} Currency={Currency}  Depfiledata={Radiobutton === "O" ? CustomDepfiledata : Depfiledata}  />
          <Estimationreportheader
          setFiledata = {Radiobutton === "O" ? setFileCustomdata : setFiledata}
          setEstimationreport = {Radiobutton === "O" ? setEstimationcustomreport : setEstimationreport}
          Filedata = {Radiobutton === "O" ? FileCustomdata : Filedata}
          ftefilename = {ftefilename}
          Radiobutton={Radiobutton}
          Currency={Currency}
          setReportshow={setReportshow}
          
          />
        </>
        
        }
        
          </div>

          </>
       
        
      </div>
    </>
  );
};

export default EstimationReport;
