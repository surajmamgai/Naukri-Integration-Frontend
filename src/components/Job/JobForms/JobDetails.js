import * as React from 'react';
import TextField from '@mui/material/TextField';
import {
    Box, FormControl, Radio, RadioGroup, FormLabel, FormControlLabel, Select,
    InputLabel, MenuItem, OutlinedInput, FormHelperText
} from '@mui/material';
import { useState } from 'react';

const industryMapping = [
    { id: '1', name: 'Industry A' },
    { id: '2', name: 'Industry B' },
    { id: '3', name: 'Industry C' },
    // add more industry mappings here
];

const faRoleMapping = [
    {
        id: '1', name: 'Functional Area A', roles: [
            { id: '1', name: 'Role A1' },
            { id: '2', name: 'Role A2' },
            { id: '3', name: 'Role A3' },
            // add more roles for functional area A here
        ]
    },
    {
        id: '2', name: 'Functional Area B', roles: [
            { id: '4', name: 'Role B1' },
            { id: '5', name: 'Role B2' },
            { id: '6', name: 'Role B3' },
            // add more roles for functional area B here
        ]
    },
    {
        id: '3', name: 'Functional Area C', roles: [
            { id: '7', name: 'Role C1' },
            { id: '8', name: 'Role C2' },
            { id: '9', name: 'Role C3' },
            // add more roles for functional area C here
        ]
    },
    // add more FA role mappings here
];

const countryMapping = [
    { id: '1', name: 'Country A' },
    { id: '2', name: 'Country B' },
    { id: '3', name: 'Country C' },
    // add more country mappings here
];

const citiesMapping = [
    { id: '1', name: 'Andhra Pradesh' },
    { id: '2', name: 'Arunachal Pradesh' },
    { id: '3', name: 'Assam' },
    // add more state/province mappings here
];

const currencyMapping = [
    { id: 'INR', name: 'Rupees' },
    { id: 'USD', name: 'U.S Dollars' },
];


export default function JobDetailsForm() {

    //Job Type
    const [jobType, setJobType] = useState('h');

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    //HiringOrgName
    const [hiringOrgName, setHiringOrgName] = useState('');

    const handleHiringOrgNameChange = (event) => {
        setHiringOrgName(event.target.value);
    };

    //OrgSummaryText
    const [orgSummaryText, setOrgSummaryText] = useState('');
    const [orgSummaryError, setOrgSummaryError] = useState('');

    const handleOrgSummaryTextChange = (event) => {
        const value = event.target.value;
        setOrgSummaryText(value);
        setOrgSummaryError(validateOrgSummaryText(value));
    };

    const validateOrgSummaryText = (value) => {
        if (value && value.length >= 32 && !/\s/.test(value.slice(-32))) {
            return 'A space is required every 32 characters';
        }
        return '';
    };

    //JobPositionTitle
    const [jobPositionTitle, setJobPositionTitle] = useState('');

    const handleJobPositionTitleChange = (event) => {
        setJobPositionTitle(event.target.value);
    };

    //JobIndustryCode
    const [jobIndustryCode, setJobIndustryCode] = useState('');

    const handleJobIndustryCodeChange = (event) => {
        setJobIndustryCode(event.target.value);
    };

    //FunctionCode and RoleCode
    const [jobFunctionCode, setJobFunctionCode] = useState('');
    const [jobRoleCode, setJobRoleCode] = useState('');

    const handleJobFunctionCodeChange = (event) => {
        setJobFunctionCode(event.target.value);
        setJobRoleCode('');
    };

    const handleJobRoleCodeChange = (event) => {
        setJobRoleCode(event.target.value);
    };

    const filteredRoles = faRoleMapping.find((faRole) => faRole.id === jobFunctionCode)?.roles || [];

    //JobKeywords
    const [jobKeywords, setJobKeywords] = useState('');

    const handleJobKeywordsChange = (event) => {
        setJobKeywords(event.target.value);
    };

    //Location
    const [locationType, setLocationType] = useState('india');
    const [indianLoc, setIndianLoc] = useState('');
    const [interNationalLoc, setInterNationalLoc] = useState('');

    const handleLocationTypeChange = (event) => {
        setLocationType(event.target.value);
    };

    const handleIndianLocChange = (event) => {
        setIndianLoc(event.target.value);
    };

    const handleInterNationalLocChange = (event) => {
        setInterNationalLoc(event.target.value);
    };

    //salaryCurrency
    const [salaryCurrency, setSalaryCurrency] = useState('');

    const handleSalaryCurrencyChange = (event) => {
        setSalaryCurrency(event.target.value);
    };

    // Max and Min Salary


    const [minimumSalary, setMinimumSalary] = useState('');
    const [maximumSalary, setMaximumSalary] = useState('');
    const [salaryError, setSalaryError] = useState('');

    const handleMinimumSalaryChange = (event) => {
        const value = event.target.value;
        setMinimumSalary(value);
        setSalaryError(validateSalaryRange(value, maximumSalary));
    };

    const handleMaximumSalaryChange = (event) => {
        const value = event.target.value;
        setMaximumSalary(value);
        setSalaryError(validateSalaryRange(minimumSalary, value));
    };

    function validateSalaryRange(minimumSalary, maximumSalary) {
        if (minimumSalary && maximumSalary && Number(minimumSalary) > Number(maximumSalary)) {
            return 'Maximum salary cannot be less than Minimum salary';
        }
        return '';
    }

    //JobDescription
    const [jobSummaryText, setJobSummaryText] = useState('');
    const [jobSummaryError, setJobSummaryError] = useState('');

    const handleJobSummaryTextChange = (event) => {
        const value = event.target.value;
        setJobSummaryText(value);
        setJobSummaryError(validateJobSummaryText(value));
    };
    const validateJobSummaryText = (value) => {
        if (value && value.length >= 32 && !/\s/.test(value.slice(-32))) {
            return 'A space is required every 32 characters';
        }
        return '';
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const salaryError = validateSalaryRange(minimumSalary, maximumSalary);
        if (salaryError) {
            setSalaryError(salaryError);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                width: '100%',
                maxWidth: 500,
                m: 'auto'
            }}
        >
            <FormControl>
                <FormLabel component="legend">Job Type</FormLabel>
                <RadioGroup
                    aria-label="job-type"
                    name="job-type"
                    value={jobType}
                    onChange={handleJobTypeChange}
                    row
                >
                    <FormControlLabel value="h" control={<Radio />} label="Hot job" />
                    <FormControlLabel value="p" control={<Radio />} label="Private job" />
                </RadioGroup>
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
            <TextField
                label="Hiring Organization Name"
                value={hiringOrgName}
                onChange={handleHiringOrgNameChange}
                inputProps={{ maxLength: 80, pattern: '[a-zA-Z0-9 ]+' }}
                helperText={`${hiringOrgName.length}/80 alphanumeric characters`}
            />
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
                <TextField
                    label="About the Organization"
                    value={orgSummaryText}
                    onChange={handleOrgSummaryTextChange}
                    inputProps={{ maxLength: 255 }}
                    helperText={`${orgSummaryText.length}/255 characters (add space every 32 characters)`}
                    multiline
                    rows={4}
                />
                {orgSummaryError && <FormHelperText error>{orgSummaryError}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
            <TextField
                label="Job Position Title"
                value={jobPositionTitle}
                onChange={handleJobPositionTitleChange}
                inputProps={{ maxLength: 70, pattern: /^[A-Za-z.][A-Za-z.0-9\s]*$/ }}
                helperText={`${jobPositionTitle.length}/70 alphanumeric characters (must start with A-Z, a-z, or a dot)`}
            />
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
                <InputLabel id="job-industry-code-label">Job Industry Code</InputLabel>
                <Select
                    label="Job Industry Code"
                    id="job-industry-code"
                    value={jobIndustryCode}
                    onChange={handleJobIndustryCodeChange}
                >
                    {industryMapping.map((industry) => (
                        <MenuItem key={industry.id} value={industry.id}>
                            {industry.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
                <InputLabel id="job-function-code-label">Job Function Code</InputLabel>
                <Select
                    label="Job Function Code"
                    id="job-function-code"
                    value={jobFunctionCode}
                    onChange={handleJobFunctionCodeChange}
                >
                    {faRoleMapping.map((faRole) => (
                        <MenuItem key={faRole.id} value={faRole.id}>
                            {faRole.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
                <InputLabel id="job-role-code-label">Job Role Code</InputLabel>
                <Select
                    label="Job Role Code"
                    id="job-role-code"
                    value={jobRoleCode}
                    onChange={handleJobRoleCodeChange}
                    disabled={!jobFunctionCode}
                >
                    {filteredRoles.map((role) => (
                        <MenuItem key={role.id} value={role.id}>
                            {role.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
            <TextField
                label="Job Keywords"
                value={jobKeywords}
                onChange={handleJobKeywordsChange}
                inputProps={{ maxLength: 250, pattern: /^[A-Za-z0-9\s]*$/ }}
                helperText={`${jobKeywords.length}/250 alphanumeric characters`}
            />
            </FormControl>

            <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Location</FormLabel>
                <RadioGroup
                    aria-label="locationType"
                    name="locationType"
                    value={locationType}
                    onChange={handleLocationTypeChange}
                    row
                >
                    <FormControlLabel value="india" control={<Radio />} label="India" />
                    <FormControlLabel value="international" control={<Radio />} label="Other Countries" />
                </RadioGroup>

                {locationType === 'india' && (
                    <FormControl fullWidth required={locationType === 'india'}>
                        <InputLabel id="indian-loc-label">Choose City</InputLabel>
                        <Select
                            label="Indian Location"
                            id="indian-loc"
                            value={indianLoc}
                            onChange={handleIndianLocChange}
                        >
                            {citiesMapping.map((city) => (
                                <MenuItem key={city.id} value={city.id}>
                                    {city.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}

                {locationType === 'international' && (
                    <FormControl fullWidth required={locationType === 'international'}>
                        <InputLabel id="inter-national-loc-label">Choose Country</InputLabel>
                        <Select
                            label="International Location"
                            id="inter-national-loc"
                            value={interNationalLoc}
                            onChange={handleInterNationalLocChange}
                        >
                            {countryMapping.map((country) => (
                                <MenuItem key={country.id} value={country.id}>
                                    {country.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
                <InputLabel id="salary-currency-label">Salary Currency</InputLabel>
                <Select
                    label="Salary Currency"
                    id="salary-currency"
                    value={salaryCurrency}
                    onChange={handleSalaryCurrencyChange}
                >
                    {currencyMapping.map((currency) => (
                        <MenuItem key={currency.id} value={currency.id}>
                            {currency.id}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
                <InputLabel htmlFor="minimum-salary-input">Minimum Salary</InputLabel>
                <OutlinedInput
                    id="minimum-salary-input"
                    type="number"
                    value={minimumSalary}
                    onChange={handleMinimumSalaryChange}
                    label="Minimum Salary"
                />
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
                <InputLabel htmlFor="maximum-salary-input">Maximum Salary</InputLabel>
                <OutlinedInput
                    id="maximum-salary-input"
                    type="number"
                    value={maximumSalary}
                    onChange={handleMaximumSalaryChange}
                    label="Maximum Salary"
                />
                {salaryError && <FormHelperText error>{salaryError}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth required sx={{ mt: 2 }}>
                <TextField
                    label="Job Description"
                    value={jobSummaryText}
                    onChange={handleJobSummaryTextChange}
                    inputProps={{ maxLength: 255 }}
                    helperText={`${jobSummaryText.length}/255 characters (add space every 32 characters)`}
                    multiline
                    rows={4}
                />
                {jobSummaryError && <FormHelperText error>{jobSummaryError}</FormHelperText>}
            </FormControl>

        </Box>

    );
}
