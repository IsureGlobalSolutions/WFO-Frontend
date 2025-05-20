import React, { useState, useEffect, useRef } from "react";
import "../Estimation.css";
import {
  addEditEstimationFte,
  DeparmentFTEwithid,
  Getftevalue,
  GetAllEstimationsFileByFTE,
  GetAllEstimationsFileByFTEId,
  DeleteEstimationfile,
  DwoloadEstimationfte,
  VeiwEstimationfte,
  GetAllEstimationsCustomizedFileByFTEId,
} from "../../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RxDownload } from "react-icons/rx";
import { GrFormView } from "react-icons/gr";
import { MdErrorOutline } from "react-icons/md";
import * as XLSX from "xlsx";
import { Modal } from "react-bootstrap";
import EstimationAlldropdown from "./EstimationAlldropdown";
import Originalfile from "./originalfile/Originalfile";
import Custommizedfiledata from "./customizedfile/Custommizedfiledata";
import { useEstimation } from '../../../context/EstimationContext';
import toast from 'react-hot-toast';
import Loader from "../../plugins/Loader";
import Buttonloader from "../../plugins/Buttonloader";
import { ReactComponent as Deleticon } from '../../../assets/WfoAssets/SVG/Delete.svg';  
import { ReactComponent as Viewicon } from '../../../assets/WfoAssets/SVG/Veiw.svg';  
import Deletemodel from "../../deletemodel/Deletemodel";
import { TiDownload } from "react-icons/ti";
import LatestSekeltonLoader from "../../SekeltonLoader/LatestSekeltonLoader";


// import { ReactComponent as EditIcon } from '../../../assets/WfoAssets/SVG/Edit.svg'; 

const Estimation = ({selectedModule}) => {
  const arrData = [
    "S.No",
    "File Name",
    "File Type",
    "File FTE",
    "Country",
    "Created BY",
    "Action"
  ];
  const dispatch = useDispatch();
  const {setselectedfile , selectedfile , selectedCategory, setSelectedCategory, selectedDepartment, setSelectedDepartment, selectedFTE, setSelectedFTE } = useEstimation();
  const [loading, setLoading] = useState(false);
  const [veiwloading, setVeiwloading] = useState(false);

  const [showC, setShowC] = useState(true);
  const [showd, setshowd] = useState(false);
  const FTEwithid = useSelector((state) => state.auth.FTEwithid);
  const getfiledata = useSelector((state) => state.auth.files);
  console.log("🚀 ~ Estimation ~ getfiledata:", getfiledata)
  const customfile = useSelector((state)=> state.auth.customfile);
  const [isOrganizationSelected, setIsOrganizationSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [organizationfte, setorganizationfte] = useState([]);
  const [getfteestimationdata, setgetfteestimationdata] = useState("");
  const [Customizefile, setCustomizefile] = useState("")
  const [selectoptionfile, setselectoptionfile] = useState("");
  const [selectoptionfte, setselectoptionfte] = useState(null);
  const [selectedOptionfields, setselectedOptionfields] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [fteid, setgetfteid] = useState(null);
  const [show, setShow] = useState(false);
  const [deleteid, setdeleteid] = useState(null);
  const [Filename, setFilename] = useState(null);
  const [Veiwdata, setVeiwdata] = useState([]);
  const [Viewshow, setViewshow] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentCustomPage, setCurrentCustomPage] = useState(1);
  const [activeAddModal, setactiveAddModal] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [filteredCustomData, setFilteredCustomData] = useState([]);
  const [ActiveEdit, setActiveEdit] = useState(false)
  // Pagination for original files
  const itemsPerPage = 10; 
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = getfiledata?.length === 0
    ? 0
    : Math.min(startIndex + itemsPerPage, getfiledata?.length);
  const paginatedData = filteredData?.slice (startIndex, endIndex);

  // Pagination for custom files
  const itemsCustomPerPage = 10;
  const totalCustomPages = Math.ceil(filteredCustomData?.length / itemsCustomPerPage);
  const startCustomIndex = (currentCustomPage - 1) * itemsCustomPerPage;
  const endCustomIndex = customfile?.length === 0
    ? 0
    : Math.min(startCustomIndex + itemsCustomPerPage, customfile?.length);
  const paginatedCustomData = filteredCustomData?.slice(startCustomIndex, endCustomIndex);

  useEffect(() => {
    if (!selectedColumn || searchValue.trim() === '') {
      setFilteredData(getfiledata);
    } else {
      const lowerSearch = searchValue.toLowerCase();
      const filtered = getfiledata?.filter((item) => {
        console.log("🚀 ~ filtered ~ filtered:", filtered)
        return item[selectedColumn]?.toString().toLowerCase().includes(lowerSearch);
      });
      setFilteredData(filtered);
    }
  }, [selectedColumn, searchValue, getfiledata]);

  useEffect(() => {
    if (!selectedColumn || searchValue.trim() === '') {
      setFilteredCustomData(customfile);
    } else {
      const lowerSearch = searchValue.toLowerCase();
      const filtered = customfile?.filter((item) => {
        return item[selectedColumn]?.toString().toLowerCase().includes(lowerSearch);
      });
      setFilteredCustomData(filtered);
    }
  }, [selectedColumn, searchValue, customfile]);

  const [topping, setTopping] = useState("Original File");
  const onOptionChange = (value) => {
    setTopping(value);
  };

  const handleDelete = async (id) => {
    setShow(true);
    setPopupMessage("Are you want to Delete this FTEFILE ");
    setdeleteid(id);
  };

  const handleokbutton = (id) => {
    setPopupMessage("Your FTE Deleted");
    handleDelete(id);
  };

  const handleClosedata = () => {
    setShow(false);
    setActiveTab("nav_week1");
  };

  const conformDelete = async () => {
    try {
      const response = dispatch(DeleteEstimationfile(deleteid)).then(
        (response) => {
          if (response.payload.isSuccess) {
            setShow(false);
            const C = topping === "Original File" ? "O" : "C";
            dispatch(GetAllEstimationsFileByFTEId({ selectedCategory, fteid, C }));
            handlecustomizedata(fteid);
          } else {
            setShow(false);
          }
        }
      );
    } catch (error) {
      setPopupMessage("Error occuring FTE Not Deleted");
    }
    setdeleteid(null);
  };

  const [fileData, setFileData] = useState({
    FileType: "O",
    FTE: 0,
    id: 1,
    OrganizationFteId: 0,
    Organization: 0,
    DepartmentId: 0,
    DepartmentFteId: 0,
    Country: '',
    UploadedFile: null,
    SubdepartmentId: 0,
    SubdepartmentFteId: 0,
    ProjectId: 0,
    ProjectFteId: 0,
    TeamId: 0,
    TeamFteId: 0,
    JobTitleId: 0,
    JobTitleFteId: 0,
  });

  const handleFileChange = (event) => {
    const UploadedFile = event.target.files[0];
    setselectoptionfile(UploadedFile ? UploadedFile.name : "");
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const excelData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
      setFileData((prevState) => ({
        ...prevState,
        UploadedFile: UploadedFile,
      }));
    };
    reader.readAsArrayBuffer(UploadedFile);
  };

  const handleUpload = async (e) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("UploadedFile", fileData.UploadedFile);
    formData.append("FTE", fileData.FTE);
    formData.append("FileType", fileData.FileType);
    formData.append("DepartmentFteId", fileData.DepartmentFteId || 0);
    formData.append("DepartmentId", fileData.DepartmentId || 0);
    formData.append("OrganizationId", fileData.Organization || 0);
    formData.append("OrganizationFteId", fileData.OrganizationFteId || 0);
    formData.append("SubdepartmentId", fileData.SubdepartmentId || 0);
    formData.append("SubdepartmentFteId", fileData.SubdepartmentFteId || 0);
    formData.append("ProjectId", fileData.ProjectId || 0);
    formData.append("ProjectFteId", fileData.ProjectFteId || 0);
    formData.append("TeamId", fileData.TeamId || 0);
    formData.append("TeamFteId", fileData.TeamFteId || 0);
    formData.append("JobTitleId", fileData.JobTitleId || 0);
    formData.append("JobTitleFteId", fileData.JobTitleFteId || 0);
    formData.append("Country", fileData.Country);
    const C = "O";
    try {
      const response = await dispatch(addEditEstimationFte(formData));
      if (response.payload.isSuccess) {
        dispatch(GetAllEstimationsFileByFTEId({ selectedCategory, fteid, C }));
      } else {
        console.error("Error:", response.payload.alertMessage || "Unknown error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setIsOrganizationSelected(category === "organization");
    setShowC(category !== "organization");
    setshowd(category == "organization");
    setselectedOptionfields("");
    setselectoptionfte("");
    setselectoptionfile("");
    setSelectedFTE("");
    setSelectedDepartment("");
  };

  const handleOrganizationSelectChange = (event) => {
    const fteid = event.target.value;
    const countryname = event.target.options[event.target.selectedIndex].getAttribute('name');
    setSelectedFTE(fteid);
    fetchftedata(fteid);
    setgetfteid(fteid);
    setFileData((prevData) => ({
      ...prevData,
      OrganizationFteId: fteid,
      Organization: 1,
      SubdepartmentFteId: 0,
      Country: countryname,
      ProjectFteId: 0,
      TeamFteId: 0,
      JobTitleFteId: 0,
      SubdepartmentId: 0,
      ProjectId: 0,
      TeamId: 0,
      JobTitleId: 0,
      DepartmentFteId: 0,
      DepartmentId: 0,
    }));
    var C = "O";
    const response = dispatch(
      GetAllEstimationsFileByFTEId({ selectedCategory, fteid, C })
    ).then((response) => {
      setgetfteestimationdata(response.payload);
    });
    handlecustomizedata(fteid);
  };

  const fetchmethod = async (id) => {
    try {
      const response = dispatch(DeparmentFTEwithid({ id, selectedCategory }));
    } catch (error) {}
  };

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
    if (selectedCategory) {
      fetchDepdropdownOrganization(selectedCategory);
    }
  }, [selectedCategory]);

  const handleSelectChange = (e) => {
    const id = e.target.value;
    setSelectedDepartment(id);
    fetchmethod(id);
    if (selectedCategory === "department") {
      setFileData((prevData) => ({
        ...prevData,
        DepartmentId: id,
        Organization: 0,
        SubdepartmentId: 0,
        ProjectFtId: 0,
        TeamId: 0,
        JobTitleId: 0,
      }));
    } else if (selectedCategory === "subdepartment") {
      setFileData((prevData) => ({
        ...prevData,
        SubdepartmentId: id,
        Organization: 0,
        DepartmentId: 0,
        ProjectFtId: 0,
        TeamId: 0,
        JobTitleId: 0,
      }));
    } else if (selectedCategory === "project") {
      setFileData((prevData) => ({
        ...prevData,
        ProjectId: id,
        DepartmentId: 0,
        Organization: 0,
        SubdepartmentId: 0,
        TeamId: 0,
        JobTitleId: 0,
      }));
    } else if (selectedCategory === "team") {
      setFileData((prevData) => ({
        ...prevData,
        TeamId: id,
        DepartmentId: 0,
        Subdepartment: 0,
        OrganizationId: 0,
        ProjectFtId: 0,
        JobTitleId: 0,
      }));
    } else if (selectedCategory === "jobtitle") {
      setFileData((prevData) => ({
        ...prevData,
        JobTitleId: id,
        DepartmentId: 0,
        Organization: 0,
        SubdepartmentId: 0,
        ProjectFtId: 0,
        TeamId: 0,
      }));
    }
  };

  const fetchftedata = (id) => {
    try {
      const response = dispatch(Getftevalue({ selectedCategory, id })).then(
        (response) => {
          setFileData((prevFileData) => ({
            ...prevFileData,
            FTE: response.payload,
          }));
        }
      );
      const FTE = response.payload;
      setFileData((prevFileData) => ({
        ...prevFileData,
        FTE: FTE,
      }));
    } catch (error) {}
  };

  useEffect(() => {
    if (selectedCategory === "organization") {
      setshowd(true);
      setShowC(false);
    }
  }, [selectedCategory]);

  const handleSelectfte = (e) => {
    const fteid = e.target.value;
    const countryname = e.target.options[e.target.selectedIndex].getAttribute('name');
    fetchftedata(fteid);
    setSelectedFTE(fteid);
    setgetfteid(fteid);
    if (selectedCategory === "department") {
      setFileData((prevData) => ({
        ...prevData,
        DepartmentFteId: fteid,
        OrganizationFteId: 0,
        SubdepartmentFteId: 0,
        Country: countryname,
        ProjectFteId: 0,
        TeamFteId: 0,
        JobTitleFteId: 0,
      }));
    } else if (selectedCategory === "subdepartment") {
      setFileData((prevData) => ({
        ...prevData,
        SubdepartmentFteId: fteid,
        OrganizationFteId: 0,
        DepartmentFteId: 0,
        ProjectFteId: 0,
        Country: countryname,
        TeamFteId: 0,
        JobTitleFteId: 0,
      }));
    } else if (selectedCategory === "project") {
      setFileData((prevData) => ({
        ...prevData,
        ProjectFteId: fteid,
        DepartmentFteId: 0,
        OrganizationFteId: 0,
        Country: countryname,
        SubdepartmentFteId: 0,
        TeamFteId: 0,
        JobTitleFteId: 0,
      }));
    } else if (selectedCategory === "team") {
      setFileData((prevData) => ({
        ...prevData,
        TeamFteId: fteid,
        DepartmentFteId: 0,
        OrganizationFteId: 0,
        Country: countryname,
        SubdepartmentFteId: 0,
        ProjectFteId: 0,
        JobTitleFteId: 0,
      }));
    } else if (selectedCategory === "jobtitle") {
      setFileData((prevData) => ({
        ...prevData,
        JobTitleFteId: fteid,
        DepartmentFteId: 0,
        OrganizationFteId: 0,
        SubdepartmentFteId: 0,
        Country: countryname,
        ProjectFteId: 0,
        TeamFteId: 0,
      }));
    }
    var C = "O";
    const response = dispatch(
      GetAllEstimationsFileByFTEId({ selectedCategory, fteid, C })
    ).then((response) => {
      setgetfteestimationdata(response.payload);
    });
    handlecustomizedata(fteid);
  };

  const handleDownloadFile = async (ftename, C) => {
    try {
      const response = await dispatch(DwoloadEstimationfte({ ftename, C }));
      if (response.payload) {
        const blob = new Blob([response.payload], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        if (navigator.msSaveBlob) {
          navigator.msSaveBlob(blob, `${ftename}.xlsx`);
        } else {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.target = "_blank";
          link.download = `${ftename}.xlsx`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      }
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  const [fullscreen, setFullscreen] = useState(true);
  const handleViewFile = (ftename, breakpoint, C) => {
    setActiveEdit(true);
    setVeiwloading(true);
    setFilename(ftename);
    setFullscreen(breakpoint);
    setViewshow(true);
    const response = dispatch(VeiwEstimationfte({ ftename, C })).then(
      (response) => {
        if (response && response.payload && response.payload.data) {
          setVeiwloading(false);
          const blobData = response.payload.data;
          const reader = new FileReader();
          reader.onload = () => {
            const jsonData = reader.result;
            try {
              const parsedData = JSON.parse(jsonData);
              setVeiwdata(parsedData);
            } catch (error) {
              alert("Error parsing JSON:", error);
            }
          };
          reader.readAsText(blobData);
        }
      }
    );
  };

  const [activeTab, setActiveTab] = useState("nav_week1");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlecustomizedata = (fteid) => {
    var C = "C";
    const response = dispatch(
      GetAllEstimationsCustomizedFileByFTEId({ selectedCategory, fteid, C })
    ).then((response) => {
      setCustomizefile(response.payload);
    });
  };

  return (
    <>
        <Deletemodel
         show={show} 
         handleClosedata={handleClosedata} 
         conformDelete={conformDelete} 
         message="Do you really want to remove such data?"
      />
      {
        ActiveEdit ? (
          
         <>
          <ul className="nav nav-tabs tab-card pt-1 col-md-5" role="tablist">
           
         <button
            type="button"
            className="cancel-button ms-0 pb-2 me-5"
            onClick={()=>setActiveEdit(false)}
            style={{ position: "absolute", right: "0", margin: "10px" , backgroundColor:'#E9E9E9' }}

            >
            Back
          </button>
          <li className="nav-item col-md-4">
            <a
              className={`nav-link ${activeTab === "nav_week1" ? "active" : ""}`}
              data-bs-toggle="tab"
              href="#nav_week1"
              role="tab"
              onClick={() => handleTabChange("nav_week1")}
            >
              Original File
            </a>
          </li>
          <li className="nav-item col-md-4">
            <a
              className={`nav-link ${activeTab === "nav_week2" ? "active" : ""}`}
              data-bs-toggle="tab"
              href="#nav_week2"
              role="tab"
              onClick={() => handleTabChange("nav_week2")}
            >
              Customized File
            </a>
          </li>
        </ul>
 <div id="tabs" className="row g-3 p-2 mt-2 w-100">
            {veiwloading ? ( 
                <LatestSekeltonLoader/>
            
            ) : (
              <div className="mt-0 p-0">
              <div className="">
                <div className="tab-content" id="myTabContent">
                  {/* Week 1 Tab */}
                  <div
                    className={`tab-pane fade ${activeTab === "nav_week1" ? "show active" : ""}`}
                    id="nav_week1"
                    role="tabpanel"
                  >
                    <div className="table-responsive" style={{ overflowX: 'auto', width: '100%' }}>
                      <Originalfile
                        Veiwdata={Veiwdata}
                        Filename={Filename}
                      />
                    </div>
                  </div>
            
                  {/* Week 2 Tab */}
                  <div
                    className={`tab-pane fade ${activeTab === "nav_week2" ? "show active" : ""}`}
                    id="nav_week2"
                    role="tabpanel"
                  >
                    <div className="table-responsive" >
                      <Custommizedfiledata
                        fileData={fileData}
                        setFileData={setFileData}
                        Veiwdata={Veiwdata}
                        Filename={Filename}
                        setCustomizefile={setCustomizefile}
                        selectedCategory={selectedCategory}
                        fteid={fteid}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
         </>
        ) : (
<>
<div className="childsection pb-2">
        <h1>Estimation</h1>
      </div>
      <div 
        className="d-flex p-3 topnavbar-card" 
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "5.83px 5.83px 52.51px 0px #0000000D",
          width: "100%",
          justifyContent: "start",
          alignItems: "center",
          flexWrap: "nowrap",
          whiteSpace: "nowrap"
        }}
      >
        <h1 style={{ margin: 0 }}>Home</h1>
        <h1 className="ms-1 me-1" style={{ margin: 0 }}>/</h1>
        <h1 style={{ margin: 0 }}>Estimation</h1>
        <h1 className="ms-1 me-1" style={{ margin: 0 }}>/</h1>
        <h1 style={{ color: "#4880FF", margin: 0 }}>{selectedModule}</h1>
      </div>
      <div
        className="pt-0 mt-1"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <form id="frmFte" encType="multipart/form-data">
          <div className="">
            <div className="childsection p-4">
              <h1>{selectedModule}</h1>
            </div>
            <EstimationAlldropdown
              isOrganizationSelected={isOrganizationSelected}
              handleCategoryChange={handleCategoryChange}
              showC={showC}
              showd={showd}
              handleSelectChange={handleSelectChange}
              selectedOptionfields={selectedOptionfields}
              organizationfte={organizationfte}
              handleSelectfte={handleSelectfte}
              selectoptionfte={selectoptionfte}
              handleUpload={handleUpload}
              FTEwithid={FTEwithid}
              handleOrganizationSelectChange={handleOrganizationSelectChange}
              selectedCategory={selectedCategory}
              selectedFTE={selectedFTE}
              setSelectedFTE={setSelectedFTE}
              selectedDepartment={selectedDepartment}
              setSelectedDepartment={setSelectedDepartment}
            />
            <h6 className="card-title p-4 pt-1 pb-0" 
                        >Upload File</h6>
            <div className="d-flex col-md-6 p-3 ps-4">
              <div className="mb-0 ms-0.2">
                <input
                style={{
                  height: '42px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
                  asp-for="UploadedFile"
                  className="form-control pt-2"
                  type="file"
                  onChange={handleFileChange}
                  disabled={!selectedFTE}
                  accept=".xlsx"
                  id="UploadedFile"
                />
              </div>
              <button
                            type="button"
                            onClick={handleUpload}
                            disabled={!selectedFTE}
                      className={`save-button w-25 ms-2 d-flex justify-content-center align-items-center ${
                        (!selectedFTE ) ? 'disabled-button' : ''
                      }`}
                      style={{
                        height: '42px',
                        borderRadius: '10px',
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        opacity: (!selectedFTE ) ? 0.6 : 1, 
                        cursor: (!selectedFTE ) ? 'not-allowed' : 'pointer'
                      }}
                          >
                          {loading ? (<Buttonloader/>):( 
                           "Add" 
                          )}
                          </button>
            </div>
            <div className="childsection ms-4 mt-4">
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
            <div className="">
              {topping === "Original File" ? (
                <div className='' style={{backgroundColor: "#FFFFFF"}}>
                  <div className="d-flex ms-2 p-4 ps-3 pb-0 pt-0 pe-4 align-items-start">
                    <table className="table table-hover table-striped pb-1" style={{borderRadius: "10px"}}>
                      <thead>
                        <tr style={{ border: "1px solid #dee2e6", borderRadius: "10px" }}>
                          {arrData.map((data, index) => (
                            <th 
                              scope="col" 
                              key={index} 
                              style={{ 
                                fontSize: "14px",
                                backgroundColor: "#E0E3E9",
                                lineHeight: '100%',
                                letterSpacing: '0px',
                                fontWeight: 600,
                                color: "#202224",
                                textAlign: "center",
                                justifyContent: "center",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              <span className="ms-1 align-items-center">{data}</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-center ms-2 tablestyle" style={{ fontSize: "14px" }}>
                        {Array.isArray(getfteestimationdata) && filteredData?.length > 0 ? (
                          paginatedData?.map((file, id) => (
                            <tr key={id}>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>
                                {(currentPage - 1) * itemsPerPage + id + 1}
                              </td>
                              <td style={{ 
                                borderBottom: '1px solid #dee2e6',
                                lineHeight: '100%',
                                letterSpacing: '0px',
                                fontWeight: 400,
                                fontSize: "13px",
                                color: "#000000",
                                fontFamily: "Poppins, sans-serif",
                                textAlign: "center"
                              }}>
                                {file.fileName}
                              </td>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>{file.fileExtension}</td>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>{file.fte}</td>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>{file.country}</td>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>{file.createdBy}</td>


                              <td style={{ borderBottom: "1px solid #dee2e6", textAlign: "end" }}>
                                <div
                                  style={{
                                    border: "1px solid #D5D5D5",
                                    borderRadius: "10px",
                                    display: "flex",
                                    alignItems: "end",
                                    overflow: "hidden",
                                    // width:"20%"
                                  }}
                                >
                                  <div
                                    className="w-50"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      padding: "7px",
                                      borderRight: "1px solid #D5D5D5",
                                      
                                    }}
                                  >
                                    <Viewicon
                                      style={{cursor: 'pointer' ,paddingTop:"0px"}}
                                      onClick={() => handleViewFile(file.fileName, true , "O")}
                                    />
                                  </div>
                                  <div
                                    className="w-50"
                                    style={{
                                      display: "flex",
                                      // alignItems: "center",
                                      justifyContent: "center",
                                      paddingBottom: "10px",

                                      // borderRight: "1px solid #D5D5D5",

                                    }}
                                  >
                                    <TiDownload 
                                      style={{cursor: 'pointer'}}
                                      onClick={() => handleDownloadFile(file.fileName, "O")}
                                    />
                                  </div>
                                  <div
                                    className="w-50"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      padding: "7px",
                                      borderLeft: "1px solid #D5D5D5",

                                    }}
                                  >
                                    <Deleticon
                                      style={{cursor: 'pointer'}}
                                      onClick={() => handleokbutton(file.id)}
                                    />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <td colSpan="7" style={{ 
                            textAlign: 'center',
                            padding: '10px',
                            border: '1px solid #dee2e6',
                                     verticalAlign: 'middle',
                                     backgroundColor:"#ECECEC"
                        }}>
                            No data available
                        </td>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-between ms-2 p-4 ps-3 pb-1 pt-0 align-items-start">
                  <div className="footer-text mt-3">
        {filteredData?.length > 0 
    ? `Showing ${startIndex + 1}-${endIndex} of ${filteredData.length}`
    : 'Showing 0-0 of 0'} 
                   </div>
                    <div className="d-flex justify-content-end pb-4">
                      <div
                        style={{
                          border: "1px solid #D5D5D5",
                          backgroundColor: '#F9F9FB',
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "stretch",
                          overflow: "hidden",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="d-flex align-items-center px-3 p-2"
                          style={{
                            borderRight: "1px solid #D5D5D5",
                            cursor: currentPage > 1 ? "pointer" : "not-allowed",
                            color: currentPage > 1 ? "#007BFF" : "#202224",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0px",
                          }}
                          onClick={() => {
                            if (currentPage > 1) setCurrentPage(currentPage - 1);
                          }}
                        >
                          Previous
                        </div>
                        <ul className="pagination pagination-sm pb-0 mb-0 p-0 m-0">
                          {[...Array(Number.isInteger(totalPages) && totalPages > 0 
  ? totalPages 
  : 0)].map((_, index) => (
                            <li
                              key={index}
                              className={`page-item p-0 m-0 ${currentPage === index + 1 ? "active" : ""}`}
                            >
                              <button
                                className="page-link p-3 pt-2 pb-2 rounded-0"
                                style={{
                                  fontWeight: 600,
                                  fontSize: "15px",
                                  color: "#FFFFF",
                                  whiteSpace: "nowrap",
                                  height: "100%",
                                }}
                                onClick={() => setCurrentPage(index + 1)}
                              >
                                {index + 1}
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div
                          className="d-flex align-items-center px-3"
                          style={{
                            cursor: currentPage < totalPages ? "pointer" : "not-allowed",
                            color: currentPage < totalPages ? "#007BFF" : "#202224",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0px",
                            borderRight: "1px solid #D5D5D5",
                          }}
                          onClick={() => {
                            if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                          }}
                        >
                          Next
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='' style={{backgroundColor: "#FFFFFF"}}>
                  <div className="d-flex ms-2 p-4 ps-3 pb-0 pt-0 pe-4 align-items-start">
                    <table className="table table-hover table-striped pb-1" style={{borderRadius: "10px"}}>
                      <thead>
                        <tr style={{ border: "1px solid #dee2e6", borderRadius: "10px" }}>
                          {arrData?.map((data, index) => (
                            <th 
                              scope="col" 
                              key={index} 
                              style={{ 
                                fontSize: "14px",
                                backgroundColor: "#E0E3E9",
                                lineHeight: '100%',
                                letterSpacing: '0px',
                                fontWeight: 600,
                                color: "#202224",
                                textAlign: "center",
                                justifyContent: "center",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              <span className="ms-1 align-items-center">{data}</span>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="text-center ms-2 tablestyle" style={{ fontSize: "14px" }}>
                        {loading && <tr><td colSpan="5">Loading...</td></tr>}
                        
                        {Array.isArray(customfile) && filteredCustomData?.length > 0 ? (
                          paginatedCustomData?.map((file, id) => (
                            <tr key={id}>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>
                                {(currentCustomPage - 1) * itemsCustomPerPage + id + 1}
                              </td>
                              <td style={{ 
                                borderBottom: '1px solid #dee2e6',
                                lineHeight: '100%',
                                letterSpacing: '0px',
                                fontWeight: 400,
                                fontSize: "13px",
                                color: "#000000",
                                fontFamily: "Poppins, sans-serif",
                                textAlign: "center"
                              }}>
                                {file.fileName}
                              </td>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>{file.fileExtension}</td>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>{file.fte}</td>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>{file.country}</td>
                              <td style={{ borderBottom: '1px solid #dee2e6' }}>{file.createdBy}</td>
                              
                              <td style={{ borderBottom: "1px solid #dee2e6", textAlign: "end" }}>
                                <div
                                  style={{
                                    border: "1px solid #D5D5D5",
                                    borderRadius: "10px",
                                    display: "flex",
                                    alignItems: "end",
                                    overflow: "hidden",
                                    justifyContent: "center",
                                  }}
                                >
                                  <div
                                    className="w-50"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      padding: "7px",
                                      borderRight: "1px solid #D5D5D5",
                                    }}
                                  >
                                    <Viewicon
                                      style={{cursor: 'pointer'}}
                                      onClick={() => handleViewFile(file.fileName, true, "C")}
                                    />
                                  </div>
                                  <div
                                    className="w-50"
                                    style={{
                                      display: "flex",
                                      // alignItems: "center",
                                      justifyContent: "center",
                                      paddingBottom: "10px",

                                      // borderRight: "1px solid #D5D5D5",

                                    }}
                                  >
                                    <TiDownload 
                                      style={{cursor: 'pointer'}}
                                      onClick={() => handleDownloadFile(file.fileName, "C")}
                                    />
                                  </div>
                                  <div
                                    className="w-50"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      padding: "7px",
                                    }}
                                  >
                                    <Deleticon
                                      style={{cursor: 'pointer'}}
                                      onClick={() => handleokbutton(file.id)}
                                    />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="5" style={{ borderBottom: '1px solid #dee2e6' }}>No data available</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-between ms-2 p-4 ps-3 pb-1 pt-0 align-items-start">
                    <div className="footer-text mt-3">
                      Showing {startCustomIndex + 1}-{Math.min(endCustomIndex, filteredCustomData?.length)} of {filteredCustomData?.length}
                    </div>
                    <div className="d-flex justify-content-end pb-4">
                      <div
                        style={{
                          border: "1px solid #D5D5D5",
                          backgroundColor: '#F9F9FB',
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "stretch",
                          overflow: "hidden",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="d-flex align-items-center px-3 p-2"
                          style={{
                            borderRight: "1px solid #D5D5D5",
                            cursor: currentCustomPage > 1 ? "pointer" : "not-allowed",
                            color: currentCustomPage > 1 ? "#007BFF" : "#202224",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0px",
                          }}
                          onClick={() => {
                            if (currentCustomPage > 1) setCurrentCustomPage(currentCustomPage - 1);
                          }}
                        >
                          Previous
                        </div>
                        <ul className="pagination pagination-sm pb-0 mb-0 p-0 m-0">
                          {[...Array(totalCustomPages)].map((_, index) => (
                            <li
                              key={index}
                              className={`page-item p-0 m-0 ${currentCustomPage === index + 1 ? "active" : ""}`}
                            >
                              <button
                                className="page-link p-3 pt-2 pb-2 rounded-0"
                                style={{
                                  fontWeight: 600,
                                  fontSize: "15px",
                                  color: "#FFFFF",
                                  whiteSpace: "nowrap",
                                  height: "100%",
                                }}
                                onClick={() => setCurrentCustomPage(index + 1)}
                              >
                                {index + 1}
                              </button>
                            </li>
                          ))}
                        </ul>
                        <div
                          className="d-flex align-items-center px-3"
                          style={{
                            cursor: currentCustomPage < totalCustomPages ? "pointer" : "not-allowed",
                            color: currentCustomPage < totalCustomPages ? "#007BFF" : "#202224",
                            fontWeight: "600",
                            fontSize: "16px",
                            lineHeight: "100%",
                            letterSpacing: "0px",
                            borderRight: "1px solid #D5D5D5",
                          }}
                          onClick={() => {
                            if (currentCustomPage < totalCustomPages) setCurrentCustomPage(currentCustomPage + 1);
                          }}
                        >
                          Next
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
</>
        )
      }
      {/* <div
        show={Viewshow}
        onHide={()=>setViewshow(true)}
        fullscreen={fullscreen}
      >
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          style={{ position: "absolute", right: "0", margin: "10px" }}
          onClick={()=>setViewshow(false)}
        />
        <ul className="nav nav-tabs tab-card pt-1 col-12" role="tablist">
          <li className="nav-item col-1">
            <a
              className={`nav-link ${activeTab === "nav_week1" ? "active" : ""}`}
              data-bs-toggle="tab"
              href="#nav_week1"
              role="tab"
              onClick={() => handleTabChange("nav_week1")}
            >
              Original File
            </a>
          </li>
          <li className="nav-item col-1">
            <a
              className={`nav-link ${activeTab === "nav_week2" ? "active" : ""}`}
              data-bs-toggle="tab"
              href="#nav_week2"
              role="tab"
              onClick={() => handleTabChange("nav_week2")}
            >
              Customized File
            </a>
          </li>
        </ul>
        <Modal.Body>
         
        </Modal.Body>
      </Modal> */}
     
    </>
  );
};

export default Estimation;