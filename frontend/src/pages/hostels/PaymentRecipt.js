import React, { useState } from 'react';
import { Paper, TextField, Typography ,Button,Box, Input, InputLabel} from '@mui/material';

//import { Box } from '../../../node_modules/@mui/material/index';



const PaymentRecipt = () => {

    const today = new Date().toISOString().slice(0, 10);
    const [Datet,SetDate] = useState(today)
    const [Payment,SetPayment]= useState();
    const [Note,SetNote]= useState();
    const {image,SetImage}= useState(null)
    

    const handleImageChange=(e)=>{
        SetImage(e.target.files[0])
    }
    return (
        <Paper sx={{ p: 4, maxWidth: 700 }}>
          <Typography variant="h5" sx={{ pt: 2 }}>
            Payment Recipt Upload
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
            id="Payment"
            label="Payemnt"
            variant="outlined"
            value={Payment}
            type='number'
            onChange={(e) => SetPayment(e.target.value)}
          />
        <InputLabel htmlFor="Recipt">Receipt</InputLabel>
         <Input
         id='Recipt'
         fullWidth
         label='Recipt'
        type="file"
        accept="image/*" 
        variant='outlined'
        value={image}
        onChange={handleImageChange} 
        sx={{ mt: 2 }} 
      />
          <TextField
            sx={{ mt: 2 }}
            fullWidth
            id="Note"
            label="Note"
            variant="outlined"
            type= 'text'
            multiline
            rows={3}
            value={Note}
            onChange={(e) => SetNote(e.target.value)}
          />
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            
          <Button variant="outlined" sx={{ mt: 2 ,ml:'auto',mr:'auto'}}>
              Submit
            </Button>
          </Box>
        </Paper>
          
    )


}


export default  PaymentRecipt;