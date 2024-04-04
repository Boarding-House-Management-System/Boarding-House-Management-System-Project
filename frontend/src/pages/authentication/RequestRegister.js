import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import RequestRegister from './auth-forms/RequestRegisterForm';
import AuthWrapper from './AuthWrapper';

// ================================|| REGISTER ||================================ //

const ReqRegister = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Request</Typography>
          <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
            Already have an account?
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <RequestRegister />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default ReqRegister;
