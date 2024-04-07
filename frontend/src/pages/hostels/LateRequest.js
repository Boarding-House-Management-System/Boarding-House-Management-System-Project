import React, { useState } from 'react';
import { Paper, TextField, Typography, Button, Box } from '@mui/material';

//import { Box } from '../../../node_modules/@mui/material/index';

const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

const LateRequest = () => {
  const today = new Date().toISOString().slice(0, 10);
  const [Datet, SetDate] = useState(today);
  const [Reason, SetReason] = useState();
  const [ArrivalTime, SetArrivalTime] = useState(getCurrentTime());

  return (
    <Paper sx={{ p: 4, maxWidth: 700 }}>
      <Typography variant="h5" sx={{ pt: 2 }}>
        Late Arrival Request
      </Typography>
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="Date"
        label="Date"
        type="Date"
        variant="outlined"
        value={Datet}
        onChange={(e) => SetDate(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="Reason"
        label="Reason"
        variant="outlined"
        value={Reason}
        multiline
        rows={3}
        onChange={(e) => SetReason(e.target.value)}
      />
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        id="ArrivalTime"
        label="Approximate Arrival Time"
        variant="outlined"
        type="time"
        value={ArrivalTime}
        onChange={(e) => SetArrivalTime(e.target.value)}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Button variant="outlined" sx={{ mt: 2, ml: 'auto', mr: 'auto' }}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
};

export default LateRequest;
