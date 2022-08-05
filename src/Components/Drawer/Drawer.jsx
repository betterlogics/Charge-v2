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

export default function MiniDrawer() {
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
                  <i class={icons[index]}></i>
                </ListItemIcon>
                <ListItemText primary={text.items} sx={{ opacity: open ? 2 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
       
      </Drawer>
      <Box component="main" className='Dra_bg' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
 
      <div className='container'>
        <div className='row' >
          <div className='col-lg-6'>
            <div className='Upper_d'>
             <p>Contact Adress:TRhDU8iU...pY55iJ</p> 
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='Upper_d'>
             <p>Your Wallet Address:</p> 
            </div>
          </div>

        </div>
      </div>

       <div className='container'>
        <div className='row top_row' >
          <div className='col-lg-4'>
            <div className='row' >
              <div className='Box_g col-6'>
                <div className='Inner_g'>
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
                
                </div>
                
               

              </div>
              <div className='col-6 py-0 my-0 mt-2' >
                <p  className='m-0'> ChargeV2 Balance</p>
                <p  className='m-0'>0 ChargeV2 ($0)</p>
                <p  className='m-0'>0 ChargeV2 ($0)</p>  
                </div>

             
            </div>
           
          </div>
          <div className='col-lg-4'>
            <div className='row' >
              <div className='Box_g col-6'>
                <div className='Inner_g'>
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
                
                </div>
                
               

              </div>
              <div className='col-6 py-0 my-0 mt-2' >
                <p  className='m-0'> Total Refferal count</p>
                <p  className='m-0'>0   ($0)</p>
                <p  className='m-0'>Earnings ($0)</p>  
                </div>

             
            </div>
           
          </div>
          <div className='col-lg-4'>
            <div className='row' >
              <div className='Box_g col-6'>
                <div className='Inner_g'>
                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>
                
                </div>
                
               

              </div>
              <div className='col-6 py-0 my-0 mt-2' >
                <p  className='m-0'>Total Earning</p>
                <p  className='m-0'>0 ChargeV2 ($0)</p>
                <p  className='m-0'>At stake: ChargeV2 </p>  
                </div>

             
            </div>
           
          </div>
        </div>
       </div>

       <h4 className='text-center text-cente green'>Current balance</h4>
       <p className='text-center TExt'>0 trx</p>

       <div className='container' >
        <div className='row space' >
          <div className='col-lg-5 ' >
            <button className='btn Sec_btn  ' >Buy</button>
          </div>
          <div className='col-lg-5 ' >
            <button className='btn Sec_btn  ' >Sell</button>
          </div>
        </div>
       </div>
       <div className='contaier'>
        <div className='row mt-3'>
          <div className='col-lg-6 col-sm-6'>
          <h6 className='ACC_over'>Account Overveiw</h6>
      

          </div>
          <div className='col-lg-6 col-sm-6'>
         
          <button className='btn btn-primary success'>succes</button>

          </div>
        </div>
       </div>
       <div className='Line'></div>
       <div className='row ' >
       <div className='Regs'>
        <p>Registered</p>
        <p>0</p>
       </div> 
       </div>
       <div className='line_2'></div>
       <div className='row ' >
       <div className='Regs'>
        <p>Your TRX Balance</p>
        <p>0 TRX</p>
       </div> 
       </div>
       <div className='line_2'></div>
       <div>
        <p className='Ref'>Refferal URL</p>
        <div className='flex' >
        <input id="refer" type="text" class="MuiInputBase-input MuiInput-input" value="https://infallible-mcclintock-9ee99a.netlify.app/login?ref=TRo3XsJmNmBxeFeqqRgFDrFXYxD7zgAHbS"></input><BsBookmarks className='mar'></BsBookmarks>
        </div>
       </div>

     

      
      </Box>
    </Box>
  );
}
