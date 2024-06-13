import React from 'react';

import { Paper, Grid, Box } from '../../../node_modules/@mui/material/index';

import PaymentRecord from '../components-overview/PaymentFilteringTable';
import TenantDashBoardComp1 from 'pages/dashboard/TenentDashBoardComp1';

const TenantUI = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} md={12} lg={12}>
        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
            <TenantDashBoardComp1 />
          </Box>
        </Grid>
        <Box sx={{ marginLeft: 'auto', marginRight: 'auto', width: 'fit-content' }}>
          <Paper>
            <PaymentRecord />
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TenantUI;
