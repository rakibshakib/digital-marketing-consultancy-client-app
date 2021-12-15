import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../../components/NavBar/NavBar'
import ServiceCart from '../../components/ServiceCart/ServiceCart'
import { fetchServices } from '../../features/Slice/slice'
import './Home.css'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchServices());
    }, [])
    const services = useSelector((state) => state.services.service)
    return (
        <div className='homepage'>
            <NavBar />
            <Container sx={{my: 5}} >
            <Grid container spacing={5}>
                    {
                        services.map(item=> <ServiceCart key={item.key} item={item} />)
                    }
            </Grid>
            </Container>
            
        </div>
    )
}

export default Home
