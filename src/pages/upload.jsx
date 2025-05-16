import { useState} from 'react'; 
import React from 'react';
import {Link} from 'react-router-dom';
import NavDown from '../components/Navdown';
import carriage from '../img/carriage.jpg';
import cart from '../img/cart.png';
import Proheader from '../components/Proheader'
import naira from '../img/naira.png';
function upload() { 
    return(
        <div className="meko">
                     <br />
                             <div className='topsidert'>
                                 <button className='sosre'>
                                 <Link  to={'/store'} className='homemed'>Store</Link> 
                                 </button>
                                 <button className='sosres'> 
                                     <Link  to={'/upload'} className='homemeded'>Upload</Link>  
                                 </button>
                                 <button className='sosre'>
                                 <Link  to={'/sub'} className='homemed'>Subscribe</Link>  
                                 </button>
                                 <button className='sosre'>
                                     Settings
                                 </button>
                             </div>
                             <br />
        <form action="">
        <div className='firstdiv'>
                <input type="number" placeholder='Phone Number' required  className='firstdivert'/>
            </div>
            <br />
            <div className='firstdiv'>
                <input type="text" placeholder='Username' required  className='firstdivert'/>
            </div>
            <br />
            <div className='firstdiv'>
                <input type="number" placeholder='Password' required  className='firstdivert'/>
            </div>
            <br />
            <div className='firstdiv'>
                <input type="text" placeholder='Store Name' required  className='firstdivert'/>
            </div>
            <br />
            <div className='firstdiv'>
                <input type="email" placeholder='Email address' required  className='firstdivert'/>
            </div>
            <br />
            <div className='uert'>
                <button className='now'>
                      Upload Now
                </button>
            </div> 
        </form>  
                             <NavDown/>
        </div>
    )
}
export  default upload