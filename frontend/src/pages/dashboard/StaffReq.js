import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import GenerateTokenPopup from 'popups/GenerateTokenPopup';

const staffData = [
  { name: 'Shavidika Ekanayake', email: 'shavidika.ekanayake@gmail.com', phone: '071 123 4567', role: 'ADMIN' },
  { name: 'Themal Lakruwan', email: 'chamath.sandaru@gmail.com', phone: '071 123 4567', role: 'OWNER' },
  { name: 'Romesh Sugathapala', email: 'romesh.sugathapala@gmail.com', phone: '071 123 4567', role: 'FINANCE' },
  { name: 'Roshan Bandara', email: 'dineth.jayakodi@gmail.com', phone: '071 123 4567', role: 'ADMIN' }
]; //edited

export default function StaffReq() {
  const [openDialog, setOpenDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [staffs, setStaffs] = useState(staffData);
  const [role, setRole] = useState('');

  const handleSelectedStaff = (email, role) => {
    setOpenDialog(true);
    setEmail(email);
    setRole(role);
  };

  const handleClosedDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = (email) => {
    const updatedStaffs = staffs.filter((staff) => staff.email !== email);
    setStaffs(updatedStaffs);
  };

  return (
    <Box sx={{ alignItems: 'center', minHeight: 450 }}>
      <Paper elevation={0}>
        {staffs.length == 0 ? (
          <Box sx={{ maxHeight: 450, alignItems: 'baseline', justifyContent: 'center', display: 'flex' }}>
            <img src="https://i.postimg.cc/dtFkb54M/Nothing.png" alt="Nothing" border="0" style={{ height: '250px', marginTop: '50px' }} />
          </Box>
        ) : (
          staffs.map((staffItem) => (
            <div key={staffItem.email} style={{ padding: 5 }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <ListItemButton sx={{ px: 5, py: 0, minHeight: 32 }} onClick={() => handleSelectedStaff(staffItem.email, staffItem.role)}>
                  <ListItemText
                    primary={staffItem.name}
                    secondary={staffItem.email}
                    primaryTypographyProps={{ fontSize: 15, fontWeight: 'bold' }}
                  />
                </ListItemButton>
                <Typography variant="caption" display="block">
                  {staffItem.role === 'ADMIN' ? (
                    <Typography sx={{ color: '#1976D2' }}>admin</Typography>
                  ) : staffItem.role === 'OWNER' ? (
                    <Typography sx={{ color: '#4CAF50' }}>owner</Typography>
                  ) : (
                    <Typography sx={{ color: '#FFC107 ' }}>finance</Typography>
                  )}
                </Typography>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  sx={{ mx: 5, ':hover': { backgroundColor: 'rgba(255, 0, 0, 0.1)' } }}
                  onClick={() => handleDelete(staffItem.email)}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Divider sx={{ backgroundColor: 'rgba(255, 255, 255)', borderRadius: '5px' }} />
            </div>
          ))
        )}
      </Paper>
      {/* <Dialog open={openDialog} onClose={handleClosedDialog}>
        <DialogTitle>Add a new Staff</DialogTitle>
        <DialogContent>
          <Typography>Please generate a token</Typography>
          <Button variant="contained" color="primary">
            Generate Token
          </Button>
          <Typography>Send generated token to:</Typography>
          <TextField value={email} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleClosedDialog}>
            Send
          </Button>
        </DialogActions>
      </Dialog> */}
      <GenerateTokenPopup email={email} openDialog={openDialog} handleClosedDialog={handleClosedDialog} role={role} />
    </Box>
  );
}
