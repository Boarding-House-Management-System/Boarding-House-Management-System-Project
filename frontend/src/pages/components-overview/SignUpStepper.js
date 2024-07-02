import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

import S1 from '../../components/forms/TenantSignUp1';
import S2 from '../../components/forms/TenantSignUp3';
import S3 from '../../components/forms/TenantSignUp2';

const steps = ['Step 1', 'Step 2', 'Step 3'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const [form1State, setForm1State] = useState({
    FullName: '',
    NIC: '',
    Address: '',
    Telephone: '',
    Location: ''
  });

  const [form3State, setForm3State] = useState({
    GuardianName: '',
    Address: '',
    Telephone: ''
  });

  const [form2State, setForm2State] = useState({
    Username: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
  });

  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  const validateForm1 = () => {
    const { FullName, NIC, Address, Telephone, Location } = form1State;
    const nicRegex = /^[0-9]{9}[vVxX]$|^[0-9]{12}$/;
    const telephoneRegex = /^[0][0-9]{9}$/;

    if (!FullName || !NIC || !Address || !Telephone || !Location) {
      return false;
    }

    if (!nicRegex.test(NIC) || !telephoneRegex.test(Telephone)) {
      return false;
    }

    return true;
  };

  const validateForm3 = () => {
    const { GuardianName, Address, Telephone } = form3State;
    const telephoneRegex = /^[0][0-9]{9}$/;

    if (!GuardianName || !Address || !Telephone) {
      return false;
    }

    if (!telephoneRegex.test(Telephone)) {
      return false;
    }

    return true;
  };

  const validateForm2 = () => {
    const { Username, Email, Password, ConfirmPassword } = form2State;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!Username || !Email || !Password || !ConfirmPassword) {
      return false;
    }

    if (!emailRegex.test(Email) || Password !== ConfirmPassword) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    setIsNextButtonDisabled(!validateForm1());
  }, [form1State]);

  useEffect(() => {
    setIsNextButtonDisabled(!validateForm3());
  }, [form3State]);

  useEffect(() => {
    setIsSubmitButtonDisabled(!validateForm2());
  }, [form2State]);

  const handleNext = () => {
    if (!isNextButtonDisabled) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    if (!isSubmitButtonDisabled) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
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
        {activeStep === 0 && <S1 form1State={form1State} setForm1State={setForm1State} />}
        {activeStep === 1 && <S2 form3State={form3State} setForm3State={setForm3State} />}
        {activeStep === 2 && <S3 form2State={form2State} setForm2State={setForm2State} />}
        {activeStep === 3 && (
          <Typography>Your request has been successfully fulfilled. Account activation is underway. We will notify you shortly.</Typography>
        )}
      </Box>
      <Box sx={{ flex: 0.1, display: 'flex', backgroundColor: '#f0f0f0', alignItems: 'center', justifyContent: 'center', pb: 4 }}>
        {activeStep === 0 && (
          <Button
            variant="contained"
            sx={{
              color: isNextButtonDisabled ? 'black' : 'contained',
              borderColor: isNextButtonDisabled ? 'darkgray' : 'contained',
              backgroundColor: isNextButtonDisabled ? 'lightgray' : 'contained',
              '&:hover': {
                backgroundColor: isNextButtonDisabled ? 'lightgray' : 'contained'
              },
              '&:disabled': {
                cursor: 'not-allowed'
              }
            }}
            onClick={handleNext}
          >
            Next
          </Button>
        )}
        {activeStep === 1 && (
          <>
            <Button variant="contained" onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              sx={{
                ml: 4,
                color: isNextButtonDisabled ? 'black' : 'contained',
                borderColor: isNextButtonDisabled ? 'darkgray' : 'contained',
                backgroundColor: isNextButtonDisabled ? 'lightgray' : 'contained',
                '&:hover': {
                  backgroundColor: isNextButtonDisabled ? 'lightgray' : 'contained'
                },
                '&:disabled': {
                  cursor: 'not-allowed'
                }
              }}
              onClick={handleNext}
            >
              Next
            </Button>
          </>
        )}
        {activeStep === 2 && (
          <>
            <Button variant="contained" onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                ml: 4,
                color: isNextButtonDisabled && isSubmitButtonDisabled ? 'black' : 'contained',
                borderColor: isNextButtonDisabled && isSubmitButtonDisabled ? 'darkgray' : 'contained',
                backgroundColor: isNextButtonDisabled && isSubmitButtonDisabled ? 'lightgray' : 'contained',
                '&:hover': {
                  backgroundColor: isNextButtonDisabled && isSubmitButtonDisabled ? 'lightgray' : 'contained'
                },
                '&:disabled': {
                  cursor: 'not-allowed'
                }
              }}
            >
              Submit
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
}
