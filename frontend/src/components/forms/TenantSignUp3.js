import React from 'react';
import { Paper, TextField, Typography } from '@mui/material';

const TenantSignUp3 = ({ form3State, setForm3State }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const newState = {
      ...form3State,
      [id]: value
    };

    if (!value) {
      newState[`${id}Error`] = 'This field is required';
    } else if (id === 'Telephone' && !/^[0][0-9]{9}$/.test(value)) {
      newState[`${id}Error`] = 'Invalid Telephone number. Ex: 0712345678';
    } else {
      newState[`${id}Error`] = '';
    }

    setForm3State(newState);
  };

  return (
    <div>
      <Paper sx={{ p: 4, m: 6 }}>
        <Typography variant="h5" sx={{ pt: 2 }}>
          Tenant Registration | Step 2
        </Typography>
        <TextField
          required
          id="GuardianName"
          sx={{ mt: 2 }}
          value={form3State.GuardianName}
          onChange={handleInputChange}
          error={!!form3State.GuardianNameError}
          helperText={form3State.GuardianNameError}
          fullWidth
          label="Guardian Name"
          variant="outlined"
        />
        <TextField
          required
          id="Address"
          sx={{ mt: 2 }}
          value={form3State.Address}
          onChange={handleInputChange}
          error={!!form3State.AddressError}
          helperText={form3State.AddressError}
          fullWidth
          label="Address"
          variant="outlined"
        />
        <TextField
          required
          id="Telephone"
          sx={{ mt: 2 }}
          value={form3State.Telephone}
          onChange={handleInputChange}
          error={!!form3State.TelephoneError}
          helperText={form3State.TelephoneError}
          fullWidth
          label="Telephone"
          variant="outlined"
        />
      </Paper>
    </div>
  );
};

export default TenantSignUp3;
