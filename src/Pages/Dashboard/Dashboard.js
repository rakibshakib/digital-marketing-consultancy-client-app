import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuIcon from '@mui/icons-material/Menu';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Grid } from '@mui/material';
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
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AppoinmnetDataTable from '../../components/ApoinmentDataTable/ApoinmentDataTable';
import Calender from '../../components/Calender/Calender';

const drawerWidth = 250;

function Dashboard(props) {
    const { date } = useSelector((state) => state.services);
    const [ dateAppoinmnet, setDateAppoinment ] = useState([])

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const logoutHandler = () => {

    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const url = `http://localhost:5000/appoinments-for-admin?date=${date.toLocaleDateString()}`;
        fetch(url).then((res) => res.json()).then((data) => setDateAppoinment(data));
    }, [date]);

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {
                <List > <Link to={`/dashboard`}>
                    <ListItem sx={{ fontWeight: 600 }} button>
                        <ListItemIcon>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        My Order
                    </ListItem>
                </Link>

                    <Link to={`/dashboard`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <RateReviewIcon />
                            </ListItemIcon>
                            Review
                        </ListItem>
                    </Link>
                    <Link to={`/dashboard`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <MonetizationOnIcon />
                            </ListItemIcon>
                            Pay
                        </ListItem>
                    </Link>
                </List>
            }
            <Divider />
            {
                <List>
                    <Link to={`/dashboard`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <ManageAccountsIcon />
                            </ListItemIcon>
                            Manage All Orders
                        </ListItem>
                    </Link>
                    <Link to={`/dashboard`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <AddAPhotoIcon />
                            </ListItemIcon>
                            Add Camera
                        </ListItem>
                    </Link>
                    <Link to={`/dashboard`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />
                            </ListItemIcon>
                            Add Admin
                        </ListItem>
                    </Link>

                    <Link to={`/dashboard`}>
                        <ListItem sx={{ fontWeight: 600 }} button>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            Manage Products
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
                <Box >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Calender date={date} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <AppoinmnetDataTable dateAppoinmnet={dateAppoinmnet} />
                        </Grid>
                    </Grid>
                </Box>
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
