import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import { Button, Grid, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCart = ({ item }) => {
    const navigate = useNavigate()
    const changeRouteForThisService = id => {
        navigate(`/booking/${id}`)
    }
    return (
        <Grid item xs={12}  md={4} lg={4}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
                <CardHeader title={item?.name} />
                <CardMedia
                    component="img"
                    height="194"
                    image={item?.img}
                    alt={item?.name}
                />
                <CardContent>
                    <Typography
                        variant="p"
                        color="text.secondary"
                        sx={{ fontSize: 15, fontWeight: 700 }}
                    >
                        Consultancy Fee: ${item?.cost}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Tooltip title={`Book Appoinment on ${item?.name}`}>
                        <IconButton
                            className='buy-now-btn'
                            aria-label="order"
                            color='success'
                            onClick={()=>changeRouteForThisService(item?._id)}
                        >
                            <BookmarkAddIcon />
                            <Button>Book Appoinment</Button>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>

    )
}

export default ServiceCart
