
import { useState} from 'react'; 
import React from 'react';
import {Link} from 'react-router-dom';
import NavDown from '../components/Navdown'
function Applogin() {  
 return(
       <section className='App'>
           <div>
    <section className='sectionside'>
     <h1 className='store'>
        Sign In  
    </h1>
        <form action="">
        <div className='firstdiv'>
                <input type="number" placeholder='Phone Number' required  className='firstdivert'/>
            </div>
            <br /> 
            <div className='firstdiv'>
                <input type="number" placeholder='Password' required  className='firstdivert'/>
            </div>    
            <br />
            <div className='uert'>
                <button className='now'>
                      Login Now
                </button>
            </div> 
        </form>
        <div className='banking'>
               Didnt have an account <Link to='/create' className='firstdiv'>sign Up</Link>
               </div>
                <div className='banking'>
                 Forgoting password <Link to='/create' className='firstdiv'>Click Here </Link>
               </div>
             <div className='banking'> 
                     Hamastore | <Link  to={'/home'} className='homer'>Home</Link>| <Link className='homer' to={'/banking'}> Banking</Link> |  <Link className='homer' to={'/create'}>Sign Up</Link> | 
             </div>
    </section>
    <NavDown/>
</div>
       </section>
 )
}
export default Applogin;
