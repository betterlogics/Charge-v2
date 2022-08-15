import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "./Drawer.css";
import Dashboard from '../Dashboard/Dashboard'
import Stakes from '../Stakes/Stakes'
import Transcation from '../Transcation/Transcation'
import Withdraw from '../Withdraw/Withdraw'
import Wallet from '../Wallet/Wallet'
import Swaping from '../Swaping/Swaping'
import DashboardIcon from '@mui/icons-material/Dashboard';
import {BsBookmarks} from "react-icons/bs"



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const icons=[
    // <DashboardIcon className='Icon'></DashboardIcon>,
   "fa-solid fa-align-justify fa " ,
    "fa-solid fa-tarp fa",
    "fa-solid fa-arrow-right-arrow-left fa",
    "fa-solid fa-tarp fa",
    "fa-solid fa-wallet fa",
    "fa-solid fa-arrow-right-arrow-left fa",
    "fa-regular fa-right-from-bracket fa"

  ]
  
  React.useEffect(()=>{
    let icon = document.querySelectorAll('i')
  icon[0].addEventListener('click',()=>{
   window.location.href="/drawer"
  })
  icon[1].addEventListener('click',()=>{
   window.location.href="/stakes"
  })
  icon[2].addEventListener('click',()=>{
   window.location.href="/transcation"
  })
  icon[3].addEventListener('click',()=>{
    window.location.href="/Withdraw"
   })
   icon[4].addEventListener('click',()=>{
    window.location.href="/wallet"
   })
   icon[5].addEventListener('click',()=>{
    window.location.href="/swaping"
   })
   icon[6].addEventListener('click',()=>{
    window.location.href="/"
   })
  })
  

  return (
    <Box sx={{ display: 'flex' }}  >
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open} >
        <Toolbar style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}}>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography> */}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}  style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}} >
        <DrawerHeader style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}} >
          <IconButton onClick={handleDrawerClose}  style={{color:'white'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}}>
          {
            // [
            //   'Inbox','Starred','Send email',]

           
          [
            { items:'Dashboard',
           icon:"InboxIcon"},
           {items:'Stakes',icon:"InboxIcon"} ,
            {items:'Transacations',icon:"InboxIcon"},
            {items:'Withdraw',icon:"InboxIcon"}  ,
            {items:'Wallet',icon:"InboxIcon"}  ,
            {items:'Swaping',icon:"InboxIcon"}  ,
            {items:'Log out',icon:"InboxIcon"}  
          ]
          
          .map((text, index) => (
            
            <ListItem  disablePadding sx={{ display: 'block' }} className="ListItem_here">
              <ListItemButton
              style={{color:'white'}}
                sx={{
                  minHeight: 50,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon 
                style={{color:"white"}}
                sx={{
                    minWidth: 0,
                    minHeight:0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                
                  <i className={icons[index]}></i>
                </ListItemIcon>
                <ListItemText primary={text.items} sx={{ opacity: open ? 2 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
       
      </Drawer>
      <Box component="main" className='Dra_bg' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
 
   
        {
          props.comp == 'Dashboard' ? <Dashboard /> : <div></div> 
        }
        {
           props.comp == 'Stakes' ? <Stakes /> : <div></div>  
        }
     {
           props.comp == 'Transcation' ? <Transcation /> : <div></div>  
      
        }
        {
           props.comp == 'Withdraw' ? <Withdraw /> : <div></div>  
        }
        {
           props.comp == 'Wallet' ? <Wallet /> : <div></div>  
        }
        {
           props.comp == 'Swaping' ? <Swaping /> : <div></div>  
        }
      </Box>
    </Box>
  );
}
