import React from 'react';
import { Paper, TextField, Typography } from '@mui/material';

const TenantSignUp2 = ({ form2State, setForm2State }) => {
  // const [form2State, setForm2State] = useState({
  //   Username: '',
  //   Email: '',
  //   Password: '',
  //   ConfirmPassword: '',
  // });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const newState = {
      ...form2State,
      [id]: value
    };

    if (!value) {
      newState[`${id}Error`] = 'This field is required';
    } else if (id === 'Email' && !/^\S+@\S+\.\S+$/.test(value)) {
      newState[`${id}Error`] = 'Invalid Email';
    } else if (id === 'ConfirmPassword' && value !== form2State.Password) {
      newState[`${id}Error`] = 'Passwords do not match';
    } else {
      newState[`${id}Error`] = '';
    }

    setForm2State(newState);
  };

  return (
    <div>
      <Paper sx={{ p: 4, m: 6 }}>
        <Typography variant="h5" sx={{ pt: 2 }}>
          Tenant Registration | Step 2
        </Typography>
        <TextField
          required
          id="Username"
          sx={{ mt: 2 }}
          value={form2State.Username}
          onChange={handleInputChange}
          error={!!form2State.UsernameError}
          helperText={form2State.UsernameError}
          fullWidth
          label="Username"
          variant="outlined"
        />
        <TextField
          required
          id="Email"
          sx={{ mt: 2 }}
          value={form2State.Email}
          onChange={handleInputChange}
          error={!!form2State.EmailError}
          helperText={form2State.EmailError}
          fullWidth
          label="Email"
          variant="outlined"
        />
        <TextField
          required
          type="password"
          id="Password"
          sx={{ mt: 2 }}
          value={form2State.Password}
          onChange={handleInputChange}
          error={!!form2State.PasswordError}
          helperText={form2State.PasswordError}
          fullWidth
          label="Password"
          variant="outlined"
        />
        <TextField
          required
          type="password"
          id="ConfirmPassword"
          sx={{ mt: 2 }}
          value={form2State.ConfirmPassword}
          onChange={handleInputChange}
          error={!!form2State.ConfirmPasswordError}
          helperText={form2State.ConfirmPasswordError}
          fullWidth
          label="Confirm Password"
          variant="outlined"
        />
      </Paper>
    </div>
  );
};

export default TenantSignUp2;
