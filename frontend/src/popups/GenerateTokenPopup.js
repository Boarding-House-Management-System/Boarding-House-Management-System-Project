import React from 'react';
import { Dialog, DialogContent, Typography, Box } from '@mui/material';
import GenerateToken from 'pages/components-overview/GenerateToken';

export default function GenerateTokenPopup({ email, openDialog, handleClosedDialog, role }) {
  //   const [openDialog, setOpenDialog] = useState(false);

  //   const handleClosedDialog = () => {
  //     setOpenDialog(false);
  //   };

  return (
    <div>
      <Dialog open={openDialog} onClose={handleClosedDialog}>
        <DialogContent>
          <Box display="flex">
            <Typography variant="h5" sx={{ pt: 2 }}>
              {role === 'TENANT' ? 'Add a Tenant' : 'Add a Staff'}
            </Typography>
            <Typography variant="h5" sx={{ pt: 2, pl: 1 }}>
              {role === 'TENANT'
                ? ''
                : role === 'ADMIN'
                  ? ' (Admin)'
                  : role === 'OWNER'
                    ? ' (Owner)'
                    : role === 'FINANCE'
                      ? ' (Finance)'
                      : ''}
            </Typography>
          </Box>
          <GenerateToken email={email} role={role} />
        </DialogContent>
        {/* <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClosedDialog}>
            Send
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
