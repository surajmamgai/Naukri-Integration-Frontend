import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


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

export default function Job() {
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
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://img.freepik.com/free-photo/hiring-concept-with-empty-chair_23-2149519862.jpg)',
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
                        onSubmit={handleSubmit}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: 500,
                            m: 'auto',
                            mt: 4,
                            px: 2,
                        }}
                    >
                        <Typography variant="h4" component="h1" gutterBottom>
                            Job Details
                        </Typography>
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
                            rows={4}
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
                        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
