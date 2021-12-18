import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MyAppoinmentCard from '../../components/MyAppoinmentCard/MyAppoinmentCard';
import NavBar from '../../components/NavBar/NavBar';

const MyAppoinment = () => {
    const [myAppoinments, setMyAppoinments] = useState([])
    const { user } = useSelector((state) => state.services);
    useEffect(() => {
        const url = `https://whispering-hamlet-97781.herokuapp.com/appoinment-data?email=${user?.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyAppoinments(data));
    }, [user.email]);
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
                        const remainingAppoinment = myAppoinments.filter(item => item._id !== id);
                        setMyAppoinments(remainingAppoinment);
                    }
                })
        }
    }
    return (
        <>
            <NavBar />
            <div className='bookingContainer'>
                <Container>
                    <h2>Dear Customer, you have {myAppoinments.length} Appoinments,  in Digital Marketing Consultancy 😁</h2>
                    <Grid container spacing={2} >
                        {
                            myAppoinments.map(item => <MyAppoinmentCard key={item._id} item={item} handleDeleteAppoinment={handleDeleteAppoinment} />)
                        }
                    </Grid >
                </Container>
            </div>
        </>
    )
}

export default MyAppoinment
