import React from 'react';
import ROPopup from '../components-overview/RoomOverviewPopup';

// material-ui
import { Grid, Typography } from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// assets

import { Button, Paper, Popover, TextField } from '../../../node_modules/@mui/material/index';

// export popover

// // avatar style
// const avatarSX = {
//   width: 36,
//   height: 36,
//   fontSize: '1rem'
// };

// // action style
// const actionSX = {
//   mt: 0.75,
//   ml: 1,
//   top: 'auto',
//   right: 'auto',
//   alignSelf: 'flex-start',
//   transform: 'none'
// };

// sales report status
// const status = [
//   {
//     value: 'today',
//     label: 'Today'
//   },
//   {
//     value: 'month',
//     label: 'This Month'
//   },
//   {
//     value: 'year',
//     label: 'This Year'
//   }
// ];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const HostelDashboard = () => {
  // const [value, setValue] = useState('today');
  // const [slot, setSlot] = useState('week');
  const revenue = 78000;
  const expenses = 18800;
  const profit = revenue - expenses;

  // export popover
  const [anchorEl, setAnchorEl] = React.useState(null);

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
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Tenants" count="500" extra="35,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Revenue" count={`${revenue} LKR`} extra="8,900" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Expenses" count={`${expenses} LKR`} extra="1,943" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Profit" count={`${profit} LKR`} extra="$20,395" />
      </Grid>

      {/* <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} /> */}

      {/* row 2 */}
      {/* <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Unique Visitor</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                Week
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid> */}

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      {/* <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid> */}

      <Grid item xs={12} md={12} lg={3}>
        <Paper sx={{ pl: 4, pr: 4 }}>
          <Typography variant="h5" sx={{ pt: 2 }}>
            Search a Hostel
          </Typography>
          <Typography sx={{ pt: 2 }}>Please add the hostel name and relevant room ID </Typography>
          <form>
            <TextField sx={{ mt: 2 }} id="Name" label="Name " variant="outlined" />
            <br />
            <TextField sx={{ mt: 2 }} id="RoomID" label="Room ID " variant="outlined" />
          </form>
          <Button sx={{ mt: 2, mb: 2 }} variant="contained" onClick={handleClick}>
            Search
          </Button>
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
            <ROPopup />
          </Popover>
        </Paper>
      </Grid>

      <Grid item xs={12} md={12} lg={9}>
        <Paper sx={{ pl: 4, pr: 4, pb: 4 }}>
          <Typography variant="h5" sx={{ pt: 2 }}>
            Add a Hostel
          </Typography>
          <Typography sx={{ pt: 2 }}>Please fill the following details to add a new hostel.</Typography>
          <form>
            <TextField fullWidth sx={{ mt: 2 }} id="Name" label="Hostel Name " variant="outlined" />
            <br />
            <TextField fullWidth sx={{ mt: 2 }} id="HostelID" label="Hostel ID " variant="outlined" />
            <br />
            <TextField fullWidth sx={{ mt: 2 }} id="HostelLocation" label="Hostel Location " variant="outlined" />
            <br />
            <TextField fullWidth sx={{ mt: 2 }} id="HostelFloors" label="Total Floors " variant="outlined" />
            <br />

            {/* Floor 1 */}
            <Typography sx={{ mt: 2 }}>Floor 1</Typography>
            <TextField sx={{ mt: 1, mr: 1 }} id="StartRoom" label="Starting Room " variant="outlined" />
            <TextField sx={{ mt: 1, mr: 1 }} id="EndRoom" label="Ending Room " variant="outlined" />
            <TextField sx={{ mt: 1, mr: 1 }} id="TenantPerRoom" label="Tenants Per Room " variant="outlined" />
            <br />
          </form>
          <Button sx={{ mt: 2, minWidth: '120px' }} variant="contained">
            Add
          </Button>
        </Paper>
      </Grid>

      {/* row 4 */}
    </Grid>
  );
};

export default HostelDashboard;
