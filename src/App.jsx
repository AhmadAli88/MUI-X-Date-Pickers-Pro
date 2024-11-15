import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DateTimePickerProExample from './components/DateTimePickerProExample';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePickerProExample />
      </LocalizationProvider>
  );
}

export default App;
