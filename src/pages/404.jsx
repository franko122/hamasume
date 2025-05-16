
import { useState} from 'react'; 
import React from 'react';
import css from '../App.css'
import { Component } from 'react';
import { Footer } from './../components/Footer';
import {Navdown} from './../components/Navdown'
import { Header } from './../components/Header'; 
import { Outlet,Link } from'react-router-dom';
function Notfound() {  
 return(
    <div>
        <Header/>
        <Navdown/>
    <h1 className='page'>
         <b> 
            404 Page Not Found!!! 
         </b>
         <Link className='page' to="/Home"> Home</Link>
    </h1>
    <Footer/>
    <br />  
</div>
 )
}
export default Notfound;
