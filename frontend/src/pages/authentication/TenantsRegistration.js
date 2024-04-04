import React from 'react';

import Logo from '../../assets/images/BHMS.png';
import Stepper from '../components-overview/SignUpStepper';
// import S1 from '../../components/forms/TenantSignUp1';

// MUI imports
import { Box, Stack, Typography } from '../../../node_modules/@mui/material/index';

const TenantsRegistration = () => {
  return (
    <Stack direction={{ sm: 'column', md: 'row' }} display="flex" justifyContent="center" alignItems="center">
      <Box
        flex=".8"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 2, height: '100vh', width: '100vw', backgroundColor: '#ffff' }}
      >
        <img src={Logo} alt="Logo" style={{ maxHeight: '100%', maxWidth: '100%' }} />
        <Typography sx={{ pt: 2, fontWeight: 800, fontSize: { sm: 16, md: 24 } }}>Signup into your account</Typography>
      </Box>

      <Box
        flex="2.1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: '#f0f0f0', p: 4, height: '100vh', width: '100vw' }}
      >
        <Stepper />
      </Box>
      {/* <Box flex="2" display="flex" alignItems="center" justifyContent="center" sx={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <S1 />
      </Box>
      <Box flex=".1" display="flex" sx={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <Button variant="contained" sx={{ borderRadius: 0 }}>
          Next
        </Button>
      </Box> */}
    </Stack>
  );
};

export default TenantsRegistration;
