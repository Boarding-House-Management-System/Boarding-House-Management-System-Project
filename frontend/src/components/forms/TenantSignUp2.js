import React from 'react';
import { Paper, TextField, Typography } from '../../../node_modules/@mui/material/index';

const TenantSignUp2 = () => {
  return (
    <div>
      {/* // step2 */}
      <Paper sx={{ p: 4, m: 6 }}>
        <Typography variant="h5" sx={{ pt: 2 }}>
          Tenant Registration | Step 2
        </Typography>
        <TextField required sx={{ mt: 2 }} fullWidth id="Username" label="Username" variant="outlined" />
        <TextField required sx={{ mt: 2 }} fullWidth id="Email" label="Email" variant="outlined" />
        <TextField required sx={{ mt: 2 }} fullWidth id="Password" label="Password" variant="outlined" />
        <TextField required sx={{ mt: 2 }} fullWidth id="ConfirmPassword" label="Confirm Password" variant="outlined" />

        {/* <Box sx={{ pt: 2, pb: 2 }}>
          <Button variant="contained">Next</Button>
        </Box> */}
      </Paper>
    </div>
  );
};

export default TenantSignUp2;
