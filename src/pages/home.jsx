 
import { useState} from 'react'; 
import naira from '../img/naira.png'
import css from '../App.css'; 
import react from 'react';
import Fromus from '../components/Fromus'
import {Link ,Outlet} from 'react-router-dom'
import Header from '../components/Header';
import Navdown from '../components/Navdown';
import Topstores from '../components/Topstores'
import Footer from '../components/Footer';
import cart from '../img/cart.png'
import Downsection from '../components/Downsection';
import Adside from '../components/Adside';
import carriage from '../img/carriage.jpg';  
import index from '../index';
import { BrowserRouter, Routes, Routers, Route,   } from 'react-router-dom';
 

    function Apps() { 
      // this for hanburger
      const [show,setShow] = useState(false)
      //this for  parentcart disapear 
      const [secshow , lastsho] =useState(false)
      //this  for  inner cart 
      const [go ,come] =useState(true) 
      return (
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
                             <b className='orderlo'> 
                             Sign Up 
                             </b>
                               </Link>
                     </button>
                     <br />
                     <br />
                     <button className='up'> 
                     <Link to='/login' className='upo'> 
                             <b className='orderlo'> 
                             Sign In 
                             </b>
                               </Link>
                     </button> 
     
                     </div> 
                     <div className='signcontainer'>   
                     <br />
                     <button className='up'> 
                     <Link to='/login' className='upo'> 
                             <b className='orderlo'> 
                              kyc
                             </b>
                               </Link>
                     </button>
                     <br />
                     <br />
                     <button className='up'> 
                     <Link to='/login' className='upo'> 
                             <b className='orderlo'>  
                              About us 
                               </b>
                               </Link>
                     </button>    
                     <br />
                     <br />
                     <button className='up'> 
                     <Link to='/login' className='upo'> 
                             <b className='orderlo'>  
                              My Store
                             </b>
                               </Link>
                     </button> 
                     <br />
                     <br /> 
                     <button className='ups'> 
                      <b> 
                        Log Out 
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
                       Hamasume
                   </b>
                   </div> 
              <nav className="nav1">
              <b className='huber'> 
                Hamasume 
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
            <br />
            <br />
            <br />     
         <div className="rightdibtr"> 
                <div className="holki">
                      <button className="noiu" id="liki">
                            <a href="fetchreal" className="real">
                                     Real Estate
                             </a> 
                    </button>
                     <button className="noiu" id="appli">
                        <a href="./fetchhomeap"  className="real">
                            Home Appliances
                           </a>            
                          </button> 
                    <button className="noiu" id="nic">
                      <a href="fetvhelect.html"   className="real">
                        Eletronics
                      </a>
                    </button>
                    
                    <button className="noiu" id="moki"  >
                        <a href="/vote"   className="real">
                         Vote
                        </a> 
                     </button>
                    <button className="noiu" id="niki">
                        <a href="/ticket"  className="real" >
                         Buy Tickets
                        </a> 
                     </button>
    
                     <button className="noiu" id="shion">
                        <a href="fetchwear"  className="real">                         
                        Wears/fashion
                        </a>
                    </button>
                     <button className="noiu" id="shions">
                        <a href="fetchvehi"  className="real">
                            Vehicles
                        </a>
                    </button>
                    <button className="noiu" id="fshionh">
                       <a href="./fetchcost"  className="real">Cosmetics</a>
                    </button>
                    <button className="noiu" id="niture"> 
                        <a href="fetchfun"  className="real">
                        Furniture
                        </a>
                    </button>
                    <button className="noiu" id="ruction"  > 
                        <a href="fetchconstru"  className="real">
                        Construction
                        </a>
                    </button>
                    <button className="noiu" id="riage"> 
                        <a href="fetchdrive"  className="real">
                       Carriage
                        </a>
                    </button>
                    <button className="noiu" id="ange">
                        <a  href="https://getcoins-us.onrender.com/Getcoinset/index.html" target="_blank"  className="real">
                            Crypto Exchange
                        </a>
                    </button>    
                      <button className="noiu" id="jobert">
                        <a href="fetchjob"  className="real"> 
                          Services
                        </a>
                    </button>
                    <button className="noiu" id="lopelokr">
                        <a href="wa.me/9034069907"  className="real" target="_blank">
                          Contact Developer
                        </a>
                      </button>
                </div>
           </div> 
        <Navdown/>    
            <Topstores/> 
            <Fromus/>
            <Downsection/> 
            <Adside/>
            <br/>
            <Footer/>
            <br />
            <br /> 
                </div>
      );
    }
    export default Apps;
    