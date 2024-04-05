import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function UnsuccessAlert({ message, openUnsuccessAlert, setOpenUnsuccessAlert}) {
  const vertical = 'top';
  const horizontal = 'center';

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenUnsuccessAlert(false);
  };

  return (
    <div>
      {openUnsuccessAlert && (
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={openUnsuccessAlert} autoHideDuration={6000} onClose={handleClose}>
          <Alert severity="error" onClose={handleClose}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
