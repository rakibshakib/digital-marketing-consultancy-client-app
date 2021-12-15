import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Calender from '../../components/Calender/Calender'
import NavBar from '../../components/NavBar/NavBar'
import './Booking.css'

const Booking = () => {
    const [appoinmentInfo, setAppoinmentInfo] = useState({})
    const [currentService, setCurrentService] = useState({})

    const date = useSelector((state) => state.services.date);
    const paramsId = useParams()

    useEffect(() => {
        const url = `http://localhost:5000/all-service/${paramsId.id}`
        fetch(url).then(res => res.json()).then(data => setCurrentService(data))
    }, [paramsId.id])
    console.log(currentService)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...appoinmentInfo }
        newInfo[field] = value;
        setAppoinmentInfo(newInfo)
    }
    console.log(appoinmentInfo);
    console.log("this is booking date", date.toDateString())

    return (

        <div>
            <NavBar />
            <Container>
                <div className='bookingContainer'>
                    <Box>
                        <Typography variant="h4" >
                            Consultancy on This topics: {currentService?.name}
                        </Typography>
                        <Typography variant="h6" >
                            Appoinment Date: {date.toDateString()}
                        </Typography>
                        <br />
                        <Typography variant="p" >
                            Please Select a date from the calender, when you want to take consultancy
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            p: 1,
                            m: 1,
                        }}
                    >
                        <Box sx={{ width: '50%' }}>
                            <form>

                                <TextField
                                    label="Your Name"
                                    id="outlined-size-small"
                                    name="customerName"
                                    required
                                    onBlur={handleOnBlur}
                                    defaultValue={`name`}
                                    size="small"
                                    sx={{ width: '100%', my: 2 }}
                                />
                                <TextField
                                    label="Your Email"
                                    id="outlined-size-small"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    defaultValue={`user?.email`}
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
                                <Button variant="contained">Proceed Booking</Button>
                            </form>
                        </Box>
                        <Box>
                            <div>
                                <Calender date={date} />
                            </div>

                        </Box>
                    </Box>
                </div>

            </Container >
        </div >
    )
}
export default Booking
