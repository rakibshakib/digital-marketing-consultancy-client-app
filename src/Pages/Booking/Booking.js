import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Calender from '../../components/Calender/Calender'
import NavBar from '../../components/NavBar/NavBar'
import './Booking.css'

const Booking = () => {
    const [appoinmentInfo, setAppoinmentInfo] = useState({})
    const [currentService, setCurrentService] = useState({})

    const { date, user } = useSelector((state) => state.services);
    const paramsId = useParams()

    useEffect(() => {
        const url = `https://whispering-hamlet-97781.herokuapp.com/all-service/${paramsId.id}`
        fetch(url).then(res => res.json()).then(data => setCurrentService(data))
    }, [paramsId.id])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...appoinmentInfo }
        newInfo[field] = value;
        setAppoinmentInfo(newInfo)
    }
    const handleAppoinmentBooking = e => {
        e.preventDefault()
        const appoinementData = {
            ...appoinmentInfo,
            date: date.toLocaleDateString(),
            appoinmentName: currentService?.name,
            payment: currentService?.cost,
            email: user?.email
        }
        console.log(appoinementData)
        fetch("https://whispering-hamlet-97781.herokuapp.com/appoinment-data", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinementData)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    alert("appoinment booking successfull, please dont forget to arrive our office in this time")
                }

            })
    }

    return (

        <div>
            <NavBar />
            <Container>
                <div className='bookingContainer'>
                    <Box>
                        <Typography variant="h4" >
                            Consultancy on This topics: {currentService?.name}
                        </Typography>
                        <Typography variant="p" >
                            You Have to Pay for this Appoinments: ${currentService?.cost}
                        </Typography>
                        <Typography variant="h6" >
                            Appoinment Date: {date.toLocaleDateString()}
                        </Typography>
                        <br />
                        <Typography variant="p" >
                            Please Select a date from the calender, when you want to take consultancy
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ width: '75%' }}>
                                <form onSubmit={handleAppoinmentBooking} className='booking-form'>
                                    <TextField
                                        label="Your Name"
                                        id="outlined-size-small"
                                        name="customerName"
                                        required
                                        onBlur={handleOnBlur}
                                        // defaultValue={`name`}
                                        size="small"
                                        sx={{ width: '100%', my: 2 }}
                                    />
                                    <TextField
                                        label="Your Email"
                                        id="outlined-size-small"
                                        name="email"
                                        onBlur={handleOnBlur}
                                        defaultValue={user?.email}
                                        disabled
                                        size="small"
                                        sx={{ width: '100%', my: 2 }}
                                    />
                                    <TextField
                                        label="Your Phone Number"
                                        id="outlined-size-small"
                                        name="phone"
                                        required
                                        onBlur={handleOnBlur}
                                        size="small"
                                        sx={{ width: '100%', my: 2 }}
                                    />
                                    <TextField
                                        label="Appoinment Time"
                                        id="outlined-size-small"
                                        name='bookingTime'
                                        size="small"
                                        onBlur={handleOnBlur}
                                        required
                                        sx={{ width: '100%', my: 2 }}
                                    />
                                    <Button type='submit' variant="contained">Proceed Booking</Button>
                                </form>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <div>
                                    <Calender date={date} />
                                </div>
                            </Box>
                        </Grid>
                    </Grid>
                </div>

            </Container >
        </div >
    )
}
export default Booking
