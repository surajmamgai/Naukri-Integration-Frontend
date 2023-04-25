import * as React from 'react';
import { useState } from 'react';
import { FormControl, Box, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';

export default function DesiredCandidateDetailsForm() {

    
    //Experience
    const [minimumExperience, setMinimumExperience] = useState('');
    const [maximumExperience, setMaximumExperience] = useState('');
    const [experienceError, setExperienceError] = useState('');
  
    const handleMinimumExperienceChange = (event) => {
        const value=event.target.value;
      setMinimumExperience(value);
      setExperienceError(validateExperienceRange(value, maximumExperience));
    };
  
    const handleMaximumExperienceChange = (event) => {
      const value=event.target.value;
      setMaximumExperience(value);
      setExperienceError(validateExperienceRange(minimumExperience, value));
    };

    function validateExperienceRange(minimumExperience, maximumExperience) {
        if (minimumExperience && maximumExperience && Number(minimumExperience) > Number(maximumExperience)) {
            return 'Maximum experience cannot be less than Minimum experience';
        }
        return '';
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const experienceError = validateExperienceRange(minimumExperience, maximumExperience);
        if (experienceError) {
            setExperienceError(experienceError);
        }

    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                maxWidth: 500,
                m: 'auto',
                px: 2
            }}
        >
                        <FormControl fullWidth required sx={{ mt: 2 }}>
        <InputLabel htmlFor="minimum-experience-input">Minimum Experience (years)</InputLabel>
        <OutlinedInput
          id="minimum-experience-input"
          type="number"
          value={minimumExperience}
          onChange={handleMinimumExperienceChange}
          label="Minimum Experience (years)"
        />
      </FormControl>

      <FormControl fullWidth required sx={{ mt: 2 }}>
        <InputLabel htmlFor="maximum-experience-input">Maximum Experience (years)</InputLabel>
        <OutlinedInput
          id="maximum-experience-input"
          type="number"
          value={maximumExperience}
          onChange={handleMaximumExperienceChange}
          label="Maximum Experience (years)"
        />
        {experienceError && <FormHelperText error>{experienceError}</FormHelperText>}
      </FormControl>
        </Box>
    );
}

