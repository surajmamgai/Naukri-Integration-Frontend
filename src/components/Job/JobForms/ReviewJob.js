import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';




export default function ReviewJob() {
    const [keySkills, setKeySkills] = React.useState([]);
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

    const handleKeySkillsChange = (event, newValue) => {
        setKeySkills(newValue);
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
            <Autocomplete
                multiple
                id="keySkills"
                fullWidth
                options={[]}
                freeSolo
                value={keySkills}
                onChange={handleKeySkillsChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        margin="normal"
                        required
                        fullWidth
                        id="keySkills"
                        label="Key Skills"
                        name="keySkills"
                    />
                )}
            />
        </Box>

    );
}
