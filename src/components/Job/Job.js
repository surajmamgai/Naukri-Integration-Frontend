import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Step, Stepper, StepLabel } from '@mui/material';

import JobDetailsForm from './JobForms/JobDetails';
import ReviewJob from './JobForms/ReviewJob';
import DesiredCandidateDetailsForm from './JobForms/DesiredCandidateDetails';


const steps = ['Job Details', 'Candidate Details', 'Additional Details'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <JobDetailsForm />;
    case 1:
      return <DesiredCandidateDetailsForm />;
    case 2:
      return <ReviewJob />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Job() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://img.freepik.com/free-vector/we-are-hiring-announcement-template-design_60438-1697.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: 500,
              m: 'auto',
              px: 2,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom sx={{mt:2}}>
              Post Job
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 3 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Your Job Has been Posted Successfully.
                </Typography>
                <Typography variant="subtitle1">
                  Your Job Link is https://hono.ai/jobs/12456. We have emailed your Job Details
                  to you, and will send you an update when your job will receive responses.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 1, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Add Job' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
