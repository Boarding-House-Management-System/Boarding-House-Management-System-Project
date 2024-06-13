import React, { useState } from 'react';
import { Grid, Button, Card, CardMedia, Popover } from '@mui/material';
import LateRequest from 'pages/hostels/LateRequest';
import PaymentRecipt from 'pages/hostels/PaymentRecipt';
import TenantComplains from 'pages/hostels/TenantComplains';

const TenantRequests = () => {
  const [anchorElLateRequest, setAnchorElLateRequest] = useState(null);
  const [anchorElPaymentRecipt, setAnchorElPaymentRecipt] = useState(null);
  const [anchorElTenantComplains, setAnchorElTenantComplains] = useState(null);

  const handleClickLateRequest = (event) => {
    setAnchorElLateRequest(event.currentTarget);
  };

  const handleCloseLateRequest = () => {
    setAnchorElLateRequest(null);
  };

  const handleClickPaymentRecipt = (event) => {
    setAnchorElPaymentRecipt(event.currentTarget);
  };

  const handleClosePaymentRecipt = () => {
    setAnchorElPaymentRecipt(null);
  };

  const handleClickTenantComplains = (event) => {
    setAnchorElTenantComplains(event.currentTarget);
  };

  const handleCloseTenantComplains = () => {
    setAnchorElTenantComplains(null);
  };

  const openLateRequest = Boolean(anchorElLateRequest);
  const openPaymentRecipt = Boolean(anchorElPaymentRecipt);
  const openTenantComplains = Boolean(anchorElTenantComplains);

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75} mt={6} mb={6}>
      <Grid item xs={12} lg={4} sm={6} md={4}>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 300 }}>
          <Button onClick={handleClickLateRequest} variant="contained" sx={{ width: '100%' }}>
            Submit Your Late Arrival Request
          </Button>
          <Popover
            open={openLateRequest}
            anchorEl={anchorElLateRequest}
            onClose={handleCloseLateRequest}
            anchorOrigin={{
              vertical: 'middle',
              horizontal: 'center'
            }}
          >
            <LateRequest />
          </Popover>
          <CardMedia component="img" height="250" image="/Late.png" alt="Image 1" />
        </Card>
      </Grid>
      <Grid item xs={12} lg={4} sm={6} md={4}>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 300 }}>
          <Button onClick={handleClickPaymentRecipt} variant="contained" sx={{ width: '100%' }}>
            Upload Your Payment Receipt
          </Button>
          <Popover
            open={openPaymentRecipt}
            anchorEl={anchorElPaymentRecipt}
            onClose={handleClosePaymentRecipt}
            anchorOrigin={{
              vertical: 'middle',
              horizontal: 'center'
            }}
          >
            <PaymentRecipt />
          </Popover>
          <CardMedia component="img" height="250" image="/Payment.png" alt="Image 2" />
        </Card>
      </Grid>
      <Grid item xs={12} lg={4} sm={6} md={4}>
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 300 }}>
          <Button onClick={handleClickTenantComplains} variant="contained" sx={{ width: '100%' }}>
            Submit Your Complaints
          </Button>
          <Popover
            open={openTenantComplains}
            anchorEl={anchorElTenantComplains}
            onClose={handleCloseTenantComplains}
            anchorOrigin={{
              vertical: 'middle',
              horizontal: 'left'
            }}
          >
            <TenantComplains />
          </Popover>
          <CardMedia component="img" height="250" image="/complain.png" alt="Image 3" />
        </Card>
      </Grid>
    </Grid>
  );
};

export default TenantRequests;
