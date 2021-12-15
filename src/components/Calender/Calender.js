import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import TextField from '@mui/material/TextField';
import isWeekend from 'date-fns/isWeekend';
import React from 'react';
import { useDispatch } from 'react-redux';
import { datePicker } from '../../features/Slice/slice';

const Calender = ({ date }) => {
    const dispatch = useDispatch();
    return (
        <div>
            
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    value={date.toDateString()}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                        dispatch(datePicker(newValue))
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
    )
}

export default Calender
