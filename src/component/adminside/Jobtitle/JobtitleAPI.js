import React, { useState, useEffect } from "react";
import { addEditJobTitle , getJobTitle} from "../../../redux/features/auth/authSlice";
import "../adminscreens.css";
import { useDispatch, useSelector } from "react-redux";
import { MdErrorOutline } from "react-icons/md";

const JobtitleAPI = () => {
  const [invalidName, setInvalidName] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);
  const dispatch = useDispatch();
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [depid, setdepid] = useState({
    name: name,
    Description: Description,
  });
  const handleSave = async (e) => {
    e.preventDefault();
    if (!name.trim() || !Description.trim()) {
      setInvalidName(!name.trim());
      setInvalidDescription(!Description.trim());
      return;
    }
    try {
      console.log("datappost");
      const updatedDepid = {
        // ...depid,
        name: name,
        Description: Description,
        createdBy: "admin",
        modifiedBy: "admin",
      };

      const response = await dispatch(addEditJobTitle(updatedDepid))
      .then ((response)=>{
        if (response.payload.isSuccess){
          dispatch(getJobTitle())
        }
       setName('');
       setDescription('');
       })
    } catch (error) {
      console.log("Failed to create your FTE.");
    }
  };

  const handleclear = () => {
    setName("");
    setDescription("");
  
  };
  return (
    <>
    
          <div className="page-body mt-0">
         
          <div className="addlist p-3 shadow" style={{ border: "1px dashed lightgray" }}>
          <div className="card-header d-flex">
                      <h6 className="card-title m-0 col-lg-11 ms-2">
                        Add Job Title
                      </h6>
                      {popupMessage && (
                        <div className="juCkip">
                          <div className="jiZwRo">
                            <div
                              className="popup m-4"
                              style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: "999",
                                backgroundColor: "white",
                                borderRadius: "6px",
                                Width: "100%",
                                width: "650px",
                              }}
                            >
                              <div
                                className=""
                                sx={{ width: "100%", position: "relative" }}
                                spacing={2}
                              >
                                <>
                                  <div>
                                    <div className="d-flex justify-content-center align-items-center flex-column gap-3">
                                      <div className="mt-2">
                                        <MdErrorOutline
                                          style={{
                                            color: "orange",
                                            fontSize: "40px",
                                          }}
                                        />
                                      </div>
                                      <div
                                        severity="success ps-4"
                                        style={{ fontSize: "20px" }}
                                      >
                                        {popupMessage}
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        textAlign: "center",
                                        marginTop: "30px",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <button
                                        className="btn btn-danger close-button"
                                        onClick={() => {
                                          setPopupVisible(false);
                                          setPopupMessage("");
                                          setName('');
                                          setDescription('');
                                        }}
                                      >
                                        ok
                                      </button>
                                    </div>
                                  </div>
                                </>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* <div className="dropdown morphing scale-left ms-4 ps-4">
                        <a
                          href="#"
                          className="card-fullscreen"
                          data-bs-toggle="tooltip"
                          title="Card Full-Screen"
                        >
                          <i className="icon-size-fullscreen"></i>
                        </a>
                        <a
                          href="#"
                          className="more-icon "
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-h"></i>
                        </a>
                        <ul className="dropdown-menu shadow border-0 p-2">
                          <li>
                            <a className="dropdown-item" href="#">
                              File Info
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Copy to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Move to
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Rename
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Block
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                    <form
                      className="row g-3 needs-validation ms-2 mt-1"
                      novalidate
                      onSubmit={handleSave}
                    >
                      <div className="card-body mt-4">
                        <div className="row g-3">
                          <div className="col-md-6 form-group">
                            <label asp-for="Name" className="form-label">
                              {" "}
                              Job Title Name{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="name"
                              className={`form-control form-control-lg ${
                                invalidName ? "is-invalid" : ""
                              }`}
                              placeholder="Job Title Name"
                              value={name}
                              onChange={(event) => {
                                setName(event.target.value);
                                setInvalidName(false); // Reset invalidName state when input changes
                              }}
                            />
                            {invalidName && (
                              <div className="invalidfeedback">
                                Name required?
                              </div>
                            )}
                          </div>
                          <div className="col-md-6 form-group">
                            <label asp-for="Description" className="form-label">
                              Job Title Description{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="Description"
                              className={`form-control form-control-lg ${
                                invalidDescription ? "is-invalid" : ""
                              }`}
                              placeholder="Job Title Description"
                              value={Description}
                              onChange={(e) => {
                                setDescription(e.target.value);
                                setInvalidDescription(false);
                              }}
                            />
                            {invalidDescription && (
                              <div className="invalidfeedback">
                                Description required?
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="card-footer form-group mt-4 ">
                        <button type="submit" className="btn btnprimary">
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary ms-2"
                          onClick={handleclear}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
           
        
    </>
  );
};


export default JobtitleAPI