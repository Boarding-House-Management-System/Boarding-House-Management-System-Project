import React, { useState } from 'react';
import { Paper, TextField, Typography, Button } from '@mui/material';

import { Box } from '../../../node_modules/@mui/material/index';

const TenantOverviewPopup = () => {
  const [editMode, setEditMode] = useState(false);
  const [tenantName, setTenantName] = useState('');
  const [tenantID, setTenantID] = useState('');
  const [tenantNIC, setTenantNIC] = useState('');
  const [tenantAddress, setTenantAddress] = useState('');
  const [tenantEmail, setTenantEmail] = useState('');
  const [tenantTP, setTenantTP] = useState('');
  const [tenantHostel, setTenantHostel] = useState('');
  const [tenantFloor, setTenantFloor] = useState('');
  const [tenantRoom, setTenantRoom] = useState('');

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Save the edited data
    setEditMode(false);
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 700 }}>
      <Typography variant="h5" sx={{ pt: 2 }}>
        Tenant Overview
      </Typography>
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="tenantName"
        label="Tenant Name"
        variant="outlined"
        disabled={!editMode}
        value={tenantName}
        onChange={(e) => setTenantName(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="tenantNIC"
        label="Tenant NIC"
        variant="outlined"
        disabled={!editMode}
        value={tenantNIC}
        onChange={(e) => setTenantNIC(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="tenantID"
        label="Tenant ID"
        variant="outlined"
        disabled={!editMode}
        value={tenantID}
        onChange={(e) => setTenantID(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="tenantAddress"
        label="Address"
        variant="outlined"
        disabled={!editMode}
        value={tenantAddress}
        onChange={(e) => setTenantAddress(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="tenantEmail"
        label="Email"
        variant="outlined"
        disabled={!editMode}
        value={tenantEmail}
        onChange={(e) => setTenantEmail(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="tenantTP"
        label="Telephone"
        variant="outlined"
        disabled={!editMode}
        value={tenantTP}
        onChange={(e) => setTenantTP(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="tenantHostel"
        label="Tenant Hostel"
        variant="outlined"
        disabled={!editMode}
        value={tenantHostel}
        onChange={(e) => setTenantHostel(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="tenantFloor"
        label="Tenant Floor"
        variant="outlined"
        disabled={!editMode}
        value={tenantFloor}
        onChange={(e) => setTenantFloor(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="tenantRoom"
        label="Tenant Room"
        variant="outlined"
        disabled={!editMode}
        value={tenantRoom}
        onChange={(e) => setTenantRoom(e.target.value)}
      />

      <Box sx={{ pt: 2, pb: 2 }}>
        {editMode ? (
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        ) : (
          <Button variant="contained" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </Box>
    </Paper>
  );
};

export default TenantOverviewPopup;
