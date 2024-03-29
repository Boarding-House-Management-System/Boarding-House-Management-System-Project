import React from 'react';
import { Box, Button, Stack, Typography } from '../../../node_modules/@mui/material/index';
import LandImg from '../../assets/images/landingimg.png';

function Landing() {
  return (
    <Stack direction={{ sm: 'column', md: 'row' }} display="flex">
      <Box flex="1">
        <Stack spacing={4}>
          <Typography variant="h1" fontFamily={'Poppins'} sx={{ fontSize: 48, pl: 8, pr: 8, pt: 8 }}>
            Tailored <span style={{ color: '#FD7401' }}>Boarding Management</span> Solutions.
          </Typography>
          <Typography fontFamily={'Poppins'} sx={{ fontSize: 16, pl: 8, pr: 8, textAlign: 'justify' }}>
            At BHMS, we specialize in revolutionizing boarding management, offering intuitive solutions for owners, users, accountants, and
            administrators, ensuring efficiency and convenience at every step.
          </Typography>
          <Stack direction="row" spacing={4} sx={{ pl: 8 }}>
            <Button variant="contained" width="12px" sx={{ fontSize: 18, fontWeight: 700, width: '170px' }}>
              Login as a tenant
            </Button>
            <Button variant="contained" width="12px" sx={{ fontSize: 18, fontWeight: 700, width: '170px' }}>
              Login as an admin
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box flex="1">
        <div
          style={{
            backgroundImage: `url(${LandImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginTop: '10px',

            height: '120vh'
          }}
        ></div>
      </Box>
    </Stack>
  );
}

export default Landing;
