import React from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { Button, Divider, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography, MenuItem } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
// import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { Select } from '../../../../node_modules/@mui/material/index';

// ============================|| FIREBASE - LOGIN ||============================ //

const RequestRegister = () => {
  const navigate = useNavigate();
  const [role, setRole] = React.useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleRequest = () => {
    navigate('/');
  };

  const loginButtonHandler = () => {
    navigate('/login');
  };

  return (
    <>
      <Formik
        initialValues={{
          email: 'name@BHMS.com',
          password: '123456',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
          name: Yup.string().max(255).required('Name is required'),
          role: Yup.string().max(255).required('Role is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="name-signup">Name*</InputLabel>
                  <OutlinedInput
                    id="name-login"
                    type="name"
                    value={values.name}
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="First name Last name"
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                  />
                  {touched.name && errors.name && (
                    <FormHelperText error id="helper-text-name-signup">
                      {errors.name}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-login">Email Address*</InputLabel>
                  <OutlinedInput
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="standard-weight-helper-text-email-login">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="role">Role*</InputLabel>
                  <Select
                    id="role"
                    value={role}
                    onBlur={handleBlur}
                    onChange={handleRoleChange}
                    placeholder="Select role"
                    fullWidth
                    error={Boolean(touched.role && errors.role)}
                  >
                    <MenuItem value={"ADMIN"}>Admin</MenuItem>
                    <MenuItem value={"TENANT"}>Tenant</MenuItem>
                    <MenuItem value={"OWNER"}>Owner</MenuItem>
                    <MenuItem value={"ACCOUNTANT"}>Accountant</MenuItem>
                  </Select>
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button 
                    disableElevation 
                    disabled={isSubmitting} 
                    fullWidth size="large" 
                    type="submit" variant="contained" 
                    color="primary"
                    onClick={handleRequest}>
                    Request
                  </Button>
                </AnimateButton>
              </Grid>
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption"> OR</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                {/* <FirebaseSocial /> */}
                <AnimateButton>
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    onClick={loginButtonHandler}
                    fullWidth
                    size="large"
                    type="button"
                    variant="outlined"
                    color="primary"
                  >
                    Login
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default RequestRegister;
