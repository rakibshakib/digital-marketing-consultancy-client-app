import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// fetch to database for getting all data 
export const fetchServices = createAsyncThunk(
    'consultancy/fetchServices',
    async () => {
        const response = await fetch('https://whispering-hamlet-97781.herokuapp.com/all-service').then(res => res.json())
        return response
    }
)

export const appoinment = createSlice({
    name: 'consultancy',
    initialState: {
        service: [],
        user: { },
        isAdmin: false, 
        date: new Date(),
        status: '',
        isLoading: false,
        error: null
    },
    reducers: {
        datePicker: (state, { payload }) => {
            state.date = payload
        },
        addUser: (state, { payload }) => {
            console.log(payload)
            state.user = payload.user
        },
        logoutUser: state => {
            state.user = {} 
        },

        // createUser: (state, { payload }) => {
        //     state.user = payload.user
        //     // console.log(state.user)
        // },
        // loginUser: (state, { payload }) => {
        //     state.user = payload.user
        //     // console.log(state.user)
        // },
        updateUserState: (state, { payload }) => {
            console.log(payload)
            state.user = payload
        },
        setError: (state, { payload }) => { 
            state.error = payload
        }
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
export const { datePicker, logoutUser , setError, addUser, updateUserState } = appoinment.actions;

export default appoinment.reducer;