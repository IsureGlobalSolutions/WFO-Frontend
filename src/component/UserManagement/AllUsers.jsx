import React, { useEffect, useState, useRef, useCallback, useContext } from "react";
import PropTypes from "prop-types";
import "./UserDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { GrView, GrClose } from "react-icons/gr";
import Deletemodel from "../../component/deletemodel/Deletemodel";
import { MdErrorOutline } from "react-icons/md";
import { Button, Modal, Spinner } from "react-bootstrap";
import { ReactComponent as Deleticon } from '../../assets/WfoAssets/SVG/Delete.svg';
import { ReactComponent as EditIcon } from '../../assets/WfoAssets/SVG/Edit.svg';
import { ReactComponent as Dropdownicon } from '../../assets/WfoAssets/SVG/SidebarVector.svg';
import { ReactComponent as PlusButton } from '../../assets/WfoAssets/SVG/PlusButton.svg';
import { ReactComponent as Veiw } from '../../assets/WfoAssets/SVG/Veiw.svg';
import { IoIosSearch } from "react-icons/io";
import { deleteEmployeeData, getAllEmployees, getUserDetailById } from "../../redux/features/auth/authSlice";
import { toast } from 'react-toastify';
import LatestSekeltonLoader from "../SekeltonLoader/LatestSekeltonLoader";
import { useNavigate } from "react-router-dom";
import UpdateEmployee from "./AddUser/UpdateEmployee";
import AddUser from "./AddUser/AddUser";
import PermissionsModal from "../Modals/PermissionsModal";
import AuthContext from "../../context/AuthProvider";

// Extracted components (same as in RoleList)
const SearchFilter = ({ 
  selectedColumn, 
  searchValue, 
  setSearchValue, 
  setSelectedColumn, 
  columns 
}) => {
  const dropdownRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="d-flex justify-content-end ms-2 ps-3 pb-0 pt-0 pe-0 me-0 position-relative">
      <div
        style={{
          border: "1px solid #D5D5D5",
          borderRight: "0px",
          backgroundColor: '#F9F9FB',
          borderRadius: "10px 0px 0px 10px",
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
            cursor: "pointer",
          }}
          onClick={() => setShowSearch(!showSearch)}
          aria-label="Toggle search"
        >
          <IoIosSearch className="search-icon" />
        </div>

        {showSearch && (
          <input
            type="text"
            className=""
            placeholder={`Search ${selectedColumn || '...'}`}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            disabled={!selectedColumn}
            style={{
              width: "150px",
              outline: "none",
              borderRight: "1px solid #D5D5D5",
            }}
            aria-label="Search input"
          />
        )}

        <div
          className="d-flex align-items-center px-3"
          style={{
            fontWeight: 500,
            fontSize: "15px",
            color: "#202224",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            letterSpacing: "0px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Filter By
        </div>
      </div>
      <div
        ref={dropdownRef}
        className="d-flex align-items-center"
        style={{
          position: "relative",
          border: "1px solid #D5D5D5",
          backgroundColor: '#F9F9FB',
          borderRadius: "0px 10px 10px 0px",
          display: "flex",
          alignItems: "stretch",
          justifyContent: "center"
        }}
      >
        <div
          className="d-flex align-items-center justify-content-between px-3 py-2"
          style={{
            width: "120px",
            cursor: "pointer",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "15px",
            fontWeight: 500,
            fontFamily: "Poppins, sans-serif",
          }}
          value={selectedColumn}
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="listbox"
          aria-expanded={dropdownOpen}
          aria-label="Column filter dropdown"
        >
          {selectedColumn || "Select"}
          <Dropdownicon className="ms-2" />
        </div>

        {dropdownOpen && (
          <div
            className="position-absolute bg-white"
            style={{
              top: "85%",
              left: "-1px",
              zIndex: 1000,
              marginTop: "6px",
              width: "123px",
              borderRadius: "2px",
              border: "1px solid #D5D5D5",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              whiteSpace: "nowrap",
              maxHeight: "150px",
              overflowY: "auto",
            }}
            role="listbox"
          >
            {columns
              .filter(item => item !== "Action" && item !== "S.No")
              .map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedColumn(item);
                    setShowSearch(true);
                    setSearchValue('');
                    setDropdownOpen(false);
                  }}
                  style={{
                    padding: "8px 12px",
                    borderBottom: idx !== columns.length - 1 ? "1px solid #D5D5D5" : "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    lineHeight: '100%',
                    letterSpacing: '0px',
                    fontWeight: 600,
                    backgroundColor: '#F9F9FB',
                    color: "#000000"
                  }}
                  role="option"
                  aria-selected={selectedColumn === item}
                >
                  {item}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  selectedColumn: PropTypes.string,
  searchValue: PropTypes.string,
  setSearchValue: PropTypes.func.isRequired,
  setSelectedColumn: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired
};

const PaginationControls = ({ 
  currentPage, 
  totalPages, 
  handlePageChange,
  startIndex,
  endIndex,
  totalItems
}) => {
  return (
    <div className="d-flex justify-content-between ms-2 p-4 ps-3 pb-1 pt-0 align-items-start">
      <div className="footer-text mt-3">
        Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
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
              if (currentPage > 1) handlePageChange(currentPage - 1);
            }}
            aria-label="Previous page"
            aria-disabled={currentPage <= 1}
          >
            Previous
          </div>

          <ul className="pagination pagination-sm pb-0 mb-0 p-0 m-0">
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item p-0 m-0 ${currentPage === index + 1 ? "active " : ""}`}
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
                  onClick={() => handlePageChange(index + 1)}
                  aria-label={`Page ${index + 1}`}
                  aria-current={currentPage === index + 1 ? "page" : null}
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
              if (currentPage < totalPages) handlePageChange(currentPage + 1);
            }}
            aria-label="Next page"
            aria-disabled={currentPage >= totalPages}
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};

PaginationControls.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  startIndex: PropTypes.number.isRequired,
  endIndex: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired
};

const UserList = ({ selectedModule }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { permissions } = useContext(AuthContext);
  
  // Check permissions
  
  const ftePermission = permissions?.userPermissions?.find(
    perm => perm.permissionName === "Employees Detail"
  ) || { subPermissions: [{ subPermissionName: "Add" }, { subPermissionName: "Edit" }, { subPermissionName: "Delete" }, { subPermissionName: "View" }] };
  
  
  const canAddFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Add");
  const canEditFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Edit");
  const canDeleteFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "Delete");
  const canViewFTE = permissions == null || ftePermission?.subPermissions?.some(sub => sub.subPermissionName === "View");
  

  const [showPermissionModal, setShowPermissionModal] = useState(false);
  // View states
  const [viewMode, setViewMode] = useState('list'); // 'list', 'add', 'edit'
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // List view states
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedColumn, setSelectedColumn] = useState('');
  const [searchValue, setSearchValue] = useState('');
  
  // Delete modal states
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  
  // View modal states
  const [viewModal, setViewModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Edit state
  const [editUserId, setEditUserId] = useState(null);

  // Constants
  const itemsPerPage = 5;
  const columnMap = {
    "First Name": "firstName",
    "Last Name": "lastName",
    "Phone Number": "phoneNumber",
    "Email": "email"
  };

  const arrData = [
    "S.No",
    "First Name",
    "Last Name",
    "Phone Number",
    "Email",
    "Action"
  ];

  // Selectors
  const users = useSelector((state) => state.auth.employeeList);
  const loading = useSelector((state) => state.auth.loading);

  // Fetch data function
  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      await dispatch(getAllEmployees());
    } catch (error) {
      setError("Error fetching users");
      toast.error("Error fetching users");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Filter data based on search
  const filteredData = React.useMemo(() => {
    if (!selectedColumn || !searchValue.trim()) return users || [];

    const columnKey = columnMap[selectedColumn];
    if (!columnKey) return users || [];

    return (users || []).filter(item => {
      const value = item[columnKey];
      return value && value.toString().toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [users, selectedColumn, searchValue]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredData?.length / itemsPerPage) || 0;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData?.length || 0);
const paginatedData = (Array.isArray(filteredData) ? filteredData : []).slice(startIndex, endIndex);
  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue, selectedColumn]);

  // Handlers
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    if (!canDeleteFTE) {
      setShowPermissionModal(true);
      return;
    }
    setShowDeleteModal(true);
    setDeleteId(id);
  };

  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleCloseViewModal = () => setViewModal(false);

  const handleEdit = (id) => {
    if (!canEditFTE) {
      setShowPermissionModal(true);
      return;
    }
    navigate('/editEmployee', { state: { id } });
  };

  const handleAddUser = () => {
      if (!canAddFTE) {
       setShowPermissionModal(true);
       return;
     }
    setViewMode('add');
  };

  const handleBackToList = () => {
    setViewMode('list');
    setEditUserId(null);
    fetchUsers();
  };

  const handleViewDetails = async (id) => {
    try {
      setIsLoading(true);
      const response = await dispatch(getUserDetailById(id));
      if (response.payload) {
        setSelectedItem(response.payload);
        setViewModal(true);
      }
    } catch (error) {
      toast.error("Error fetching user details");
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelete = async () => {
    try {
      setIsLoading(true);
      const response = await dispatch(deleteEmployeeData(deleteId));
      if (response.payload?.isSuccess) {
        setShowDeleteModal(false);
        await fetchUsers(); // Refresh the list
        toast.success(response.payload?.alertMessage || "User deleted successfully");
      } else {
        toast.error(response.payload?.message || "Failed to delete user");
      }
    } catch (error) {
      toast.error("Error deleting user");
    } finally {
      setIsLoading(false);
      setDeleteId(null);
    }
  };

  const renderListView = () => (
    <>
      <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0E3E9" }} className="mt-1">
        <div className="d-flex justify-content-between align-items-center ms-2 p-4 ps-3 pb-0 mb-1">
          <p className="mb-1" style={{
            fontWeight: 600,
            fontSize: '18px',
            lineHeight: '100%',
            letterSpacing: '0px',
            color: "#000000",
            fontFamily: "Poppins, sans-serif",
          }}>
            Employees List
          </p>
          <div className="d-flex">
            <button
              type="button"
              className="blue-button"
              onClick={handleAddUser}
              disabled={isLoading}
              aria-label="Add new user"
            >
              {isLoading ? (
                <Spinner animation="border" size="sm" className="me-2" />
              ) : (
                <PlusButton className="me-2" />
              )}
              Add User
            </button>
            <div className="d-flex">
              <SearchFilter
                selectedColumn={selectedColumn}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setSelectedColumn={setSelectedColumn}
                columns={arrData}
              />
            </div>
          </div>
        </div>

        <div className="d-flex ms-2 p-4 ps-3 pb-0 pt-0 pe-4 align-items-start">
          {error ? (
            <div className="w-100 text-center py-5">
              <MdErrorOutline size={48} className="text-danger mb-3" />
              <p className="text-danger">{error}</p>
              <button 
                className="btn btn-primary"
                onClick={fetchUsers}
              >
                Retry
              </button>
            </div>
          ) : (
            <table className="table table-hover table-striped pb-1" style={{ borderRadius: "10px" }}>
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
                {filteredData?.length > 0 ? (
                  paginatedData.map((item, id) => (
                    <tr key={item.id || id}>
                      <td style={{ borderBottom: '1px solid #dee2e6' }}>
                        {startIndex + id + 1}
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
                        {item.firstName}
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
                        {item.lastName}
                      </td>
                      <td style={{ borderBottom: '1px solid #dee2e6' }}>
                        {item.phoneNumber}
                      </td>
                      <td style={{ borderBottom: '1px solid #dee2e6' }}>
                        {item.email}
                      </td>
                      <td style={{ borderBottom: "1px solid #dee2e6", width: "150px", textAlign: "end" }}>
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
                          <button
                            className="w-50 btn-icon"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "7px",
                              borderRight: "1px solid #D5D5D5",
                              background: "none",
                              border: "none",
                              cursor: "pointer"
                            }}
                            onClick={() => handleEdit(item.id)}
                            aria-label={`Edit user ${item.firstName}`}
                          >
                            <EditIcon />
                          </button>
                          <button
                            className="w-50 btn-icon"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "7px",
                              borderRight: "1px solid #D5D5D5",
                              background: "none",
                              border: "none",
                              cursor: "pointer"
                            }}
                            onClick={() => handleDelete(item.id)}
                            aria-label={`Delete user ${item.firstName}`}
                            disabled={isLoading}
                          >
                            {isLoading && deleteId === item.id ? (
                              <Spinner animation="border" size="sm" />
                            ) : (
                              <Deleticon />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={arrData.length} style={{ borderBottom: '1px solid #dee2e6' }}>
                      {searchValue ? "No matching users found" : "No users available"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={filteredData?.length}
        />
      </div>
    </>
  );

  return (
    <>
      <Deletemodel
        show={showDeleteModal}
        handleClosedata={handleCloseDeleteModal}
        conformDelete={confirmDelete}
        message="Do you really want to remove this user?"
        isLoading={isLoading}
      />
   <PermissionsModal
        showPermissionModal={showPermissionModal}
        handleClosedata={() => setShowPermissionModal(false)}
        HeaderMessage="Permission Required"
        permissionMessage="Please contact your admin to request permission for this action."
      />
      <Modal show={viewModal} onHide={handleCloseViewModal}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "25px", fontWeight: "600" }}>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem ? (
            <div>
              <div className="d-flex mb-3">
                <div className="col-lg-4 col-md-4" style={{ fontSize: "15px", fontWeight: "bold" }}>Name</div>
                <div className="ms-4">{selectedItem.firstName} {selectedItem.lastName}</div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-lg-4 col-md-4" style={{ fontSize: "15px", fontWeight: "bold" }}>Country</div>
                <div className="ms-4">{selectedItem.country}</div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-lg-4 col-md-4" style={{ fontSize: "15px", fontWeight: "bold" }}>Joining Date</div>
                <div className="ms-4">{selectedItem.joiningDate}</div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-lg-4 col-md-4" style={{ fontSize: "15px", fontWeight: "bold" }}>Sub-Department</div>
                <div className="ms-4">{selectedItem.subDepartment}</div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-lg-4 col-md-4" style={{ fontSize: "15px", fontWeight: "bold" }}>Team</div>
                <div className="ms-4">{selectedItem.team}</div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-lg-4 col-md-4" style={{ fontSize: "15px", fontWeight: "bold" }}>Phone Number</div>
                <div className="ms-4">{selectedItem.phoneNumber}</div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-lg-4 col-md-4" style={{ fontSize: "15px", fontWeight: "bold" }}>Email</div>
                <div className="ms-4">{selectedItem.email}</div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-lg-4 col-md-4" style={{ fontSize: "15px", fontWeight: "bold" }}>Created Date</div>
                <div className="ms-4">{selectedItem.createdDate}</div>
              </div>
              <div className="d-flex mb-3">
                <div className="col-lg-4 col-md-4" style={{ fontSize: "15px", fontWeight: "bold" }}>Created By</div>
                <div className="ms-4">{selectedItem.createdBy}</div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <Spinner animation="border" />
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseViewModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="childsection pb-2">
        <h1>User Management</h1>
      </div>

      <div className="d-flex p-3 topnavbar-card" style={{
        backgroundColor: "#FFFFFF",
        boxShadow: "5.83px 5.83px 52.51px 0px #0000000D",
        width: "100%",
        justifyContent: "start",
        alignItems: "center",
        flexWrap: "nowrap",
        whiteSpace: "nowrap"
      }}>
        <h1 style={{ margin: 0 }}>Home</h1>
        <h1 className="ms-1 me-1" style={{ margin: 0 }}>/</h1>
        <h1 style={{ margin: 0 }}>User Management</h1>
        <h1 className="ms-1 me-1" style={{ margin: 0 }}>/</h1>
        <h1 style={{ color: "#4880FF", margin: 0 }}>{selectedModule}</h1>
      </div>

      {isLoading && viewMode === 'list' ? (
        <LatestSekeltonLoader />
      ) : viewMode === 'list' ? (
        renderListView()
      ) : viewMode === 'add' ? (
        <AddUser onBack={handleBackToList} onSuccess={fetchUsers}  />
      ) : viewMode === 'edit' ? (
        <UpdateEmployee userId={editUserId} 
        onBack={handleBackToList} 
        onSuccess={fetchUsers} />
      ) : null}
    </>
  );
};

UserList.propTypes = {
  selectedModule: PropTypes.string.isRequired
};

export default UserList;