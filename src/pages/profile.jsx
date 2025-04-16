
import { useState} from 'react'; 
import React from 'react';
import {Link} from 'react-router-dom';
import NavDown from '../components/Navdown';
import carriage from '../img/carriage.jpg';
import cart from '../img/cart.png';
import Proheader from '../components/Proheader'
import naira from '../img/naira.png';
function Profile() { 
        // this for hanburger
        const [show,setShow] = useState(false)
        //this for  parentcart disapear 
        const [secshow , lastsho] =useState(false)
        //this  for  inner cart 
        const [go ,come] =useState(true)   
 return(
    <div> 
        <div className="App">
          { 
            secshow? 
             <section className='umean'> 
                <h1 className='art'>
               My Cart
                </h1> 
               { 
    go ? 
    <div>
          <h5 className='losertik'   onClick={()=>come(!go)}>
      X 
     </h5>
           <div className="noiuset" id="liki">  
      
                        <img src={carriage} alt="" width={150} />
                        <br />
                        <b className='oil'>Baby Oil </b>
                        <br />
                        <div className='nai'>  
                          <img src={naira} width={20} alt="" />
                        <b className='thefive'>2,500</b>
                        </div>
                       <div className='nai'>
                          <img src={naira} width={20} alt=""/>
                          <del  className='df002'>2,500</del>
                        </div>
                        <b className='oil'> Enoxo Company</b>
                        <button className='cart'>
                          Add To Cart
                        </button>
                        <br />
                        </div> 
    </div>  
    :null
               }
                   
            </section> : null 
          }
            {
                  show ? <section className='hello'>
                    <br /> 
                    <br />
                    <div className='signcontainer'>
                     <button className='up'>
                             <Link to='/create' className='upo'> 
                             <b> 
                             Sign Up 
                             </b>
                               </Link>
                     </button>
                     <br />
                     <br />
                     <button className='up'> 
                     <Link to='/login' className='upo'> 
                             <b> 
                             Sign In 
                             </b>
                               </Link>
                     </button> 
     
                     </div> 
    <div className='signcontainer'>  
                     <br />
                     <button className='up'> 
                      <b> 
                        Upload Job
                      </b>
                     </button> 
                     <br />
                     <br />
                     <button className='up'> 
                      <b> 
                        Requested Goods
                      </b>
                     </button> 
                     <br />
                     <br />
                     <button className='up'> 
                      <b> 
                        Create Ticket 
                      </b>
                     </button> 
                     <br />
                     <br />
                     <button className='up'> 
                      <b> 
                        My Goods
                      </b>
                     </button> 
                     <br />
                     <br />
                     <button className='up'> 
                      <b> 
                        Create Vote
                      </b>
                     </button> 
                     <br />
                     <br />
                     <button className='up'> 
                      <b> 
                        Uplaod Goods
                      </b>
                     </button> 
                     <br />
                     <br />
                     <button className='ups'> 
                      <b> 
                        Log Out 
                      </b>
                     </button>
                     <br />
                     <br /> 
                      <button className='ups'> 
                      <b> 
                        Subscribe  To Upload
                      </b>
                     </button>
                     <h1 className='alrigt'>
                            Alrigth reserved Hammasume 2024 - 2024
                     </h1>
    </div>  
                  </section>:null
                }
    
                <div className='lad' id='wemo'> 
                   <b className='hub'>
                       BUZHUB
                   </b>
                   </div> 
              <nav className="nav1">
              <b className='huber'> 
                BUZHUB 
              </b>
              <form action="" method=''  className="lom">
              <input className="serchpu" placeholder="Search Stores"  required/>
              <button className="mit">
                Search
              </button>    
              </form> 
              <div  onClick={()=>lastsho(!secshow)}>
                <img  src={cart} width={25} alt="" />
              </div>
              <div className="hime" onClick={()=>setShow(!show)}>
                  <div className="parentsidse"> 
                  <div className="noli"></div>
                   <div className="nolis"></div>
                   <div className="noli"></div>
                  </div>
              </div>
            </nav>     
    <NavDown/>
    <Proheader/>
</div>
</div>
 )
}
export default Profile;
