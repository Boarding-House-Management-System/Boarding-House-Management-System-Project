// material-ui
import { Grid } from '@mui/material';

// project import
import FinanceTable from '../components-overview/FinanceTable';
// ==============================|| SAMPLE PAGE ||============================== //

const FinancePage = () => (
  <Grid container rowSpacing={4.5} columnSpacing={2.75}>
    <Grid item xs={12} sx={{ mb: -2.25 }}>
      <FinanceTable />
    </Grid>
  </Grid>
);

export default FinancePage;
