import React from 'react';
import Footer from './componet/Footer/Footer';
import Header from './componet/header/header';
import { Outlet } from 'react-router-dom';

function layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
     
    );
}

export default layout;