import React from 'react';
import { Typography, Container } from '@mui/material';

function About() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Про нас
      </Typography>
      <p>Це сторінка про проєкт DataPulse.</p>
    </Container>
  );
}

export default About;