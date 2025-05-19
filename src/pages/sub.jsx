 

import { useState} from 'react'; 
import React from 'react';
import {Link} from 'react-router-dom';
import NavDown from '../components/Navdown';    
import spoon from '../img/IMG-20240802-WA0000.jpg'
import naira from '../img/naira.png';
import Navdown from '../components/Navdown'
function Subside() {
    return(
        <div>
            <br />
             <section className='new'> 
                 <br />
                <div className='okji'>
                   <b  className='dola'>
                    25$
                   </b>
                     <b  className='dola'>
                        Monthly
                   </b>
                </div>
                   <br />
                <div className='okji'>
                    <b  className='dola'>
                        50$
                   </b>
                     <b  className='dolas'>
                        Annually 
                        <p className='lufded'>
                            Top Store Included
                        </p>
                   </b>
                </div>
                <br />
             </section>
             <br />
             <div className='ton'>
                <button className='tonin'>
                    <b>
                        Next
                    </b>
                </button>
             </div> 
                     <Navdown/>    
        </div>  
    )
  } 
export default Subside;
