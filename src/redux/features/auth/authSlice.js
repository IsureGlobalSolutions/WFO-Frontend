import { duration } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from 'react-hot-toast';
export const loginUser = createAsyncThunk("auth/loginUser", async (userData, thunkAPI) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/login`, 
      userData
    );
    
    // Store tokens
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    
    toast.success('Login successful!', { duration: 3000 });
    
    // Return the entire response data which should include roleId
    return response.data;
    
  } catch (error) {
    if (error.response) {
      const alertMessage = error.response.data.alertMessage;
      if (alertMessage) {
        toast.error(alertMessage);
      }
      if (error.response.status === 500) {
        throw { validationErrors: error.response.data.errors };
      }
    }
    throw error;
  }
});
    export const getEmployRolePermissionById = createAsyncThunk('EmployeewithpermsissionByid', async (id, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/ManageApplicationUserRoles/GetEmployeeRoleWithPermissions/${id}`, { headers });
      
          return response.data;
        
       
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const signupUser = createAsyncThunk("auth/signupUser", async (userData, thunkAPI) => {
      try {
        const headers = {
        
          'Content-Type': 'application/form-data',
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/Register`, userData, { headers });
  
      
        return response.data;
      
      } catch (error) {
        if (error.response) {
          
          const alertMessage = error.response.data.alertMessage;
          if (alertMessage) {
            toast.error(alertMessage);
          }
          if (error.response.status === 500) {
            throw { validationErrors: error.response.data.errors };
          }
        }
      }
    });
    export const forgetPasswordApi = createAsyncThunk("auth/forgetpassword", async (userData, thunkAPI) => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/ForgotPassword`, userData);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
      
        return response.data;
      
      } catch (error) {
        if (error.response) {
          ;
          const alertMessage = error.response.data.alertMessage;
          if (alertMessage) {
            toast.error(alertMessage);
          }
          if (error.response.status === 500) {
            throw { validationErrors: error.response.data.errors };
          }
        }
      }
    });
    export const resetForgetPasswordApi = createAsyncThunk("auth/resetForgetPasswordApi", async (userData, thunkAPI) => {
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/ResetForgotPassword`, userData);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
      
        return response.data;
      
      } catch (error) {
        if (error.response) {
          ;
          const alertMessage = error.response.data.alertMessage;
          if (alertMessage) {
            toast.error(alertMessage);
          }
          if (error.response.status === 500) {
            throw { validationErrors: error.response.data.errors };
          }
        }
      }
    });
    export const signout = createAsyncThunk("auth/signout", async (_, thunkAPI) => {
      try {
        if (!localStorage.getItem("accessToken")) {
          console.error("Authorization Token is undefined");
          throw new Error("Authorization Token is undefined");
        }
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/UserSignOut`, null, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        });
        localStorage.removeItem("accessToken");
        return response.data;
      } catch (error) {
        if (error.response && error.response.status === 401) { // Token expired
        } else if (error.response && error.response.status === 500) {
          throw { validationErrors: error.response.data.errors };
        } else {
          throw error;
        }
      }
    });
    export const addEmployeeApi = createAsyncThunk('organization/addEmployee', async (data, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/form-data',
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/AddEmployee`,data, { headers });
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        // alert("API NOT WORK")
      }
    });
    export const getFteData = createAsyncThunk('getFteData', async (_, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/OrganizationFTEAPI/GetAll?30`, { headers });
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        // alert("API NOT WORK")
      }
    });

    export const addEditFte = createAsyncThunk('addEditFte', async (fteData, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/OrganizationFTEAPI/AddEdit`, fteData, { headers });
       
          return response.data;
       
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const OrganizationFteById = createAsyncThunk('OrganizationFteById', async (id, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/OrganizationFTEAPI/GetByOrganizationId/${id}`, { headers });
      
          return response.data;
        
       
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });

   

    export const addEditDeparment = createAsyncThunk("department/addEditDepartment", async (fteData, thunkAPI) => {
      
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/DepartmentAPI/AddEdit`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage, { duration: 2000 });
          return response.data;
        }else {
          toast.error(response.data.alertMessage , { duration: 2000 });
      }
      } catch (error) {
        toast.error("Recognize that this is an API problem." , {duration:3000});
      }
    });
    export const addEditDeparmentFTE = createAsyncThunk("department/addEditDepartmentFTE", async (fteData) => {
      try {
        
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/DepartmentFTEAPI/AddEdit`, fteData, { headers });
       
          return response.data;
       
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const addEditDesignationAPIFTE= createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
      
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/JobTitleAPI/AddEditJobFTE`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage)
          return response.data;
        }else {
          toast.error(response.data.alertMessage)
        }
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const addEditProjecttFTE = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/ProjectApi/AddEditProjectFTE`, fteData, { headers });
        
          return response.data;
       
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const addEditEstimationFte = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
        
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/form-data",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/AddFile`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage)
          return response.data;
        }else {
          toast.error(response.data.alertMessage)
        }
      } catch (error) {
        
        toast.error(error.response.data.alertMessage)
      }
    });
    export const getSubDepartmentFteById = createAsyncThunk("/getSubDepartmentFteById", async (id, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/SubDepartmentAPI/GetSubDepartmentFTEById/${id}`, { headers });
      
          return response.data;
        
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const addEditSubDepartmentFTE = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/SubDepartmentAPI/AddEditSubDepartmentFTE`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage)
          return response.data;
        }else {
          toast.error(response.data.alertMessage)
        }
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    const fteSlice = createSlice({
      name: "fte",
      initialState: {
      },    
      extraReducers: (builder) => {
        builder
          .addCase(addEditFte.pending, (state) => {
           
          })
          .addCase(addEditFte.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload && action.payload.authToken) {
              state.success = true;
              state.user = {
                authToken: action.payload.authToken,
              };
            } else {
              state.success = false;
              state.error = "Invalid server response"; 
            }
            state.validationErrors = null;
          })
          .addCase(addEditFte.rejected, (state, action) => {
           
          });
      },
        });
    export const  DeparmentFTEwithid = createAsyncThunk("/DeparmentFTEwithid", async ({id , selectedCategory} , thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetSubCategoryFTEDropdown/${selectedCategory}/${id}` , { headers });
        console.log(response.data ,  "responsedtaaaa")  
        return response.data;
        
      } catch (error) {
        console.error("GET FTE Error:", error);
    
    }});


    export const getProjectFteData = createAsyncThunk("/getProjectFteData", async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/ProjectApi/GetAllProjectFTE`, { headers });
        // console.log("GET FTE Response:", response.data);
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        console.error("GET FTE Error:", error);
      
      }
    });
    export const getProjectFteById = createAsyncThunk("/getProjectFteById", async (id, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/ProjectApi/GetProjectFTEById/${id}`, { headers });
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        console.error("GET FTE Error:", error);
      
      }
    });


    export const getSubdepFteData = createAsyncThunk("getSubdepFteData", async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/SubDepartmentAPI/GetAllSubDepartmentFTE`, { headers });    
        console.log(response , "responsedtaa");
        if (response.data) {

          return response.data;
        }
      } catch (error) {
        // toast.error(error.response.data.alertMessage)
       
      }
    });
    export const getTeamFteData = createAsyncThunk('/getTeamFteData', async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/TeamAPI/GetAllTeamFte`, { headers });
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        console.error("GET FTE Error:", error);
        
      }
    });
    export const getJobTitleFteData = createAsyncThunk("/getJobTitleFteData", async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/JobTitleAPI/GetAllJobFTE`, { headers });
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        console.error("GET FTE Error:", error);
       
      }
    });
    export const getDepFteData = createAsyncThunk("/get-department-data", async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/DepartmentAPI/GetAllFTE`, { headers });
        // console.log("GET FTE Response:", response.data);
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        // alert("API NOT Work")
      }
    });
    export const getPermissionsData = createAsyncThunk('/getPermissionsData', async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/ManageApplicationUserRoles/GetPermissionsAndSubPermissions`, { headers });
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        console.error("GET FTE Error:", error);
        
      }
    });
    export const getDepartmentFteById = createAsyncThunk("/getDepartmentFteById", async (id, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/DepartmentAPI/GetFTEById/${id}`, { headers });
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        // alert("API NOT Work")
      }
    });
    export const getDepartmentById = createAsyncThunk("/getDepartmentById", async (id, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/DepartmentAPI/GetById/${id}`, { headers });
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        // alert("API NOT Work")
      }
    });
    export const getProjectById = createAsyncThunk("/getProjectById", async (id, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/ProjectApi/GetProjectById/${id}`, { headers });
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        // alert("API NOT Work")
      }
    });
    export const getTeamById = createAsyncThunk("/getTeamById", async (id, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/TeamAPI/GetById/${id}`, { headers });
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        // alert("API NOT Work")
      }
    });
    export const GetCostingById = createAsyncThunk("/getProjectFteById", async (id, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/Costing/GetById?id=${id}`, { headers });
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        console.error("GET FTE Error:", error);
      
      }
    });
    export const getEmployeeTypeById = createAsyncThunk("/getEmployeeTypeById", async (id, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EmployeeTypeAPI/GetById/${id}`, { headers });
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        // alert("API NOT Work")
      }
    });
    export const getSubDepartmentById = createAsyncThunk("/getDepartmentFteById", async (id, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/SubDepartmentAPI/GetSubDepartmentById/${id}`, { headers });
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        // alert("API NOT Work")
      }
    });
    export const getuserprofileData = createAsyncThunk("/get-fte-data", async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get("https://localhost:5001/api/UserProfileAPI/GetGenUserProfile/admin@gmail.com", { headers });
        // console.log("GET FTE Response:", response.data);
    
        if (response.data) {
          return response.data;
        }
      } catch (error) {
        console.error("GET FTE Error:", error);
       
      }
    });
    export const addEditProject = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${ localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/ProjectApi/AddEditProject`, fteData, { headers });
        // console.log("NewFTE Response:", response);
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage, { duration: 2000 });
          return response.data;
        }else {
          toast.error(response.data.alertMessage , { duration: 2000 });
      }
      } catch (error) {
             toast.error("Recoganize that this is an API problem.")        
      }
    });
    export const addEditEmplyeetype = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${ localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/EmployeeTypeAPI/AddEdit`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage, { duration: 2000 });
          return response.data;
        }else {
          toast.error(response.data.alertMessage , { duration: 2000 });
      }
      } catch (error) {
        toast.error("Recognize that this is an API problem." )
      }
    });
    export const addEditSubDepartment = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
        // console.log("NewFTE Request Payload:", fteData);
    
        // const authToken = selectAuthToken(thunkAPI.getState());
        // console.log("Authorization Token:", authToken);
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/SubDepartmentAPI/AddEditSubDepartment`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage, { duration: 2000 });
          return response.data;
        }else {
          toast.error(response.data.alertMessage , { duration: 2000 });
      }
      } catch (error) {
        toast.error("Recoganize that this is an API problem.")        
      }
    });
    export const addEditCosting = createAsyncThunk("/add-cost-fte", async (fteData, thunkAPI) => {
      try {
        // console.log("NewFTE Request Payload:", fteData);
    
        // const authToken = selectAuthToken(thunkAPI.getState());
        // console.log("Authorization Token:", authToken);
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/Costing/EditCosting`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage, { duration: 2000 });
          return response.data;
        }else {
          toast.error(response.data.alertMessage , { duration: 2000 });
      }
      } catch (error) {
        toast.error("Recoganize that this is an API problem.")        
      }
    });
    export const addEditJobTitle = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/JobTitleAPI/AddEdit`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage, { duration: 2000 });
          return response.data;
        }else {
          toast.error(response.data.alertMessage , { duration: 2000 });
      }
      } catch (error) {
        toast.error("Recoganize that this is an API problem." ,  { duration: 2000 });
      }
    });
    export const getTeamFteById = createAsyncThunk("/getTeamFteById", async (id, thunkAPI) => {
      try {

        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/TeamAPI/GetTeamFteById/${id}`, { headers });
       
          return response.data;
      
      } catch (error) {
        toast.error("Recoganize that this is an API problem." ,  { duration: 2000 });
      }
    });
    export const addEditTeamtFTE = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {

        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/TeamAPI/AddEditTeamFte`, fteData, { headers });
        
          return response.data;
        
      } catch (error) {
        toast.error("Recoganize that this is an API problem." ,  { duration: 2000 });
      }
    });
    export const addEditTeam = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
      
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/TeamAPI/AddEdit`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage, { duration: 2000 });
          return response.data;
        }else {
          toast.error(response.data.alertMessage , { duration: 2000 });
      }
      } catch (error) {
        toast.error('Recoganize that this is an API problem.')
      }
    });
    export const UpdateEmployeeRole = createAsyncThunk("/add-edit-fte", async (fteData, thunkAPI) => {
      try {
      
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/ManageApplicationUserRoles/UpdateEmployeeRole`, fteData, { headers });
        if (response.data.isSuccess) {
          toast.success(response.data.alertMessage, { duration: 2000 });
          return response.data;
        }else {
          toast.error(response.data.alertMessage , { duration: 2000 });
      }
      } catch (error) {
        toast.error('Recoganize that this is an API problem.')
      }
    });
    export const getDepartmentData = createAsyncThunk("department/getDepartmentData", async (_, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/DepartmentAPI/GetAll`, { headers });
        if (response.data) {
          return response.data;
        }
      } catch (error) {
       console.log("API Error")
      }
    });
    export const deleteFteData = createAsyncThunk("/delete-fte-data", async (id, thunkAPI) => {
      console.log("data", id);
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          "Content-Type": "application/json",
        };
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/OrganizationFTEAPI/Delete/${id}`, { headers });
        if (response.status === 200) {
          console.log("2");
          toast.success(response.data.alertMessage);
          return response.data;
        } 
      } catch (error) {
        console.log("3");
        const errorMessage = error.response?.data?.alertMessage || "Error occurring FTE not deleted";
        toast.error(errorMessage);
        return thunkAPI.rejectWithValue(errorMessage);
      }
    });
    export const deletejobtitle = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/JobTitleAPI/Delete/${id}`, { headers: Delete });
        if (response.data) {
          toast.success(response.data.alertMessage)
          return response.data;
        }
      }catch (error) {
          toast.error(error.response.data.alertMessage)
      }
    });
    export const getJobTitleiddata = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${ localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/JobTitleAPI/GetById/${id}`, { headers: Delete });
        if (response.data) {
          return response.data;
        }
      }catch (error) {
       
      }
    });
    export const getJobDepartmentiddata = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${ localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/departmentAPI/GetById/${id}`, { headers: Delete });
        if (response.data) {
          return response.data;
        }
      }catch (error) {
        
      }
    });
    export const getJobSubDepartmentiddata = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${ localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/SubDepartmentAPI/GetSubDepartmentById/${id}`, { headers: Delete });
        if (response.data) {
          return response.data;
        }
      }catch (error) {
        
      }
    });
    export const getJobProjectiddata = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${ localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/ProjectApi/GetProjectById/${id}`, { headers: Delete });
        if (response.data) {
          return response.data;
        }
      }catch (error) {
       
      }
    });
    export const getEmployeeiddata = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${ localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EmployeeTypeAPI/GetById/${id}`, { headers: Delete });
        if (response.data) {
          return response.data;
        }
      }catch (error) {
        toast.error("Error in API");
      }
    });
    export const getJobTeamiddata = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${ localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/TeamAPI/GetById/${id}`, { headers: Delete });
        if (response.data) {
          // toast.success(response.data.alertMessage)
          return response.data;
        }
      }catch (error) {
      //  toast.error(error.response.data.alertMessage)
      }
    });
    export const deletedepartment = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/DepartmentAPI/Delete/${id}`, { headers: Delete });
        if (response.data) {
          toast.success(response.data.alertMessage)
          return response.data;
        }
      }catch (error) {
       toast.error(error.response.data.alertMessage)
      }
    });
   export const deleteDepFteData = createAsyncThunk("/delete-fte-data", async (id, thunkAPI) => {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      "Content-Type": "application/json",
    };
    const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/DepartmentAPI/DeleteFTE/${id}`, { headers });
    if (response.status === 200) {
      console.log("2");
      toast.success(response.data.alertMessage);
      return response.data;
    } 
  } catch (error) {
    console.log("3");
    const errorMessage = error.response?.data?.alertMessage || "Error occurring FTE not deleted";
    toast.error(errorMessage);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});
    export const deleteTeamFteData = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
        const Delete = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/TeamAPI/DeleteTeamFte/${id}`, { headers: Delete });
        
        if (response.status === 200) {
          toast.success(response.data.alertMessage);
          return response.data;
        } 
      } catch (error) {
        console.log("3");
        const errorMessage = error.response?.data?.alertMessage || "Error occurring FTE not deleted";
        toast.error(errorMessage);
        return thunkAPI.rejectWithValue(errorMessage);
      }
    });
    export const deleteJobTitleFteData = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/JobTitleAPI/DeleteJobFTE/${id}`, { headers: Delete });
        if (response.status === 200) {
          toast.success(response.data.alertMessage);
          return response.data;
        } 
      } catch (error) {
        const errorMessage = error.response?.data?.alertMessage || "Error occurring FTE not deleted";
        toast.error(errorMessage);
        return thunkAPI.rejectWithValue(errorMessage);
      }
    });
    export const deleteProjectFteData = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/ProjectApi/DeleteProjectFTE/${id}`, { headers: Delete });
        
        if (response.status === 200) {
          toast.success(response.data.alertMessage);
          return response.data;
        } 
      } catch (error) {
        const errorMessage = error.response?.data?.alertMessage || "Error occurring FTE not deleted";
        toast.error(errorMessage);
        return thunkAPI.rejectWithValue(errorMessage);
      }
    });
    export const deletesubdepData = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/SubDepartmentAPI/DeleteSubDepartmentFTE/${id}`, { headers: Delete });
        if (response.status === 200) {
          console.log("2");
          toast.success(response.data.alertMessage);
          return response.data;
        } 
      } catch (error) {
        console.log("3");
        const errorMessage = error.response?.data?.alertMessage || "Error occurring FTE not deleted";
        toast.error(errorMessage);
        return thunkAPI.rejectWithValue(errorMessage);
      }
    });
    export const getSubDepartment = createAsyncThunk("/get-fte-data", async (_, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/SubDepartmentAPI/GetAllSubDepartments`, { headers });
        // console.log("GET Department Response:", response.data);
    
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      
      }
    });
    export const GetAllInactiveUsers = createAsyncThunk("/get-all-inactive-user", async (_, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/GetAllInactiveUsers`, { headers });
        // console.log("GET Department Response:", response.data);
    
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      
      }
    });
    export const ApproveUser = createAsyncThunk('approveuser', async (fteData, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/ApproveUser`, fteData, { headers });
       
          return response.data;
       
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const DeactivateUser = createAsyncThunk('Deactivateuser', async (fteData, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Content-Type': 'application/json',
        };
        const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/DeactivateUser`, fteData, { headers });
       
          return response.data;
       
      } catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const GetAllactiveUsers = createAsyncThunk("/get-all-active-user", async (_, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/GetAllActiveUsers`, { headers });
        // console.log("GET Department Response:", response.data);
    
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      
      }
    });
    export const getEmployetypeData = createAsyncThunk("/get-employee-data", async (_, thunkAPI) => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EmployeeTypeAPI/GetAll`, { headers });    
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      }
    });
    export const getProject = createAsyncThunk("/Project", async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/ProjectApi/GetAllProjects`, { headers });
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      }
    });
    export const getEmployetype = createAsyncThunk("/get-fte-data", async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EmployeeTypeAPI/GetAll`, { headers });
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      }
    });
    export const getTeam = createAsyncThunk("/Team", async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/TeamAPI/GetAll`, { headers });    
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
      
      }
    });
   
    export const getJobTitle = createAsyncThunk("/JobTItle", async (_, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/JobTitleAPI/Getall`, { headers });
        // console.log("GET Department Response:", response.data);
    
        if (response.data) {
          return response.data;
        }
      }catch (error) {
      }
    });
    export const deleteProjectdata = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/ProjectApi/DeleteProject/${id}`, { headers: Delete });
  
        if (response.data) {
          toast.success(response.data.alertMessage)
          return response.data;
        }
      }catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const deleteEmployee = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/EmployeeTypeAPI/Delete/${id}`, { headers: Delete });
        
        // console.log("Delete FTE Response:", response.data);
    
        if (response.data) {
          toast.success(response.data.alertMessage);
          return response.data;
        }
      }catch (error) {
        toast.error(error.response.data.alertMessage)       
      }
    });
    export const deletesubdepartment = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${ localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/SubDepartmentAPI/DeleteSubDepartment/${id}`, { headers: Delete });
        
        // console.log("Delete FTE Response:", response.data);
    
        if (response.data) {
          toast.success(response.data.alertMessage);
          return response.data;
        }
      }catch (error) {
        toast.error(error.response.data.alertMessage)       
        
      }
    });
    export const deleteTeam = createAsyncThunk("/get-fte-data", async (id, thunkAPI) => {
      try {
    
        const Delete = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        // console.log("Deleting FTE with id:", id);
        const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/TeamAPI/Delete/${id}`, { headers: Delete });
        
        // console.log("Delete FTE Response:", response.data);
    
        if (response.data) {
          toast.success(response.data.alertMessage);
          return response.data;
        }
      }catch (error) {
         toast.error()       
      }
    });
    export const GetAllEstimationsFileByFTE = createAsyncThunk("/get-fte-data", async ({  selectedCategory }, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetSubCategoryDropdown/${selectedCategory}`, { headers });
       console.log(response)
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
        
      }
    });
    export const Getftevalue = createAsyncThunk("/get-fte-data", async ({  selectedCategory , id}, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        console.log(selectedCategory , "selectdropdowndata2");
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetFteValueById/${id}/${selectedCategory}`, { headers });
       console.log(response)
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      }
    });
    export const DwoloadEstimationfte = createAsyncThunk("/Dowloadftefile", async ({ftename , C }, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/DownloadFile?filename=${ftename}&fileType=${C}`, { headers ,  responseType: 'blob',});
          return response.data;
      }  catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const VeiwEstimationfte = createAsyncThunk("/Dowloadftefile", async ({ftename , C}, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetExcelFileData?fileName=${ftename}&fileType=${C}`, { headers ,  responseType: 'blob',});
        console.log(response ,  "33333333333333");  
        return response;
      }  catch (error) {
        toast.error(error.response.data.alertMessage)
      }
    });
    export const GetAllEstimationsFileByFTEId = createAsyncThunk("/GetAllEstimationsFileByFTEId", async ({  selectedCategory , fteid , C}, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetAllEstimationsFileByFTEId/${selectedCategory}/${fteid}/${C}`, { headers });
       console.log(response)
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      }
    });
    export const GetAllEstimationsCustomizedFileByFTEId = createAsyncThunk("/GetAllEstimationscustomFileByFTEId", async ({  selectedCategory , fteid , C}, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        console.log(selectedCategory , "selectdropdowndata2");
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetAllEstimationsFileByFTEId/${selectedCategory}/${fteid}/${C}`, { headers });
       console.log(response)
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      }
    });
    export const GetAllEstimationsFilename = createAsyncThunk("/GetAllEstimationsFilename", async ({  selectedCategory , fteid , type}, thunkAPI) => {
      try {
    
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        };
        console.log(selectedCategory , "selectdropdowndata2");
    
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetEstimationReportFiles?fteId=${fteid}&fileType=${type}&categoryName=${selectedCategory}`, { headers });
       console.log(response  , ";dksjkdk")
        if (response.data) {
          return response.data;
        }
      }  catch (error) {
        console.error("GET FTE Error:", error);
      }
    });
  
export const getAllUserDetails = createAsyncThunk(
  "/get-fte-data",
  async (_, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/ManageUserRolesAPI/GetRolesDetail`,
        { headers }
      );
      // console.log("GET Department Response:", response.data);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("GET FTE Error:", error);
     
    }
  }
);
export const getAllUserRole = createAsyncThunk(
  "/get-userRole-data",
  async (_, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/UserManagementAPI/GetAll`,
        { headers }
      );
      // console.log("GET Department Response:", response.data);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("role", error);
     
    }
  }
);
export const getAllEmployees = createAsyncThunk(
  "/authorization/gat-all-employees",
  async (_, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/GetAllEmployees`,
        { headers }
      );
      // console.log("GET Department Response:", response.data);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("role", error);
     
    }
  }
);
export const getEmployeeDetailById = createAsyncThunk(
  "/authorization/getEmployeeDetailById",
  async (id, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/ViewEmployeeDetail`,
        {params: { userId: id },
        headers
      }
      );
      // console.log("GET Department Response:", response.data);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("role", error);
     
    }
  }
);
export const updateEmployeeData = createAsyncThunk(
  "/authorization/updateEmployeeData",
  async (data, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/form-data",
      };

      const response = await axios.patch(
        `${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/UpdateEmployee`,data,
        { headers }
      );
      // console.log("GET Department Response:", response.data);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("role", error);
     
    }
  }
);
export const deleteEmployeeData = createAsyncThunk(
  "/authorization/deleteEmployeeData",
  async (id, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };

      const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/DeleteEmployee/${id}`,{
           headers
        }
        
      );
      // console.log("GET Department Response:", response.data);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("role", error);
     
    }
  }
);
export const getUserDetailById = createAsyncThunk(
  "/get-userRole-By-ID-data",
  async (id, thunkAPI) => {
  
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/AuthenticationAPI/ViewUserDetail`,
        {
          params: { userId: id },
          headers: headers
        }
      );
      
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("role", error);
     
    }
  }
);
export const userRole = createAsyncThunk(
  "/get-user-role-data",
  async (_, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/ManageApplicationUserRoles/GetAllEmployeeRoles`,
        { headers }
      );
      // console.log("GET Department Response:", response.data);

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("GET FTE Error:", error);
      if (error.response && error.response.status === 401) {
        // Token expired
        // Attempt to refresh the token
        try {
          const refreshResponse = await axios.post(
            "your_refresh_token_endpoint",
            {
              refreshToken: localStorage.getItem("refreshToken"),
            }
          );

          // Update the access token in local storage
          localStorage.setItem("accessToken", refreshResponse.data.accessToken);

          // Retry the original request with the new token
          const retryResponse = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/ManageUserRolesAPI/GetAll`,
            {
              headers: {
                Authorization: `Bearer ${refreshResponse.data.accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );

          return retryResponse.data;
        } catch (refreshError) {
          console.error("Token Refresh Error:", refreshError);
          throw refreshError;
        }
      } else if (error.response && error.response.status === 500) {
        throw { validationErrors: error.response.data.errors };
      } else {
        throw error;
      }
    }
  }
);
export const addEditRoleManagement = createAsyncThunk(
  "/add-edit-fte",
  async (fteData, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/ManageApplicationUserRoles/AddEmployeeRole`,
        fteData,
        { headers }
      );
      if (response.status === 200) {
        toast.success("Manage User Roles has been created successfully!", {
          duration: 2000,
          position: "top-center",
        });
        console.log("response.data.alertMessage:", response.data.alertMessage);
        return response.data;
      } else {
        toast.error("Error While Adding User Role!", {
          duration: 2000,
          position: "top-center",
        });
        throw new Error("Failed to add data");
      }
    } catch (error) {
      toast.error("Error While Adding User Role!", {
        duration: 2000,
        position: "top-center",
      });
      console.error("GET FTE Error:", error);
      if (error.response && error.response.status === 401) {
        // Token expired
        try {
          const refreshResponse = await axios.post(
            "your_refresh_token_endpoint",
            {
              refreshToken: localStorage.getItem("refreshToken"),
            }
          );
          localStorage.setItem("accessToken", refreshResponse.data.accessToken);
          const retryResponse = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/ManageUserRolesAPI/AddEditUserRole`,
            {
              headers: {
                Authorization: `Bearer ${refreshResponse.data.accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );
          return retryResponse.data;
        } catch (refreshError) {
          console.error("Token Refresh Error:", refreshError);
          throw refreshError;
        }
      } else if (error.response && error.response.status === 500) {
        throw { validationErrors: error.response.data.errors };
      } else {
        throw error;
      }
    }
  }
);

export const addEditUserManagement = createAsyncThunk(
  "/add-edit-fte",
  async (fteData, thunkAPI) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/UserManagementAPI/AddEdit`,
        fteData,
        { headers }
      );
      if (response.status === 200) {
        toast.success("User has been created successfully!", {
          duration: 2000,
          position: "top-center",
        });
        console.log("response.data.alertMessage:", response.data.alertMessage);
        return response.data;
      } else {
        toast.error("Error While Adding User!", {
          duration: 2000,
          position: "top-center",
        });
        throw new Error("Failed to add data");
      }
    } catch (error) {
      toast.error("Error While Adding User!", {
        duration: 2000,
        position: "top-center",
      });
      console.error("GET FTE Error:", error);
      if (error.response && error.response.status === 401) {
        // Token expired
        try {
          const refreshResponse = await axios.post(
            "your_refresh_token_endpoint",
            {
              refreshToken: localStorage.getItem("refreshToken"),
            }
          );
          localStorage.setItem("accessToken", refreshResponse.data.accessToken);
          const retryResponse = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/UserManagementAPI/AddEdit`,
            {
              headers: {
                Authorization: `Bearer ${refreshResponse.data.accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );
          return retryResponse.data;
        } catch (refreshError) {
          console.error("Token Refresh Error:", refreshError);
          throw refreshError;
        }
      } else if (error.response && error.response.status === 500) {
        throw { validationErrors: error.response.data.errors };
      } else {
        throw error;
      }
    }
  }
);

export const deleteUser = createAsyncThunk(
  "/get-fte-data",
  async (id, thunkAPI) => {
    try {
      const Delete = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };
      const response = await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/api/UserManagementAPI/Delete/${id}`,
        { headers: Delete }
      );

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("GET FTE Error:", error);
      if (error.response && error.response.status === 401) {
        // Token expired
        // Attempt to refresh the token
        try {
          const refreshResponse = await axios.post(
            "your_refresh_token_endpoint",
            {
              refreshToken: localStorage.getItem("refreshToken"),
            }
          );

          // Update the access token in local storage
          localStorage.setItem("accessToken", refreshResponse.data.accessToken);

          // Retry the original request with the new token
          const retryResponse = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/UserManagementAPI/Delete`,
            {
              headers: {
                Authorization: `Bearer ${refreshResponse.data.accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );

          return retryResponse.data;
        } catch (refreshError) {
          console.error("Token Refresh Error:", refreshError);
          throw refreshError;
        }
      } else if (error.response && error.response.status === 500) {
        throw { validationErrors: error.response.data.errors };
      } else {
        throw error;
      }
    }
  }
);

export const deleteRole = createAsyncThunk(
  "/get-fte-data",
  async (id, thunkAPI) => {
    try {
      const Delete = {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      };
      const response = await axios.delete(
        `${process.env.REACT_APP_API_BASE_URL}/api/ManageApplicationUserRoles/DeleteEmployeeRole/${id}`,
        { headers: Delete }
      );

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.error("GET FTE Error:", error);
      if (error.response && error.response.status === 401) {
        // Token expired
        // Attempt to refresh the token
        try {
          const refreshResponse = await axios.post(
            "your_refresh_token_endpoint",
            {
              refreshToken: localStorage.getItem("refreshToken"),
            }
          );

          // Update the access token in local storage
          localStorage.setItem("accessToken", refreshResponse.data.accessToken);

          // Retry the original request with the new token
          const retryResponse = await axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/ManageUserRolesAPI/DeleteUserRole`,
            {
              headers: {
                Authorization: `Bearer ${refreshResponse.data.accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );

          return retryResponse.data;
        } catch (refreshError) {
          console.error("Token Refresh Error:", refreshError);
          throw refreshError;
        }
      } else if (error.response && error.response.status === 500) {
        throw { validationErrors: error.response.data.errors };
      } else {
        throw error;
      }
    }
  }
);

export const DeleteEstimationfile = createAsyncThunk("/DeleteEstimationfile", async (deleteid, thunkAPI) => {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };
const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/DeleteFile/${deleteid}`, { headers });
    if (response.data) {
      toast.success(response.data.alertMessage)
      return response.data;
    }
  } catch (error) {
      toast.error(error.response.data.alertMessage)
  }
});
export const getFteFileNames = createAsyncThunk("/get-fte-filenames", async (_, thunkAPI) => {
  try {

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetCostingFilesDropDown`, { headers });
    console.log(response  ,"488484848");
      return response.data;
   
  }  catch (error) {
    console.error("GET FTE Error:", error);
  }
});
export const getdesignationdata = createAsyncThunk("/get-fte-designationfilename", async ( value ,  thunkAPI) => {
  try {

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };

    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetExcelFileData?fileName=${value}&fileType=O`, { headers });
    console.log(response  ,"responsivedtaa");
      return response.data;
   
  }  catch (error) {
    console.error("GET FTE Error:", error);
  }
});
export const Addtotalcost = createAsyncThunk("/add-edit-fte", async (constdata, thunkAPI) => {

  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };
    const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/Costing/AddCosting`, constdata, { headers });
    if (response && response.data) {
      if (response.data.isSuccess) {
        toast.success(response.data.alertMessage);
        return response.data;
      } else {
        toast.error(response.data.alertMessage);
        return thunkAPI.rejectWithValue(response.data.alertMessage); 
      }
    } 
  } catch (error) {
    toast.error(error.response.data.alertMessage)
  }
});
export const GetALLcostdata = createAsyncThunk("/GetALLcostdata", async (constdata, thunkAPI) => {

  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/Costing/GetAll`, { headers });
    console.log(response ,  "responcostdatacode");
      return response.data;
  } catch (error) {
    console.log("error");
   }
});


export const GetAllCostingByFile = createAsyncThunk("/GetAllCostingByFile", async (selectedFile, thunkAPI) => {


  try {
    const headers = {             
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };
    console.log(``);

    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/Costing/GetAllCostingByFile/${selectedFile}`, { headers });
    console.log(response ,  "costfiledata");
      return response.data;
  } catch (error) {
    console.log("error");
   }
});
export const Costdelete = createAsyncThunk("/DeleteCostAPI", async (id, thunkAPI) => {
  try {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };
    
const response = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/Costing/DeleteCosting?id=${id}`, { headers });
    if (response.data) {
      toast.success(response.data.alertMessage)
      return response.data;
    }
  } catch (error) {
      toast.error(error.response.data.alertMessage)
  }
});
export const GetExcelData = createAsyncThunk("/getexceldata", async ({ftefilename }, thunkAPI) => {
  try {

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };    
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/GetExcelFileData?fileName=${ftefilename}&fileType=O`, { headers ,  responseType: 'blob',});
    console.log(response ,  "33333333333333");  
    return response;
  }  catch (error) {
    toast.error(error.response.data.alertMessage)
  }
});
export const GetReportcalculation = createAsyncThunk("/getexceldata", async ({selectedfile , category ,type }, thunkAPI) => {
  try {

    const headers = {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Content-Type": "application/json",
    };    
    const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/EstimationApi/ReportCalculation?fileName=${selectedfile}&fileType=${type}${category ? `&category=${category}` : ''}`, { headers ,  responseType: 'blob',});
    return response;
  }  catch (error) {
    toast.error(error.message)
  }
});

    const authSlice = createSlice({
      name: "auth",
      initialState: {
        user: null,
        loading: false,
        success: false,
        error: null,
        errorMessage: null,
        validationErrors: {},
        organizationdata: [],
        employeeData:[],
        departmentData: [],
        Departmentname:[],
        SubdepartmentData:[],
        ProjectData:[],
        TeamData:[],
        JobTitleData:[],
        SubDepartmentList:[],
        GetProjectList:[],
        Teamname:[],
        Jobtitlename:[],
        FTEwithid:[],
        files:[],
        customfile:[],
        filenames:[],
        designationname:[],
        costdatalist:[],
        getexceldata:[],
        origionalfile:[],
        userRolename:[],
        getcostdata:[],
        employeeList:[],
        permissions: [],
        getallinactive:[],
        getallactive:[],

      },
      reducers: {
        setPermissions: (state, action) => {
          state.permissions = action.payload;
        },
        logoutUser: (state) => {
          state.user = null;
          state.permissions = [];
          state.success = false;
        }
      },
      reducers: {
        reset: (state) => {
          return {
            ...state,
            success: false,
            loading: false,
            error: null,
            errorMessage: null,
            user: null,
            validationErrors: {},
            organizationdata: [],
            Departmentname:[],
            ProjectData:[],
            UserRole:[],
            TeamData:[],
            JobTitleData:[],
            SubDepartmentname:[],
            designationname: [],
            tokenExpirationTime: null,
            Permissionsdata : null,
          };
        },
      },
      extraReducers: (builder) => {
        builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.validationErrors = {};
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.user = { 
            ...action.payload,
            accessToken: action.payload.accessToken 
          };
          state.error = null;
          state.validationErrors = {};
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.success = false;
          state.errorMessage = action.payload;
          state.user = null;
          if (action.payload && action.payload.validationErrors) {
            state.validationErrors = action.payload.validationErrors;
            const invalidUsername = state.validationErrors?.Username?.length > 0;
            const invalidPassword = state.validationErrors?.Password?.length > 0;
            if (invalidUsername || invalidPassword) {
              state.error = "Invalid username or password";
            } else {
              state.error = null;
            }
          } else {
            state.error = action.error.message;
          }
        })
        .addCase(getEmployRolePermissionById.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getEmployRolePermissionById.fulfilled, (state, action) => {
          state.loading = false;
          state.permissions = action.payload.userPermissions || [];
        })
        .addCase(getEmployRolePermissionById.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
          .addCase(signout.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.tokenExpirationTime = null;
          })
          .addCase(signout.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
            state.user = null;
            state.tokenExpirationTime = null;

          })
          .addCase(signout.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.tokenExpirationTime = null;

          })
          .addCase(deleteDepFteData.fulfilled, (state, action) => {
            state.loading = true;
          })
          .addCase(addEditFte.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
          })
          .addCase(addEditFte.pending, (state) => {
            state.loading = true;
          })
          .addCase(getFteData.pending, (state) => {
            state.loading = true;
          })
          .addCase(getFteData.fulfilled, (state, action) => {
            state.loading = false;
            state.organizationdata = action.payload; // Assuming the response data structure matches
          })
          .addCase(getFteData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(getAllEmployees.pending, (state) => {
            state.loading = true;
          })
          .addCase(getAllEmployees.fulfilled, (state, action) => {
            state.loading = false;
            state.employeeList = action.payload; // Assuming the response data structure matches
          })
          .addCase(getAllEmployees.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(getEmployetypeData.pending, (state) => {
            state.loading = true;
          })
          .addCase(getEmployetypeData.fulfilled, (state, action) => {
            state.loading = false;
            state.employeeData = action.payload; // Assuming the response data structure matches
          })
          .addCase(getDepFteData.pending, (state) => {
            state.loading = true;
          })
          .addCase(getDepFteData.fulfilled, (state, action) => {
            state.loading = false;
            state.departmentData = action.payload; // Assuming the response data structure matches
          })
          .addCase(getDepartmentData.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getDepartmentData.fulfilled, (state, action) => {
            state.loading = false;
            state.Departmentname = action.payload; // Assuming the response data structure matches
          })
          .addCase(getSubDepartment.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getSubDepartment.fulfilled, (state, action) => {
            state.loading = false;
            state.SubDepartmentList = action.payload; // Assuming the response data structure matches
          })
          .addCase(getProject.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getProject.fulfilled, (state, action) => {
            state.loading = false;
            state.GetProjectList = action.payload; // Assuming the response data structure matches
          })
          .addCase(getTeam.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getTeam.fulfilled, (state, action) => {
            state.loading = false;
            state.Teamname = action.payload; // Assuming the response data structure matches
          })
          .addCase(getJobTitle.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getJobTitle.fulfilled, (state, action) => {
            state.loading = false;
            state.Jobtitlename = action.payload; // Assuming the response data structure matches
          })
          .addCase(getSubdepFteData.fulfilled, (state, action) => {
            state.loading = false;
            state.SubdepartmentData = action.payload; // Assuming the response data structure matches
          })
          .addCase(getSubdepFteData.pending, (state ) => {
            state.loading = true;
          })
          
          .addCase(addEditDeparment.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
          })
          .addCase(addEditSubDepartment.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
          })
          .addCase(addEditSubDepartment.pending, (state) => {
            state.loading = true;
          })
          
          .addCase(getProjectFteData.fulfilled, (state, action) => {
            state.loading = false;
            state.ProjectData = action.payload; // Assuming the response data structure matches
          })
          .addCase(getProjectFteData.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getTeamFteData.fulfilled, (state, action) => {
            state.loading = false;
            state.TeamData = action.payload; // Assuming the response data structure matches
          })
          .addCase(getTeamFteData.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getJobTitleFteData.fulfilled, (state, action) => {
            state.loading = false;
            state.JobTitleData = action.payload; // Assuming the response data structure matches
          })
          .addCase(getJobTitleFteData.pending, (state ) => {
            state.loading = true;
          })
          .addCase(DeparmentFTEwithid.fulfilled, (state, action) => {
            state.loading = false;
            state.FTEwithid = action.payload; // Assuming the response data structure matches
          })
          .addCase(DeparmentFTEwithid.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getAllUserRole.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getAllUserRole.fulfilled, (state, action) => {
            state.loading = false;
            state.Rolename = action.payload; // Assuming the response data structure matches
          })
          .addCase(getPermissionsData.pending, (state ) => {
            state.loading = true;
          })
          .addCase(getPermissionsData.fulfilled, (state, action) => {
            state.loading = false;
            state.Permissionsdata = action.payload; // Assuming the response data structure matches
          })
          .addCase(userRole.pending, (state ) => {
            state.loading = true;
          })
          .addCase(userRole.fulfilled, (state, action) => {
            state.loading = false;
            state.userRolename = action.payload; // Assuming the response data structure matches
          })
          .addCase(DeleteEstimationfile.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(DeleteEstimationfile.fulfilled, (state, action) => {
            state.loading = false;
            state.files = state.files.filter((file) => file.id !== action.payload);
          })
          .addCase(GetAllEstimationsFileByFTEId.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(GetAllEstimationsFileByFTEId.fulfilled, (state, action) => {
            state.loading = false;
            state.files = action.payload;
          })
          .addCase(GetAllEstimationsFileByFTEId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(GetAllEstimationsCustomizedFileByFTEId.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(GetAllEstimationsCustomizedFileByFTEId.fulfilled, (state, action) => {
            state.loading = false;
            state.customfile = action.payload;
          })
          .addCase(GetAllEstimationsCustomizedFileByFTEId.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(GetAllEstimationsFilename.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(GetAllEstimationsFilename.fulfilled, (state, action) => {
            state.loading = false;
            state.origionalfile = action.payload;
          })
          .addCase(GetAllEstimationsFilename.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(getFteFileNames.fulfilled, (state, action) => {
            state.loading = false;
            state.filenames = action.payload;
          })
          .addCase(getFteFileNames.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(getdesignationdata.fulfilled, (state, action) => {
            state.loading = false;
            state.designationname = action.payload;
          })
          .addCase(getdesignationdata.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(GetAllCostingByFile.fulfilled, (state, action) => {
            state.loading = false;
            state.costdatalist = action.payload;
          })
          .addCase(GetAllCostingByFile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(GetALLcostdata.fulfilled, (state, action) => {
            state.loading = false;
            state.getcostdata = action.payload;
          })
          .addCase(GetALLcostdata.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(GetAllInactiveUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.getallinactive = action.payload;
          })
          .addCase(GetAllInactiveUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(GetAllactiveUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.getallactive = action.payload;
          })
          .addCase(GetAllactiveUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(GetExcelData.fulfilled, (state, action) => {
            state.loading = false;
            state.getexceldata = action.payload;
          })
          .addCase(GetExcelData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          });
          
      },
    });
    export const { reset } = authSlice.actions;
    export const authReducer = authSlice.reducer;
    export const { reset: resetFte } = fteSlice.actions;
    export const fteReducer = fteSlice.reducer;
    