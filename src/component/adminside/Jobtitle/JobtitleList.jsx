
  
  import React, { useEffect, useState, useRef } from "react";
  import "../adminscreenslist.css";
  import { MdDeleteForever } from "react-icons/md";
  import { Table, Pagination, Form, Button, Modal } from "react-bootstrap";
  import { GrFormView } from "react-icons/gr";
  import { useDispatch } from "react-redux";
  import {
    getJobTitle,
    deletejobtitle,
    getJobTitleiddata,
  } from "../../../redux/features/auth/authSlice";
  import { MdErrorOutline } from "react-icons/md";
  import { GrView, GrClose } from "react-icons/gr";
  import Deletemodel from "../../deletemodel/Deletemodel";
  const Jobtitlelist = ({ isSidebarExpanded }) => {
    const employeeData = [
      {
        veiw: <GrFormView />,
        name: "Dean Otto",
        employeeid: 1,
        description: "Designation added from external file ",
        joindate: "20/2/2024",
        Role: "HR",
        img: require("../../../assets/img/xs/avatar1.jpg"),
      },
      {
        name: "ALI",
        veiw: <GrFormView />,
        employeeid: 2,
        description: "Designation added from external file ",
        joindate: "20/2/2024",
        Role: "HR",
        img: require("../../../assets/img/xs/avatar2.jpg"),
      },
      {
        name: "Hassan",
        employeeid: 3,
        veiw: <GrFormView />,
        description: "Designation added from external file ",
        joindate: "20/2/2024",
        Role: "HR",
        img: require("../../../assets/img/xs/avatar3.jpg"),
        performance: "Excellent",
      },
      {
        veiw: <GrFormView />,
        name: "Dean Otto",
        employeeid: 4,
        description: "Designation added from external file ",
        joindate: "20/2/2024",
        Role: "HR",
        img: require("../../../assets/img/xs/avatar1.jpg"),
      },
      {
        name: "ALI",
        veiw: <GrFormView />,
        employeeid: 5,
        description: "Designation added from external file ",
        joindate: "20/2/2024",
        Role: "HR",
        img: require("../../../assets/img/xs/avatar2.jpg"),
      },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [employeesPerPage, setEmployeesPerPage] = useState(5);
    const totalEmployees = employeeData.length;
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employeeData.slice(
      indexOfFirstEmployee,
      indexOfLastEmployee
    );
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const handleEntriesChange = (event) => {
      setEmployeesPerPage(parseInt(event.target.value));
      setCurrentPage(1);
    };
    const dispatch = useDispatch();
    const [datalist, setdatalist] = useState([]);
    const [datalistid, setdatalistid] = useState([]);
    const [deleteTrigger, setDeleteTrigger] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
   
    const fetchmethod = async (e) => {
      try {
        dispatch(getJobTitle()).then((response) => {
          setdatalist(response.payload);
        });
      } catch (error) {
        alert("error");
      }
    };
    useEffect(() => {
      fetchmethod();
    }, [deleteTrigger]);
    const fetchdataid = async (id) => {
      try {
        const response = await dispatch(getJobTitleiddata(id));
        //  .then((response) => {
        setdatalistid(response.payload);
        // });
      } catch (error) {
        alert("error");
      }
    };
    const [veiwmodel, setveiwmodel] = useState(false);
    const handleShow = async (id) => {
      await fetchdataid(id);
      setveiwmodel(true);
    };
    const [deleteid, setdeleteid] = useState(null)
  
    const conformDelete = async () => { 
      try {
        const response = await dispatch(deletejobtitle(deleteid));
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
      // setPopupVisible(true);
      setShow(true);
      setdeleteid(id);    
    
    };
    const handleClosedata = () => setShow(false);
    const handlecloseveiwmodel =()=>setveiwmodel(false);

    return (
      <>
        
        <Deletemodel
         show={show} 
         handleClosedata={handleClosedata} 
         conformDelete={conformDelete} 
         message="Do you really want to remove such data?"
        />
        <div>
          <Modal show={veiwmodel} onHide={handlecloseveiwmodel}>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontSize: "25px", fontWeight: "600" }}>
                Jobtitle Details{" "}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {datalistid ? (
                <div>
                  <div className="d-flex">
                    <div
                      className=" col-md-3 col-lg-3"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      ID
                    </div>
                    <div className="ms-4">{datalistid.id}</div>
                  </div>
                  <div className="d-flex">
                    <div
                      className=" col-lg-3 col-md-3"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Name
                    </div>
                    <div className="ms-4">{datalistid.name}</div>
                  </div>
                  <div className="d-flex">
                    <div
                      className=" col-lg-3 col-md-3"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Description
                    </div>
                    <div className="ms-4">{datalistid.description}</div>
                  </div>
                  <div className="d-flex">
                    <div
                      className=" col-lg-3 col-md-3"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Created Date
                    </div>
                    <div className="ms-4">{datalistid.createdDate}</div>
                  </div>
                  <div className="d-flex">
                    <div
                      className=" col-lg-3 col-md-3"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Modified Date
                    </div>
                    <div className="ms-4">{datalistid.modifiedDate}</div>
                  </div>
                  <div className="d-flex">
                    <div
                      className=" col-lg-3 col-md-3"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Created By
                    </div>
                    <div className="ms-4">{datalistid.createdBy}</div>
                  </div>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handlecloseveiwmodel}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="designationlist ms-2 mt-2 ">
        <div class="page-body px-xl-4 px-sm-2 px-0 py-lg-2 py-1 mt-0 mt-lg-3">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 ">
                  <div class="addlist p-4">
                    <div class="card-header d-flex">
                      <h6 class="card-title m-0 col-lg-11 ">Job-Title List </h6>
                      {/* <div class="dropdown morphing scale-left ms-4 ps-4">
                        <a
                          href="#"
                          class="card-fullscreen"
                          data-bs-toggle="tooltip"
                          title="Card Full-Screen"
                        >
                          <i class="icon-size-fullscreen"></i>
                        </a>
                        <a
                          href="#"
                          class="more-icon "
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="fa fa-ellipsis-h"></i>
                        </a>
                        <ul class="dropdown-menu shadow border-0 p-2">
                          <li>
                            <a class="dropdown-item" href="#">
                              File Info
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Copy to
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Move to
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Rename
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Block
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Delete
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                    <div class="card-body mt-3">
                      <div>
                        {/* <div className="d-flex">
                          <div class="col-lg-10 d-flex">
                            <span class="mt-2" style={{ fontSize: "15px" }}>
                              {" "}
                              Show
                            </span>
                            <div className=" ms-2 pe-2">
                              <Form.Select
                                onChange={handleEntriesChange}
                                value={employeesPerPage}
                              >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                              </Form.Select>
                            </div>
  
                            <span class="mt-2" style={{ fontSize: "15px" }}>
                              Entries
                            </span>
                          </div>
                          <div>
                            <Form.Control
                              type="text"
                              placeholder="Search..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                          </div>
                        </div> */}
                        <Table striped bordered hover className="mt-4 ">
                          <thead>
                            <tr>
                              <th
                                style={{
                                  border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                  fontSize: "14px",
                                }}
                              >
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value=""
                                  />
                                </div>
                              </th>
                              <th
                                style={{
                                  border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                  fontSize: "14px",
                                }}
                              >
                                Name
                              </th>
                              <th
                                style={{
                                  border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                  fontSize: "14px",
                                }}
                              >
                                Description
                              </th>
                              <th
                                style={{
                                  border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                  fontSize: "14px",
                                }}
                              >
                                Created Date
                              </th>
                              <th
                                style={{
                                  border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                  fontSize: "14px",
                                }}
                              >
                                {" "}
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                           {datalist && datalist.length > 0 ? (
                            datalist.map((employee, index) => {
                              return (
                              <tr key={index}>
                                <th
                                  style={{
                                    border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                    fontSize: "14px",
                                  }}
                                >
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                    />
                                  </div>
                                </th>
                                <td
                                  style={{
                                    border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                    fontSize: "13px",
                                  }}
                                >
                                  <span>{employee.name}</span>
                                </td>
                                <td
                                  style={{
                                    border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                    fontSize: "13px",
                                  }}
                                >
                                  <span>{employee.description}</span>
                                </td>
                                <td
                                  style={{
                                    border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                    fontSize: "13px",
                                  }}
                                >
                                  <span>
                                    {new Date(
                                      employee.createdDate
                                    ).toLocaleDateString()}
                                  </span>
                                </td>
                                <td
                                  style={{
                                    border: "1px dashed  rgba(32, 29, 29, 0.1)",
                                    fontSize: "13px",
                                  }}
                                >
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-outline-secondary"
                                  >
                                    <i class="fa fa-edit"></i>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-sm btn-outline-danger ms-1"
                                    onClick={() => handleDelete(employee.id)}
                                  >
                                    <i class="fa fa-trash-o">
                                      {" "}
                                      <MdDeleteForever />
                                    </i>
                                  </button>
                                  <button
                                    type="button"
                                    class="btn ms-2 btn-sm btn-outline-secondary"
                                    onClick={() => handleShow(employee.id)}
                                  >
                                    <i class="fa fa-trash-o">
                                      <GrView style={{ color: "orange" }} />
                                    </i>
                                  </button>
                                </td>
                              </tr>
                              );
                            })
                          ):(
                            <div>
                              no data available
                            </div>
                          )
                        }
                          </tbody>
                        </Table>
                        <div class="d-flex mt">
                          <div
                            class="col-lg-9 me-4 pe-4"
                            style={{ fontSize: "15px" }}
                          >
                            Show Entries 1 to 10
                          </div>
                          <div>
                            <div
                              className="d-flex justify-content-between align-items-center mb-3 l ms-4 "
                              style={{
                                borderRadius: "50px",
                                backgroundColor: "#f9f4f4",
                              }}
                            >
                              {/* <div className="col-lg-9 d-flex align-items-center ms-1">
                                <Button
                                  className="buttfoot "
                                  variant="light"
                                  disabled={currentPage === 1}
                                  onClick={() => paginate(currentPage - 1)}
                                >
                                  Previous
                                </Button>
                                <div className="col-lg-2 ms-2 me-2">
                                  <Pagination className="pagination-custom ">
                                    {Array.from({
                                      length: Math.ceil(
                                        totalEmployees / employeesPerPage
                                      ),
                                    }).map((_, index) => (
                                      <Pagination.Item
                                        style={{ backgroundColor: "ore" }}
                                        key={index}
                                        active={index === currentPage}
                                        onClick={() => paginate(index + 1)}
                                      >
                                        <span className="">{index}</span>
                                      </Pagination.Item>
                                    ))}
                                  </Pagination>
                                </div>
                                <Button
                                  className="ms-2 col-lg-2"
                                  variant="light"
                                  disabled={indexOfLastEmployee >= totalEmployees}
                                  onClick={() => paginate(currentPage + 1)}
                                >
                                  Next
                                </Button>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Jobtitlelist;
  