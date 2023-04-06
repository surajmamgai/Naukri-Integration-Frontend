import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { MenuItem } from '@mui/material';


const functionalAreas = [
    {
        value: 'accounting',
        label: 'Accounting',
    },
    {
        value: 'marketing',
        label: 'Marketing',
    },
    {
        value: 'operations',
        label: 'Operations',
    },
    {
        value: 'sales',
        label: 'Sales',
    },
];

const locations = [
    {
        value: 'new-delhi',
        label: 'New Delhi',
    },
    {
        value: 'mumbai',
        label: 'Mumbai',
    },
    {
        value: 'kolkata',
        label: 'Kolkata',
    },
    {
        value: 'chennai',
        label: 'Chennai',
    },
];


export default function JobDetailsForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            title: data.get('title'),
            jobDescription: data.get('jobDescription'),
            functionalArea: data.get('functionalArea'),
            location: data.get('location'),
            referenceCode: data.get('referenceCode'),
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
                m: 'auto'
            }}
        >
            <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="jobDescription"
                label="Job Description"
                name="jobDescription"
                multiline
                rows={3}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="fuctionalArea"
                label="Functional Area"
                name="fuctionalArea"
                select
            >
                {functionalAreas.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                margin="normal"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                select
            >
                {locations.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
                margin="normal"
                required
                fullWidth
                id="referenceCode"
                label="Reference Code"
                name="referenceCode"
                autoComplete="referenceCode"
            />
        </Box>

    );
}
