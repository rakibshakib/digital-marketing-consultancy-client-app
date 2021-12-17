import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../features/Slice/slice';
import { auth } from '../../Firebase/Firebase.config';

const NavBar = () => {
    const { user } = useSelector((state) => state.services);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        signOut(auth).then(() => {
            dispatch(logoutUser())
        }).catch((error) => {
            alert("error", error.message)
        });
    }
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" sx={{
                    bgcolor: 'black',
                    py: 0.5
                }} >
                    <Container>
                        <Toolbar>
                            {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                            <Box>
                                <Link to='/home'
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                                        Digital Marketing Consultancy
                                    </Typography>
                                </Link>
                            </Box>
                            <Box>
                                {
                                    user?.email ? <Button color="inherit" onClick={handleLogOut}>Logout
                                    </Button> :
                                        <Link
                                            style={{ textDecoration: 'none', color: 'white', fontWeight: '800', fontSize: '20px' }}
                                            to='/login'> <Button color="inherit">Log In</Button> </Link>
                                }
                            </Box>
                            <Link
                                style={{ textDecoration: 'none', color: 'white', fontWeight: '800', fontSize: '20px' }}
                                to='/myAppoinment'> <Button color="inherit">My Appoinment</Button> </Link>
                            <Link
                                style={{ textDecoration: 'none', color: 'white', fontWeight: '800', fontSize: '20px' }}
                                to='/dashboard'> <Button color="inherit">Dashboard</Button> </Link>
                        </Toolbar>
                    </Container>

                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar
