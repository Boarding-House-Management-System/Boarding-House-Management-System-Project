import { useState } from 'react';
import { Button, TextField, Box, Container } from '@mui/material';

const Create = () => {
  const [name, setName] = useState('');
  const [ID, setID] = useState('');

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
      <Box component="form" noValidate autoComplete="off">
        <Box sx={{ textAlign: 'left', mb: 2 }}>
          <TextField label="Name" variant="outlined" fullWidth required value={name} onChange={(e) => setName(e.target.value)} />
          <Button variant="contained" color="primary" sx={{ mt: 1, mb: 3 }} sy={{ ml: 100, mr: 5 }}>
            Preview
          </Button>
        </Box>
        <Box sx={{ textAlign: 'left', mb: 2 }}>
          <TextField label="Room ID" variant="outlined" fullWidth required value={ID} onChange={(e) => setID(e.target.value)} />
        </Box>
        <Button variant="contained" color="secondary">
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default Create;
