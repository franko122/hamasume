import { useState} from 'react'; 
import React from 'react';
import css from '../App.css'
import { Link, Outlet } from 'react-router-dom';
import login from '../pages/login'
import NavDown from '../components/Navdown'
function Appcreate() {  
 return(
    <div>
    <section className='sectionside'>
     <h1 className='store'>
        Sign up Now
    </h1>
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
                <input type="text" placeholder='Company Name' required  className='firstdivert'/>
            </div>
            <br />
            <div className='firstdiv'>
                <input type="email" placeholder='Email address' required  className='firstdivert'/>
            </div>
            <br />
            <div className='uert'>
                <button className='now'>
                      Submit Now
                </button>
            </div> 
        </form>  
          <div className='firstdivl'>
              Already  have an account <Link to='/login' className='firstdiv'>sign in</Link>
          </div>
        <div className='banking'> 
                Hamastore | <Link  to={'/home'} className='homer'>Home</Link>| <Link className='homer' to={'/banking'}> Banking</Link> |  <Link className='homer' to={'/login'}> Login</Link> | 
        </div>
    </section>
    <NavDown/>
    </div> 
 )
}
export default Appcreate;
