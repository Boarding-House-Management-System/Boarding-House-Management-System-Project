import React from 'react';
import { Paper, TextField, Typography } from '@mui/material';

const TenantSignUp1 = ({ form1State, setForm1State }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const newState = {
      ...form1State,
      [id]: value,
    };

    if (!value) {
      newState[`${id}Error`] = 'This field is required';
    } else if (id === 'NIC' && !/^[0-9]{9}[vVxX]$|^[0-9]{12}$/.test(value)) {
      newState[`${id}Error`] = 'Invalid NIC';
    } else if (id === 'Telephone' && !/^[0][0-9]{9}$/.test(value)) {
      newState[`${id}Error`] = 'Invalid Telephone number. Ex: 0712345678';
    } else {
      newState[`${id}Error`] = '';
    }

    setForm1State(newState);
  };

  return (
    <div>
      <Paper sx={{ p: 4, m: 6 }}>
        <Typography variant="h5" sx={{ pt: 2 }}>
          Tenant Registration | Step 1
        </Typography>
        <TextField
          required
          id="FullName"
          sx={{ mt: 2 }}
          value={form1State.FullName}
          onChange={handleInputChange}
          error={!!form1State.FullNameError}
          helperText={form1State.FullNameError}
          fullWidth
          label="Full Name"
          variant="outlined"
        />
        <TextField
          required
          id="NIC"
          sx={{ mt: 2 }}
          value={form1State.NIC}
          onChange={handleInputChange}
          error={!!form1State.NICError}
          helperText={form1State.NICError}
          fullWidth
          label="NIC"
          variant="outlined"
        />
        <TextField
          required
          id="Address"
          sx={{ mt: 2 }}
          value={form1State.Address}
          onChange={handleInputChange}
          error={!!form1State.AddressError}
          helperText={form1State.AddressError}
          fullWidth
          label="Address"
          variant="outlined"
        />
        <TextField
          required
          id="Telephone"
          sx={{ mt: 2 }}
          value={form1State.Telephone}
          onChange={handleInputChange}
          error={!!form1State.TelephoneError}
          helperText={form1State.TelephoneError}
          fullWidth
          label="Telephone"
          variant="outlined"
        />
        <TextField
          required
          id="Location"
          sx={{ mt: 2 }}
          value={form1State.Location}
          onChange={handleInputChange}
          error={!!form1State.LocationError}
          helperText={form1State.LocationError}
          fullWidth
          label="Location"
          variant="outlined"
        />
      </Paper>
    </div>
  );
};

export default TenantSignUp1;