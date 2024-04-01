import React, { useState } from 'react';
import { Paper, TextField, Typography ,Button,Box} from '@mui/material';

//import { Box } from '../../../node_modules/@mui/material/index';



const TenantComplains = () => {

    const today = new Date().toISOString().slice(0, 10);
    const [Datet,SetDate] = useState(today)
    const [Complain,SetComplain]= useState();
    
    
    
    return (
        <Paper sx={{ p: 4, maxWidth: 700 }}>
          <Typography variant="h5" sx={{ pt: 2 }}>
            Submit Your Complains
          </Typography>
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            id="Date"
            label="Date"
            type='Date'
            variant="outlined"
            value={Datet}
            onChange={(e) => SetDate(e.target.value)}
          />
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            id="Complain"
            label="Complain"
            variant="outlined"
            value={Complain}
            multiline
            rows={3}
            onChange={(e) => SetComplain(e.target.value)}
          />
          
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            
          <Button variant="outlined" sx={{ mt: 2 ,ml:'auto',mr:'auto'}}>
              Submit
            </Button>
          </Box>
        </Paper>
          
    )


}


export default  TenantComplains;