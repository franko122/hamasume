
import { useState} from 'react'; 
import React from 'react';
import css from '../App.css'
import { Component } from 'react';
import { Footer } from './../components/Footer';
import { Header } from './../components/Header'; 
import { Outlet,Link } from'react-router-dom';
function Notfound() {  
 return(
    <div>
        <Header/>
    <h1 className='page'>
         <b> 
            404 Page Not Found!!! 
         </b>
         <Link className='page' to="/Home"> Home</Link>
    </h1>
    <Footer/>
</div>
 )
}
export default Notfound;
