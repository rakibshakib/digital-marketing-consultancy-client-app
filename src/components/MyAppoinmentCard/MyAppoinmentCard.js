import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import React from 'react';


const MyAppoinmentCard = ({ item, handleDeleteAppoinment }) => {

    return (
        <Grid item xs={12} md={4} sx={{ my: 5 }}>
            <Card sx={{ minWidth: 275, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: 3, px: 1 }}>
                <Typography variant="h5" component="div">
                    {item?.appoinmentName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Apponment Date: {item?.date}
                </Typography>
                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    Customer Name: {item?.customerName}
                </Typography>
                <Typography variant="body">
                    Time: {item?.bookingTime}
                </Typography>
                <Typography variant="body">
                    Cost: ${item?.payment}
                </Typography>
                <CardActions>
                    <Button onClick={() => handleDeleteAppoinment(item?._id)} variant="outlined" size="small" color="error">Cancel Booking</Button>
                </CardActions>
            </Card>
        </Grid >
    )
}

export default MyAppoinmentCard
