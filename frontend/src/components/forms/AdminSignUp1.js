import React from 'react';
import { Paper, TextField, Typography } from '@mui/material';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';

const TenantSignUp1 = ({ form1State, setForm1State }) => {
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const newState = {
      ...form1State,
      [id]: value
    };

    if (!value) {
      newState[`${id}Error`] = 'This field is required';
    } else if (id === 'NIC' && !/^[0-9]{9}[vVxX]$|^[0-9]{12}$/.test(value)) {
      newState[`${id}Error`] = 'Invalid NIC';
    } else if (id === 'Telephone' && !/^(?:0[0-9]{9}|\+94[0-9]{9}|[1-9][0-9]{8})$/.test(value)) {
      newState[`${id}Error`] = 'Invalid Telephone number.';
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

        {/* <FormControl
          required
          fullWidth
          sx={{ mt: 2 }}
          value={form1State.Role}
          onChange={handleInputChange}
          error={!!form1State.RoleError}
          helperText={form1State.RoleError}
        >
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
            <MenuItem value={10}>Owner</MenuItem>
            <MenuItem value={20}>Admin</MenuItem>
            <MenuItem value={30}>Finance</MenuItem>
          </Select>
        </FormControl> */}
      </Paper>
    </div>
  );
};

export default TenantSignUp1;
