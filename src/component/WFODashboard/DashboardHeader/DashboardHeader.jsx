import React, { useState } from "react";
import Hamburgermenu from "../../../assets/WfoAssets/PNG/hamburgermenu.png"
import Profileimg from "../../../assets/WfoAssets/PNG/profile.jpg"
import './DashboardHeader.css'
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { signout } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const DashboardHeader = ({onToggleSidebar} ) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToggle = (isOpen) => {
    setTimeout(() => {
      setIsActive(isOpen);
    }, 100);
  }
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const handleSignOut = () => {
    dispatch(signout())
      .then(() => {
        try {
          localStorage.removeItem('authToken');
        } catch (error) {
          console.error('Error removing authToken from localStorage:', error);
        }
        navigate('/signin')
      })
      .catch(error => {
        console.error("Error occurred during signout:", error);
        // Handle error gracefully (e.g., show error message to user)
      });
  };
  return (
    <>
    <div className="d-flex align-items-center justify-content-between ">
      <div className="d-md-none">
        <img
          src={Hamburgermenu}
          alt="menu"
          style={{ width: '28px', height: '28px', cursor: 'pointer' }}
          onClick={onToggleSidebar}
        />
      </div>
      <Search className="ps-4">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </div>
    <div className="fw-bold d-flex align-items-center">
  <Dropdown onToggle={handleToggle} className="custom-dropdown me-3">
    <Dropdown.Toggle 
      as="a" 
      href="#" 
      className="d-flex align-items-center gap-2 gap-md-3 dropdown-link text-decoration-none"
    >
      <div className="profile-pic" style={{width: '40px', height: '40px', minWidth: '40px'}}>
        <img 
          className='img-fluid rounded-circle' 
          src={Profileimg} 
          alt="Profile" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} 
        />
      </div>
      <div className="profile-info d-none d-sm-block">
        <span className="text-nowrap">Admin</span>
      </div>
      <i className="fas fa-chevron-down ms-1 small d-none d-sm-block"></i>
    </Dropdown.Toggle>
    
    <Dropdown.Menu className={`${isActive ? 'active p-2 ' : ''} dropdown-menu-end  p-2 mt-1`}>
      <Dropdown.Item 
        as="button" 
        className="d-flex align-items-center "
        onClick={handleSignOut}
      >
        <i className="fas fa-sign-out-alt me-2"></i>
        <span>Log out</span>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</div>
    </>
  )
}

export default DashboardHeader