import React from 'react';
import { useIsAuthenticated } from "@azure/msal-react";
import { Container, Typography, Alert } from '@mui/material';

const Home = () => {
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return (
      <Container maxWidth={false} sx={{margin: "auto", justifyContent: "center"}}>
        <Alert sx={{ border:1, padding: 2, mx: 2, marginTop: '10px' }} severity='success' >Use the left navigation menu to navigate to workspaces and open reports.</Alert>
      </Container>
    )
  }
  else {
    return (
      <Container maxWidth={false} sx={{margin: "auto", justifyContent: "center"}}>
        <Alert sx={{ border:1, padding: 2, mx: 2, marginTop: '10px' }} severity='info' ><strong>LOGIN</strong> to get started.</Alert>
        </Container>
    )
  }
}

export default Home;