// material-ui
import { Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// project import
import { Button, Grid, Paper, TextField } from '../../../node_modules/@mui/material/index';

// ==============================|| SAMPLE PAGE ||============================== //

const TenantsPage = () => (
  <Grid container rowSpacing={4.5} columnSpacing={2.75}>
    {/* Search A Tenant */}
    <Grid item xs={12} md={12} lg={3}>
      <Paper sx={{ pl: 4, pr: 4 }}>
        <Typography variant="h5" sx={{ pt: 2 }}>
          Search a Tenant
        </Typography>
        <Typography sx={{ pt: 2 }}>Please add the tenant’s NIC </Typography>
        <form>
          <TextField sx={{ mt: 2 }} id="TenantNIC" label="Tenant’s NIC " variant="outlined" />
        </form>
        <Button sx={{ mt: 2, mb: 2 }} variant="contained">
          Search
        </Button>
      </Paper>
    </Grid>

    {/* Add A Tenant */}
    <Grid item xs={12} md={12} lg={9}>
      <Paper sx={{ pl: 4, pr: 4 }}>
        <Typography variant="h5" sx={{ pt: 2 }}>
          Add a Tenant
        </Typography>
        <Typography sx={{ pt: 2 }}>Please generate a token </Typography>

        {/* Token Generation */}
        <div>
          <Button variant="outlined" sx={{ m: 2 }}>
            Generate a Token
          </Button>
          <TextField
            sx={{ mt: 2 }}
            disabled
            id="Token"
            label="Token "
            variant="outlined"
            defaultValue="https://www.google.com/search?q=to"
          />
          <Button sx={{ m: 2, ml: 0 }}>
            <ContentCopyIcon />
          </Button>
        </div>

        {/* Tenants Details        */}
        <Typography sx={{ pt: 2 }}>Send generated token to: </Typography>
        <form>
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            required
            id="TenantEmail"
            label="Tenant’s Email "
            variant="outlined"
            defaultValue="abc@gmail.com"
          />
        </form>
        <Button sx={{ mt: 2, mb: 2 }} variant="contained">
          Send
        </Button>
      </Paper>
    </Grid>
  </Grid>
);

export default TenantsPage;
