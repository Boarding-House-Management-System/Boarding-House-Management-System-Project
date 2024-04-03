import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

import S1 from '../../components/forms/TenantSignUp1';
import S2 from '../../components/forms/TenantSignUp2';
import { Typography } from '../../../node_modules/@mui/material/index';

const steps = ['Step 1', 'Step 2'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Stepper sx={{ pt: 4 }} activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
        {activeStep === 0 && <S1 />}
        {activeStep === 1 && <S2 />}
        {activeStep === 2 && (
          <Typography>Your request has been successfully fulfilled. Account activation is underway. We will notify you shortly.</Typography>
        )}
      </Box>
      <Box sx={{ flex: 0.1, display: 'flex', backgroundColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center', pb: 4 }}>
        {activeStep === 0 && (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        )}
        {activeStep === 1 && (
          <>
            <Button variant="contained" onClick={handleBack}>
              Back
            </Button>
            <Button variant="contained" onClick={handleSubmit} sx={{ ml: 4 }}>
              Submit
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
