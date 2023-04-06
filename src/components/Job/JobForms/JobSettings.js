import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import { MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FormControlLabel, Switch } from '@mui/material';

const currencies = [
    {
        value: 'USD',
        label: 'USD',
    },
    {
        value: 'INR',
        label: 'INR',
    },
];

export default function JobDetailsForm() {
    const [minimumSalary, setMinimumSalary] = React.useState(0);
    const [maximumSalary, setMaximumSalary] = React.useState(5000000);
    const [minimumYearsOfExperience, setMinimumYearsOfExperience] = React.useState(0);
    const [maximumYearsOfExperience, setMaximumYearsOfExperience] = React.useState(50);
    const [salaryCurrency, setSalaryCurrency] = React.useState('INR');
    const [showSalary, setShowSalary] = React.useState('Yes');


    const handleSalaryChange = (event, newValue) => {
        setMinimumSalary(newValue[0]);
        setMaximumSalary(newValue[1]);
    };

    const handleYearsOfExperienceChange = (event, newValue) => {
        setMinimumYearsOfExperience(newValue[0]);
        setMaximumYearsOfExperience(newValue[1]);
    };



    const handleCurrencyChange = (event) => {
        setSalaryCurrency(event.target.value);
    };

    const handleShowSalaryToggle = () => {
        setShowSalary(!showSalary);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            minimumSalary,
            maximumSalary,
            minimumYearsOfExperience,
            maximumYearsOfExperience,
            salaryCurrency,
            showSalary,
        });
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
            <Stack spacing={2} alignItems="flex-start" >
                <Typography variant="body1">
                    Salary:
                </Typography>
                <Slider
                    id="salary"
                    aria-label="Salary"
                    value={[minimumSalary, maximumSalary]}
                    onChange={handleSalaryChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={5000000}
                    sx={{ mt: 1 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <TextField
                        margin="normal"
                        required
                        id="minimumSalary"
                        label="Minimum Salary"
                        name="minimumSalary"
                        type="number"
                        value={minimumSalary}
                        sx={{ mr: 2 }}
                        onChange={(event) => setMinimumSalary(Number(event.target.value))}
                    />
                    <TextField
                        margin="normal"
                        required
                        id="maximumSalary"
                        label="Maximum Salary"
                        name="maximumSalary"
                        type="number"
                        value={maximumSalary}
                        onChange={(event) => setMaximumSalary(Number(event.target.value))}
                    />
                </Box>
            </Stack>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="salaryCurrency"
                    label="Salary Currency"
                    name="salaryCurrency"
                    select
                    value={salaryCurrency}
                    sx={{ mr: 2 }}
                    onChange={handleCurrencyChange}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <Typography variant="body2">
                        Salary Visibiltiy:
                        {showSalary ? '(Visible)' : '(Hidden)'}
                    </Typography>
                    <FormControlLabel
                        control={<Switch checked={showSalary} onChange={handleShowSalaryToggle} />}
                    />
                </Box>
            </Box>
            <Stack spacing={2} alignItems="flex-start">
                <Typography variant="body1" sx={{ mt: 3 }}>
                    Experience:
                </Typography>
                <Slider
                    id="years-of-experience"
                    aria-label="Years of experience"
                    value={[minimumYearsOfExperience, maximumYearsOfExperience]}
                    onChange={handleYearsOfExperienceChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={50}
                    sx={{ mt: 1 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <TextField
                        margin="normal"
                        required
                        id="minimumYearsOfExperience"
                        label="Minimum Years of Experience"
                        name="minimumYearsOfExperience"
                        type="number"
                        value={minimumYearsOfExperience}
                        sx={{ mr: 2 }}
                        onChange={(event) => setMinimumYearsOfExperience(Number(event.target.value))}
                    />
                    <TextField
                        margin="normal"
                        required
                        id="maximumYearsOfExperience"
                        label="Maximum Years of Experience"
                        name="maximumYearsOfExperience"
                        type="number"
                        value={maximumYearsOfExperience}
                        onChange={(event) => setMaximumYearsOfExperience(Number(event.target.value))}
                    />
                </Box>
            </Stack>
        </Box>
    );
}

