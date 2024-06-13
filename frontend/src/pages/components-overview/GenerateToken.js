import React, { useState ,useEffect} from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { Button, Grid, Typography, TextField } from '../../../node_modules/@mui/material/index';
import { MenuItem, Select } from '@mui/material';
import SuccessAlert from 'popups/SuccessAlert';
import UnsuccessAlert from 'popups/UnsuccessAlert';
//import InputLabel from 'themes/overrides/InputLabel';
// import { useTheme } from '@mui/material/styles';

export default function GenerateToken({ email, role }) {
  const [recieverMail, setRecieverMail] = React.useState(`${email}` || 'abc@gmail.com');
  const [_role,setRole]=useState(role);
  const [openSuccessAlert, setOpenSuccessAlert] = React.useState(false);
  const [openUnsuccessAlert, setOpenUnsuccessAlert] = React.useState(false);
  const handleSend = () => {
    if (recieverMail === 'undefined') {
      setOpenUnsuccessAlert(true);
      return;
    }
    setOpenSuccessAlert(true);
  };

  useEffect(() => {
    setRecieverMail(email);
  }, [email]);

  return (
    <div>
      <SuccessAlert
        message={`Token sent to ${recieverMail}`}
        openSuccessAlert={openSuccessAlert}
        setOpenSuccessAlert={setOpenSuccessAlert}
      />
      <UnsuccessAlert
        message="Something went wrong"
        openUnsuccessAlert={openUnsuccessAlert}
        setOpenUnsuccessAlert={setOpenUnsuccessAlert}
      />

      <Grid item xs={12} md={12}>
        <Typography sx={{ mr: 1, mt: 1 }}>Please generate a token.</Typography>
        {/* <InputLabel htmlFor="role">{role}</InputLabel> */}
        {/* Token Generation */}
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item>
            <Select
              sx={{ mt: 1 }}
              id="role"
              value={_role}
              onChange={(event) => setRole(event.target.value)}
              placeholder="Select role"
              fullWidth
            >
              <MenuItem value={'ADMIN'}>Admin</MenuItem>
              <MenuItem value={'TENANT'}>Tenant</MenuItem>
              <MenuItem value={'OWNER'}>Owner</MenuItem>
              <MenuItem value={'FINANCE'}>Finance</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <TextField
              sx={{ mt: 1 }}
              disabled
              id="Token"
              label="Token "
              variant="outlined"
              defaultValue="https://www.google.com/search?q=to"
            />
          </Grid>
          <Grid item>
            <Button sx={{  mt: 1   }}>
              <ContentCopyIcon />
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{ mr: 0, mt: 1 }}>
              Generate a Token
            </Button>
          </Grid>
        </Grid>

        {/* Tenants Details        */}
        <Typography sx={{ pt: 2 }}>Send generated token to: </Typography>
        <form>
          <TextField
            fullWidth
            sx={{ mt: 2 }}
            required
            id="TenantEmail"
            label="Email "
            variant="outlined"
            defaultValue=" "
            value={recieverMail === 'undefined' ? ' ' : recieverMail}
            onChange={(e) => setRecieverMail(e.target.value)}
          />
        </form>
        <Button sx={{ mt: 2, mb: 2 }} variant="contained" onClick={handleSend}>
          Send
        </Button>
      </Grid>
    </div>
  );
}
