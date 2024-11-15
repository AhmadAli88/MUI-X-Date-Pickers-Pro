import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers-pro';
import { TextField } from '@mui/material';
import React from 'react';

const DateTimePickerProExample = () => {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label="Select Date & Time"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
        showToolbar
        toolbarTitle="Select a date and time"
        toolbarFormat="MMM d, yyyy h:mm a"
        ampm={false}
        minute={5}
      />
    </LocalizationProvider>
  );
};

export default DateTimePickerProExample;