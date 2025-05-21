//import React from 'react';
import { Typography, Button, Container } from '@mui/material';

function Home() {
  return (
    <Container className="container" sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Головна сторінка DataPulse
          </Typography>
          <Button variant="contained" color="primary">
            Натисни мене
          </Button>      
    </Container>
  );
}

export default Home;