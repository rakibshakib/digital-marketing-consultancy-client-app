import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to='/home' 
                        style={{ textDecoration: 'none'}}
                        >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                                Digital Marketing Consultancy
                            </Typography>
                        </Link>

                        <Link
                            style={{ textDecoration: 'none', color: 'white', fontWeight: '800', fontSize: '20px' }}
                            to='/login'><Button color="inherit">Sign In</Button></Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar
