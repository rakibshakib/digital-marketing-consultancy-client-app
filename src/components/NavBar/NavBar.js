import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Container, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



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
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box>
                                <Link to='/home'
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography variant="h6"
                                        noWrap
                                        component="div"
                                        sx={{ mr: 2, color: "white", display: { xs: 'none', md: 'flex' } }}
                                    >
                                        Digital Marketing Consultancy
                                    </Typography>
                                </Link>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            <Link
                                                style={{ textDecoration: 'none', color: 'white', fontWeight: '800', fontSize: '20px' }}
                                                to='/myAppoinment'> <Button color="inherit">My Appoinment</Button> </Link>
                                        </Typography>
                                        <Typography textAlign="center">
                                            <Link
                                                style={{ textDecoration: 'none', color: 'white', fontWeight: '800', fontSize: '20px' }}
                                                to='/dashboard/by-date'> <Button color="inherit">Dashboard</Button> </Link>
                                        </Typography>
                                        <Typography textAlign="center">
                                            {
                                                user?.email ? <Button color="inherit" onClick={handleLogOut}>Logout
                                                </Button> :
                                                    <Link
                                                        style={{ textDecoration: 'none', color: 'white', fontWeight: '800', fontSize: '20px' }}
                                                        to='/login'> <Button color="inherit">Log In</Button> </Link>
                                            }
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <Link to='/home'
                                style={{ textDecoration: 'none' }}
                            >
                                <Typography variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                                >
                                    Digital Marketing Consultancy
                                </Typography>
                            </Link>
                            <Box sx={{ flexGrow: 1,  display: { xs: 'none', md: 'flex' } }}>
                                <Link
                                    style={{ textDecoration: 'none', fontSize: '20px' }}
                                    to='/myAppoinment'>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        My Appoinment
                                    </Button>
                                </Link>
                                <Link
                                    style={{ textDecoration: 'none', fontSize: '20px' }}
                                    to='/dashboard/by-date'>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        Dashboard
                                    </Button>
                                </Link>

                                {
                                    user?.email ? <Button color="inherit" onClick={handleLogOut} sx={{ my: 2, color: 'white', display: 'block' }}>Logout
                                    </Button> :
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            to='/login'> <Button sx={{ my: 2, color: 'white', display: 'block' }}>Log In</Button> </Link>
                                }

                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                        </Toolbar>

                    </Container>

                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar
