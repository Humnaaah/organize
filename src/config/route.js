import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import ForgetPassword from '../views/ForgetPassword/ForgetPassword';
import PortalScreen from '../views/PortalScreen';
import Products from '../views/products/container/product';
import Signin from '../views/Signin/Container/Signin';
import Signup from '../views/Signup/Signup';

const Routing =()=>{
    return(
        <BrowserRouter>
            <Routes> 
                <Route exact path="/" element={<Signin/>}/>
                <Route exact path="/forgetpassword" element={<ForgetPassword/>}/>
                <Route exact path="/register" element={<Signup/>}/>
                  <Route path="/ebutler/*" element={<PortalScreen/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routing