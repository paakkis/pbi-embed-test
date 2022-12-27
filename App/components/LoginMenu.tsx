import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMsal, useIsAuthenticated, useAccount } from "@azure/msal-react";
import { Box, Button, Icon } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { AccountCircle } from '@mui/icons-material';

import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { PowerBiLoginRequest } from "../AuthConfig";

import Divider from '@mui/material/Divider';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LoginMenu = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});

  const loginUser = () => {
    instance.loginPopup(PowerBiLoginRequest);
  };

  const logoutUser = () => {
    navigate("/");
    instance.logoutPopup();
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isAuthenticated) {
    return (
      <Box sx={{ marginLeft: "auto" }}>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          disableElevation
          onClick={handleClick}
          startIcon={ <AccountCircle /> }
          endIcon={<KeyboardArrowDownIcon />}
          sx={{color:"white", marginRight: "12px;" }}
        >
         
        {account?.name.toUpperCase()}
        </Button>
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={()=>{handleClose();navigate("profile")}} disableRipple sx={{width:1}} >
            <AccountCircle sx={{mr:1}} />
            Profile
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={()=>{handleClose();logoutUser();}} disableRipple>
            <LogoutIcon sx={{mr:1}} />
            Logout
          </MenuItem>
        </Menu>
      </Box>
    );
  }
  else {
    return (
      <Box sx={{ marginLeft: "auto", marginRight: "12px", pt: "2px" }}>
        <Button onClick={loginUser} color="inherit" startIcon={<LoginIcon />}  >Login</Button>
      </Box>
    );

  }
}

export default LoginMenu;