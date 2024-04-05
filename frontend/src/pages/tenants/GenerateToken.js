import React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import { Button, Grid,  Typography, TextField } from '../../../node_modules/@mui/material/index';

export default function GenerateToken({email,role}) {
  return (
    <div>
      <Grid item xs={12} md={12}>
          <Typography sx={{ pt: 2 }}>Please generate a token </Typography>
            <Typography>{role==='TENANT'? '':''}</Typography>
          {/* Token Generation */}
          <div>
            <Button variant="contained" sx={{ mr: 2, mt: 0.7 }}>
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
              value={email}
            />
          </form>
          <Button sx={{ mt: 2, mb: 2 }} variant="contained">
            Send
          </Button>
        
      </Grid>
    </div>
  );
}
