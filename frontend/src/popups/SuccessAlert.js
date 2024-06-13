import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function SuccessAlert({ message, openSuccessAlert, setOpenSuccessAlert}) {
  const vertical = 'top';
  const horizontal = 'center';

  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccessAlert(false);
  };

  return (
    <div>
      {openSuccessAlert && (
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={openSuccessAlert} autoHideDuration={6000} onClose={handleClose}>
          <Alert severity="success" onClose={handleClose}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
