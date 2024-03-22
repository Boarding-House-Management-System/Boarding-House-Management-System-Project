// material-ui
import { Grid, Stack } from '@mui/material';
import BHMS from './../../assets/images/login_illustrator.png';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import MainCard from 'components/MainCard';

//import search form
//import React from 'react';
import Form from './SearchHos';

// ==============================|| COMPONENTS - TYPOGRAPHY ||============================== //

const ComponentTypography = () => (
  <ComponentSkeleton>
    <Grid container spacing={3}>
      <Grid item xs={10} lg={12}>
        <Stack spacing={3}>
          <MainCard title="Search a Hostel" codeHighlight>
            <Stack spacing={0.75} sx={{ mt: -1.5 }}>
              <p>Please add the hostel name and relevant room ID </p>
              <div></div>
              <Form />
            </Stack>
          </MainCard>
        </Stack>
      </Grid>
    </Grid>
  </ComponentSkeleton>
);

export default ComponentTypography;
