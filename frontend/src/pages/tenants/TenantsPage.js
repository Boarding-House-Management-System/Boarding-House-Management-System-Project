import React from 'react';

// material-ui
import { Typography } from '@mui/material';

// project import
import { Button, Grid, Paper, Popover, TextField } from '../../../node_modules/@mui/material/index';

// test import
import TOPopup from '../components-overview/TenantOverviewPopup';

//import GenerateToken from '../components-overview/GenerateToken';

// filter table
import FilterTable from '../components-overview/TenantsFilteringTable';

// ==============================|| SAMPLE PAGE ||============================== //

const TenantsPage = () => {
  // export popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const role = 'TENANT';

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} md={12} lg={12}>
        <FilterTable />
      </Grid>

      {/* Search A Tenant */}
      <Grid item xs={12} md={12} lg={12}>
        <Paper sx={{ pl: 4, pr: 4 }}>
          <Typography variant="h5" sx={{ pt: 2 }}>
            Search a Tenant
          </Typography>
          <Typography sx={{ pt: 2 }}>Please add the tenant’s NIC </Typography>
          <div>
            <TextField sx={{ mt: 2 }} id="TenantNIC" label="Tenant’s NIC " variant="outlined" />
            <Button sx={{ mt: 2.3, mb: 2, ml: 2 }} variant="contained" onClick={handleClick}>
              Search
            </Button>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
          >
            <TOPopup />
          </Popover>
        </Paper>
      </Grid>

      {/* <Grid item xs={12} md={12} lg={8}>
        <Paper sx={{ pl: 4, pr: 4 }}>
          <Typography variant="h5" sx={{ pt: 2 }}>
            Add a Tenant
          </Typography>
          <GenerateToken role={role} />
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default TenantsPage;
