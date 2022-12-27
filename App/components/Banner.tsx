import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import { Assessment } from '@mui/icons-material';

import Login from './LoginMenu';

const Banner = () => {
  let navigate = useNavigate();
  return (
    <AppBar position="relative" sx={{ zIndex: 2, height: "72px", py: 0.5, pl: 2, background: "#009FD4", justifyContent: "center"}} >
      <Box sx={{ display: 'flex', alignItems: "center"}} >
        <IconButton onClick={() => { navigate("/") }} size="large" edge="start" color="inherit" aria-label="menu" sx={{ width: "36px", height: "36px" }} >
          <Assessment sx={{ width: "36px", height: "36px" }} />
        </IconButton>
        <Typography variant="h5" flexGrow={0} sx={{ ml: 1, pt:0.5 }} >Test App</Typography>
        <Login/>
      </Box>
    </AppBar>
  )
}

export default Banner;