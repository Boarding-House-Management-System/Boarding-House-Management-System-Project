import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Grid, InputLabel, OutlinedInput, Stack, Typography, MenuItem, Select } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import { FormHelperText } from '../../../../node_modules/@mui/material/index';

const RequestRegister = () => {
  const navigate = useNavigate();

  const handleRequest = async (values, { setStatus, setSubmitting, setErrors }) => {
    try {
      setStatus({ success: false });
      // Login logic
      navigate('/');
      setSubmitting(false);
    } catch (err) {
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  };

  const loginButtonHandler = () => {
    navigate('/login');
  };

  // Define validation schema with Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    name: Yup.string().required('Required'),
    role: Yup.string().required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          name: '',
          role: '',
        }}
        validationSchema={validationSchema} // Use validation schema
        onSubmit={handleRequest}
      >
        {({ handleBlur, handleChange, handleSubmit, values, errors,isSubmitting, touched, setFieldValue }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="name-signup">Name*</InputLabel>
                  <OutlinedInput
                    id="name-login"
                    type="text"
                    value={values.name}
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="First name Last name"
                    fullWidth
                  />
                  {errors.name && touched.name && <FormHelperText error>{errors.name}</FormHelperText>}
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
                  />
                  {errors.email && touched.email && <FormHelperText error>{errors.email}</FormHelperText>}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="role">Role*</InputLabel>
                  <Select
                    id="role"
                    value={values.role}
                    onBlur={handleBlur}
                    onChange={event => setFieldValue('role', event.target.value)}
                    placeholder="Select role"
                    fullWidth
                  >
                    <MenuItem value={"ADMIN"}>Admin</MenuItem>
                    <MenuItem value={"TENANT"}>Tenant</MenuItem>
                    <MenuItem value={"OWNER"}>Owner</MenuItem>
                    <MenuItem value={"FINANCE"}>Finance</MenuItem>
                  </Select>
                  {errors.role && touched.role && <FormHelperText error >{errors.role}</FormHelperText>}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disableElevation
                  fullWidth
                  disabled={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Request
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption"> OR</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disableElevation
                  fullWidth
                  size="large"
                  type="button"
                  variant="outlined"
                  color="primary"
                  onClick={loginButtonHandler}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default RequestRegister;