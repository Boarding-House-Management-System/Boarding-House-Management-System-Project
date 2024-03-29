import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';

const tenantData = [
  { name: 'Shavidika Ekanayake', email: 'shavidika.ekanayake@gmail.com', phone: '071 123 4567' },
  { name: 'Themal Lakruwan', email: 'themal.desilva@gmail.com', phone: '071 123 4567' },
  { name: 'Dasun De Silva', email: 'dasun.desilva@gmail.com', phone: '071 123 4567' },
  { name: 'Roshan Bandara', email: 'dineth.jayakodi@gmail.com', phone: '071 123 4567' }
];

export default function TenantReq() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState('');
  const [tenants, setTenants] = useState(tenantData);

  const handleSelectedTenant = (email) => {
    setOpenDialog(true);
    setSelectedTenant(email);
  };

  const handleClosedDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = (email) => {
    const updatedTenants = tenants.filter((tenant) => tenant.email !== email);
    setTenants(updatedTenants);
  };

  return (
    <Box sx={{ alignItems: 'center', minHeight: 450 }}>
      <Paper elevation={0}>
        {tenants.length == 0 ? (
          <Box sx={{ maxHeight: 450, alignItems: 'baseline', justifyContent: 'center', display: 'flex' }}>
            <img src="https://i.postimg.cc/dtFkb54M/Nothing.png" alt="Nothing" border="0" style={{ height: '250px', marginTop: '50px' }} />
          </Box>
        ) : (
          tenants.map((item) => (
            <div key={item.email} style={{ padding: 5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <ListItemButton sx={{ px: 5, py: 0, minHeight: 32 }} onClick={() => handleSelectedTenant(item.email)}>
                  <ListItemText primary={item.name} secondary={item.email} primaryTypographyProps={{ fontSize: 15, fontWeight: 'bold' }} />
                </ListItemButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  sx={{ mx: 5, ':hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' } }}
                  onClick={() => handleDelete(item.email)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Divider sx={{ backgroundColor: 'rgba(255, 255, 255)', borderRadius: '5px' }} />
            </div>
          ))
        )}
      </Paper>
      <Dialog open={openDialog} onClose={handleClosedDialog}>
        <DialogTitle>Add a new Tenant</DialogTitle>
        <DialogContent>
          <Typography>Please generate a token</Typography>
          <Button variant="contained" color="primary">
            Generate Token
          </Button>
          <Typography>Send generated token to:</Typography>
          <TextField value={selectedTenant} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClosedDialog}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
