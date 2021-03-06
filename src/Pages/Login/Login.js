import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { addUser, setError } from '../../features/Slice/slice';
import { auth, googleProvider } from '../../Firebase/Firebase.config';
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogIn = () => {
        signInWithPopup(auth, googleProvider).then((result) => {
            dispatch(addUser({
                user: result.user
            }))
            if (result.user) {
                navigate(`/home`)
            }

        }).catch((err) => {
            dispatch(setError({
                error: err.message
            }))
        });
    }
    const handleUserLogin = e => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, loginData.email, loginData.password).then((result) => {
            dispatch(addUser({
                user: result.user,
            }))
            if (result.user) {
                navigate(`/home`)
            }
        })
            .catch((err) => {
                dispatch(setError({
                    error: err.message
                }))
            })
    }
    return (
        <div className='loginComponents'>
            <NavBar />
            <Container>
                <Typography variant="h6" component="div" sx={{ textAlign: 'center', color: "black" }}>
                    Login
                </Typography>
                <form className='form-container' onSubmit={handleUserLogin}>
                    <TextField
                        sx={{ width: '75%', m: 1 }}

                        label="Your Email"
                        name="email"
                        onBlur={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '75%', m: 1 }}
                        type='password'
                        label="Your Password"
                        name="password"
                        onBlur={handleOnChange}
                        variant="standard" />
                    <br />
                    <Button type='submit' variant="contained">Login</Button>
                </form>
                <br />
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 4,  flexDirection: 'column' }}>
                    <Button onClick={() => dispatch(handleLogIn)} variant="contained">Login With Google</Button>
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>
                </Box>


            </Container>
        </div>
    )
}

export default Login
