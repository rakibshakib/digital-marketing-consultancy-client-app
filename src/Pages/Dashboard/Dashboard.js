import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/Slice/slice';
import { auth } from '../../Firebase/Firebase.config';


const drawerWidth = 250;

function Dashboard(props) {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const logoutHandler = () => {
        signOut(auth).then(() => {
            dispatch(logoutUser())
            navigate(`/home`)
        }).catch((error) => {
            alert("error", error.message)
        });
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div>
            <Toolbar />
            {
                <List>
                    <Link to={`/dashboard/by-date`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <AddAPhotoIcon />
                            </ListItemIcon>
                            See Apoinment By Date
                        </ListItem>
                    </Link>
                    <Link to={`/dashboard/all-appoinments`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <ManageAccountsIcon />
                            </ListItemIcon>
                            All Appoinments
                        </ListItem>
                    </Link>
                </List>
            }


            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: 'black',
                    py: 0.5
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="p" noWrap component="button" sx={{ ml: 2, fontWeight: 500 }}>
                        <Link to='/'> <HomeIcon />  Home Page </Link>
                    </Typography>
                    <Typography variant="p" noWrap component="button" sx={{ ml: 3, fontWeight: 500, color: 'yellow' }} onClick={logoutHandler}>
                        <LogoutIcon /> Logout
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {/* this is content area */}
                <Outlet />
            </Box>
        </Box>
    );
}
Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard
