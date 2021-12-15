import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// fetch to database for getting all data 
export const fetchServices = createAsyncThunk(
    'consultancy/fetchServices',
    async () => {
        const response = await fetch('http://localhost:5000/all-service').then(res => res.json())
        console.log("this is response", response)
        return response
    }
)

export const appoinment = createSlice({
    name: 'consultancy',
    initialState: {
        service: [],
        user: {},
        date: new Date()
    },
    reducers: {
        datePicker: (state, { payload }) => {
            state.date = payload
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            state.service = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchServices.pending, (state, action) => {
            state.status = 'pending';
        })
    },
})
export const { datePicker } = appoinment.actions;

export default appoinment.reducer;