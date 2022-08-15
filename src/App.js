import React from 'react'
import logo from './logo.svg';
import './App.css';
// import Wallet from './Components/Wallet/Wallet';
// import Withdraw from './Components/Withdraw/Withdraw';
// import Drawer from './Components/Drawer/Drawer';
// import Stakes from './Components/Stakes/Stakes';
import Header from './Components/Header/Header';
import Swaping from './Components/Swaping/Swaping';
import {
  BrowserRouter as Router,

  Route,
  Routes,
  Link
} from "react-router-dom";
// import MiniDrawer from './Components/Drawer/Drawer';
// import { Drawer } from '@mui/material';
import  Drawer  from './Components/Drawer/Drawer';


export default function App() {
  return (
    <Router>
    <div>

<Routes>
<Route path='/' element={<Header />} />
<Route path='drawer' element={<Drawer comp = "Dashboard" />} />
<Route path='/stakes' element={<Drawer comp = "Stakes" />} />
<Route path='/Transcation' element={<Drawer comp = "Transcation" />} />
<Route path='/Withdraw' element={<Drawer comp = "Withdraw" />} />
<Route path='/Wallet' element={<Drawer comp = "Wallet" />} />
<Route path='/Swaping' element={<Drawer comp = "Swaping" />} />
</Routes>

{/* <Route path='/drawer/stake' element={} */}
      {/* <Drawer/> */}
      {/* <Stakes/> */}
      {/* <Transcation/> */}
      {/* <Withdraw/> */}
      {/* <Wallet/> */}
      {/* <Swaping/> */}
  




      
    </div>
    </Router>
  )
}



