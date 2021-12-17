import { Alert, Box, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { createUser, setError } from '../../features/Slice/slice';
import { auth } from '../../Firebase/Firebase.config';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[700],
    '&:hover': {
        backgroundColor: yellow[700],
    },
}));

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { user, isLoading, error } = useSelector((state) => state.services);
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        e.preventDefault()
        
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        console.log(loginData);
 
        createUserWithEmailAndPassword(auth, loginData.email, loginData.password).then((result) => {
            console.log(result)
            dispatch(createUser({
                user: result.user,
            }))
            if(result.user){
                navigate(`/home`)
            }
          })
          .catch((err) => {     
            dispatch(setError({
                error: err.message
            })) 
            // ..
          });
        e.preventDefault();
    }
    return (
        <div>
            <NavBar />
             <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: 5 }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ color: "white", pt: 5, fontSize: 25 }} variant="body1" gutterBottom>Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit} className='bg-white py-5 px-2 rounded-2xl my-5'>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                label="Your Name"
                                name="displayName"
                                type="text"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                label="Your Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                required
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <ColorButton sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Register</ColorButton>
                         <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Register
