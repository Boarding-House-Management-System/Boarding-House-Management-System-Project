import React from 'react';
import { Paper, TextField, Typography } from '../../../node_modules/@mui/material/index';

const TenantSignUp1 = () => {
  return (
    <div>
      <Paper sx={{ p: 4, m: 6 }}>
        <Typography variant="h5" sx={{ pt: 2 }}>
          Tenant Registration | Step 1
        </Typography>
        <TextField required sx={{ mt: 2 }} fullWidth id="FullName" label="Full Name" variant="outlined" />
        <TextField required sx={{ mt: 2 }} fullWidth id="TenantNIC" label="Tenant NIC" variant="outlined" />
        <TextField required sx={{ mt: 2 }} fullWidth id="Address" label="Address" variant="outlined" />
        <TextField required sx={{ mt: 2 }} fullWidth id="Telephone" label="Telephone" variant="outlined" />
        <TextField required sx={{ mt: 2 }} fullWidth id="ApplyingLocation" label="Applying Location" variant="outlined" />

        {/* <Box sx={{ pt: 2, pb: 2 }}>
          <Button variant="contained">Next</Button>
        </Box> */}
      </Paper>
    </div>
  );
};

export default TenantSignUp1;
