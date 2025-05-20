// import { useState } from 'react';
// import AddUser from './AddUser';
// import EmploymentDetails from './EmploymentDetails';

// const AddUserDetail = () => {
//     const [activeTab, setActiveTab] = useState("User Data");
//     const [userDetails, setUserDetails] = useState({});
//     const [employmentDetails, setEmploymentDetails] = useState({});

//     const handleEmploymentDetailsChange = (newDetails) => {
//         setEmploymentDetails(prev => ({ ...prev, ...newDetails }));
//     };

//     const handleUserDetailsChange = (newDetails) => {
//         setUserDetails(prev => ({ ...prev, ...newDetails }));
//     };

//     const showUserComponent = () => {
//         setActiveTab("User Data");
//     };

//     const showEmploymentComponent = () => {
//         setActiveTab("Employement Data");
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const combinedData = {
//             ...userDetails,
//             ...employmentDetails
//         };
//         console.log("Form data to submit:", combinedData);
//         // Add your submission logic here
//     };

//     return (
//         <>
//             <div className="mt-1">
//                 <div className="row g-0">
//                     {["User Data", "Employement Data"].map((item) => (
//                         <div className="col-12 col-sm-2" key={item}>
//                             <button
//                                 type="button"
//                                 className={`w-100 childbutton ${activeTab === item ? 'active' : ''}`}
//                                 onClick={() => setActiveTab(item)}
//                             >
//                                 {item}
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {activeTab === "User Data" && (
//                 <AddUser
//                     onChange={handleUserDetailsChange}
//                     showEmployeeComponent={showEmploymentComponent}
//                 />
//             )}

//             {activeTab === "Employement Data" && (
//                 <EmploymentDetails
//                     onChange={handleEmploymentDetailsChange}
//                     showUserComponent={showUserComponent}
//                     onSubmit={handleSubmit}
//                 />
//             )}
//         </>
//     );
// };

// export default AddUserDetail;
import { useState } from 'react';
import AddUser from './AddUser';
import EmploymentDetails from './EmploymentDetails';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

const AddUserDetail = ({active, setActive}) => {
    const [activeTab, setActiveTab] = useState("User Data");
    const [formData, setFormData] = useState({
        userDetails: {},
        employmentDetails: {}
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleUserDetailsChange = (newDetails) => {
        setFormData(prev => ({
            ...prev,
            userDetails: { ...prev.userDetails, ...newDetails }
        }));
    };

    const handleEmploymentDetailsChange = (newDetails) => {
        setFormData(prev => ({
            ...prev,
            employmentDetails: { ...prev.employmentDetails, ...newDetails }
        }));
    };

    const showUserComponent = () => setActiveTab("User Data");
    const showEmploymentComponent = () => setActiveTab("Employment Data");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const combinedData = {
                ...formData.userDetails,
                ...formData.employmentDetails
            };
            
            console.log("Submitting data:", combinedData);
            // Here you would typically make an API call
            // await submitUserData(combinedData);
            
            alert('User created successfully!');
        } catch (error) {
            console.error("Submission error:", error);
            alert('Error creating user. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
      <>
            {/* <div className="childsection"> */}
            <Modal show={active} onHide={() => setActive(false)} centered size="lg">
      <Modal.Body className="p-4 w-100" 
      
      style={{ maxHeight: "120vh", overflowY: "auto" }}
      >
      <div className="mt-1  childsection">
      <div className="row g-0">
          {["User Data", "Employement Data"].map((item) => (
              <div className="col-12 col-md-4 col-sm-2" key={item}>
                  <button
                      type="button"
                      className={`w-100 childbutton ${activeTab === item ? 'active' : ''}`}
                      onClick={() => setActiveTab(item)}
                  >
                      {item}
                  </button>
              </div>
          ))}
      </div>
  </div>

             
        </Modal.Body>

                </Modal>
            </>
      
    );
};

AddUserDetail.propTypes = {
    // Add any props if this component receives any
};

export default AddUserDetail;