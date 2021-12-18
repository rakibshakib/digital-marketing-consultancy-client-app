import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AppoinmnetDataTable from '../../components/ApoinmentDataTable/ApoinmentDataTable';
import Calender from '../../components/Calender/Calender';

const DashBoardHome = () => {
    const { date } = useSelector((state) => state.services);
    const [dateAppoinmnet, setDateAppoinment] = useState([])
    useEffect(() => {
        const url = `https://whispering-hamlet-97781.herokuapp.com/appoinments-for-admin?date=${date.toLocaleDateString()}`;
        fetch(url).then((res) => res.json()).then((data) => setDateAppoinment(data));
    }, [date]);

    const handleDeleteAppoinment = id => {
        console.log(id)
        const proceed = window.confirm("Are You Sure Want to Delete Your Appoinment ?")
        if (proceed) {
            const url = `https://whispering-hamlet-97781.herokuapp.com/appoinment/${id}`
            fetch(url, {
                method: "DELETE"
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingAppoinment = dateAppoinmnet.filter(item => item._id !== id);
                        setDateAppoinment(remainingAppoinment);
                    }
                })
        }
    }
    return (
        <div>
            <Box >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Calender date={date} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <AppoinmnetDataTable dateAppoinmnet={dateAppoinmnet} handleDeleteAppoinment={handleDeleteAppoinment} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default DashBoardHome
