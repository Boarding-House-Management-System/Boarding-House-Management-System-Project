import React, { useState } from 'react';
import { Grid, Button, Card, CardMedia, Popover } from '@mui/material';
import LateRequest from 'pages/hostels/LateRequest';
import PaymentRecipt from 'pages/hostels/PaymentRecipt';
import TenantComplains from 'pages/hostels/TenantComplains';

const TenantRequests = () => {
  const [anchorElLateRequest, setAnchorElLateRequest] = useState(null);
  const [anchorElPaymentRecipt, setAnchorElPaymentRecipt] = useState(null);
  const [anchorElTenantComplains, setAnchorElTenantComplains] = useState(null);

  const togglePopover = (setAnchorFunction, currentAnchor) => (event) => {
    // Close if already open, otherwise open
    if (currentAnchor === event.currentTarget) {
      setAnchorFunction(null);
    } else {
      setAnchorFunction(event.currentTarget);
    }
  };

  // Handlers for each popover
  const handleClickLateRequest = togglePopover(setAnchorElLateRequest, anchorElLateRequest);
  const handleClickPaymentRecipt = togglePopover(setAnchorElPaymentRecipt, anchorElPaymentRecipt);
  const handleClickTenantComplains = togglePopover(setAnchorElTenantComplains, anchorElTenantComplains);

  // States to control the visibility of each popover
  const openLateRequest = Boolean(anchorElLateRequest);
  const openPaymentRecipt = Boolean(anchorElPaymentRecipt);
  const openTenantComplains = Boolean(anchorElTenantComplains);

  return (
    <Grid container spacing={2} sx={{ mt: 2, ml: 2, justifyContent: 'space-evenly' }}>
      {/* Card for Late Request */}
      <Grid item xs={12} lg={4} sm={6} md={4}>
        <Card
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '300px', width: '300px'}}
          onClick={handleClickLateRequest}
        >
          <Button variant="contained" sx={{ width: '100%', marginTop: '20px' }}>
            Submit Your Late Arrival Request
          </Button>
          <Popover
            open={openLateRequest}
            anchorEl={anchorElLateRequest}
            onClose={() => setAnchorElLateRequest(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <LateRequest />
          </Popover>
          <CardMedia
            component="img"
            height="140"
            image="/Late.png"
            alt="Late Arrival Request"
          />
        </Card>
      </Grid>
      
      {/* Card for Payment Receipt */}
      <Grid item xs={12} lg={4} sm={6} md={4}>
        <Card
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '300px', width: '300px'}}
          onClick={handleClickPaymentRecipt}
        >
          <Button variant="contained" sx={{ width: '100%', marginTop: '20px' }}>
            Upload Your Payment Receipt
          </Button>
          <Popover
            open={openPaymentRecipt}
            anchorEl={anchorElPaymentRecipt}
            onClose={() => setAnchorElPaymentRecipt(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <PaymentRecipt />
          </Popover>
          <CardMedia
            component="img"
            height="140"
            image="/Payment.png"
            alt="Payment Receipt"
          />
        </Card>
      </Grid>
      
      {/* Card for Tenant Complaints */}
      <Grid item xs={12} lg={4} sm={6} md={4}>
        <Card
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '300px', width: '300px'}}
          onClick={handleClickTenantComplains}
        >
          <Button variant="contained" sx={{ width: '100%', marginTop: '20px' }}>
            Submit Your Complaints
          </Button>
          <Popover
            open={openTenantComplains}
            anchorEl={anchorElTenantComplains}
            onClose={() => setAnchorElTenantComplains(null)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <TenantComplains />
          </Popover>
          <CardMedia
            component="img"
            height="140"
            image="/complain.png"
            alt="Tenant Complaints"
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default TenantRequests;
