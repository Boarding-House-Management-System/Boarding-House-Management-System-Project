import React, { useState } from 'react';
import { Paper, TextField, Typography, Button } from '@mui/material';
import PopTable from './RoomOverwiewPopupTable';
import { Box } from '../../../node_modules/@mui/material/index';

const RoomOverviewPopup = () => {
  const [editMode, setEditMode] = useState(false);
  const [hostelName, setHostelName] = useState('');
  const [hostelID, setHostelID] = useState('');
  const [location, setLocation] = useState('');
  const [roomID, setRoomID] = useState('');
  const [tenants, setTenants] = useState('');

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Save the edited data
    setEditMode(false);
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ pt: 2 }}>
        Room Overview
      </Typography>
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="HostelName"
        label="Hostel Name"
        variant="outlined"
        disabled={!editMode}
        value={hostelName}
        onChange={(e) => setHostelName(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="HostelID"
        label="Hostel ID"
        variant="outlined"
        disabled={!editMode}
        value={hostelID}
        onChange={(e) => setHostelID(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="Location"
        label="Location"
        variant="outlined"
        disabled={!editMode}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="RoomID"
        label="Room ID"
        variant="outlined"
        disabled={!editMode}
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="Tenants"
        label="Tenants"
        variant="outlined"
        disabled={!editMode}
        value={tenants}
        onChange={(e) => setTenants(e.target.value)}
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

      <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
        Tenants Details
      </Typography>
      <PopTable />
    </Paper>
  );
};

export default RoomOverviewPopup;

// import React from 'react';
// import { Paper, TextField, Typography } from '../../../node_modules/@mui/material/index';

// // import table
// import PopTable from './RoomOverwiewPopupTable';

// // import { Button, Paper, TextField, Typography } from '../../../node_modules/@mui/material/index';

// const RoomOverviewPopup = () => {
//   return (
//     <Paper sx={{ p: 4 }}>
//       <Typography variant="h5" sx={{ pt: 2 }}>
//         Room Overview
//       </Typography>
//       <TextField sx={{ mt: 2 }} disabled fullWidth id="HostelName" label="Hostel Name " variant="outlined" />
//       <TextField sx={{ mt: 2 }} disabled fullWidth id="HostelID" label="Hostel ID " variant="outlined" />
//       <TextField sx={{ mt: 2 }} disabled fullWidth id="Location" label="Location " variant="outlined" />
//       <TextField sx={{ mt: 2 }} disabled fullWidth id="RoomID" label="Room ID " variant="outlined" />
//       <TextField sx={{ mt: 2 }} disabled fullWidth id="Tenants" label="Tenants " variant="outlined" />

//       <Typography variant="h6" sx={{ pt: 2, pb: 2 }}>
//         Tenants Details
//       </Typography>
//       <PopTable />
//     </Paper>
//   );
// };

// export default RoomOverviewPopup;
