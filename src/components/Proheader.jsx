import react,{ Component } from "react";  
import profile from '../pages/profile';
import proimg from'../img/prot.png';
import {Link,Outlet} from 'react-router-dom';
export class Proheader extends Component {
         render(){
          return( 
            <div> 
                <section className="pro"> 
                     <br />
                     <br />
                     <br /> 
                     <div className="parentdiv">
                      <div className="">   
                         <b className="kwu">Okechukwu  frank</b>
                         / <b>Dashboard</b>/
                      </div> 
                      <b className="redder">Verify kyc/email now</b>
                      <div >
                           <img src={proimg} alt="" className="pside"  />
                      </div>
                     </div>
                     <hr />
                     <div className="dowmsidert">
                     <button className="sosre">
                             <Link to='/store' className='mewav'> 
                             <b>   
                             My store
                             </b>
                               </Link>
                          </button>
                          <button className="sosre">   
                            <Link to='/home' className='mewav'> 
                             <b>   
                             Customers orders
                             </b>
                               </Link>
                          </button>
                          <button className="sosre">  
                            <Link to='/home' className='mewav'> 
                             <b>   
                             Account Details
                             </b>
                               </Link>
                          </button>
                          <button className="sosre">  
                      <Link to='/home' className='mewav'> 
                             <b>   
                             Kyc
                             </b>
                               </Link>
                          </button>
                     </div>
                     <br />
                     <div className="dowmsidert">
                     <button className="sosre"> 
                      <Link to='/home' className='mewav'> 
                             <b>   
                             Banking
                             </b>
                               </Link>
                          </button> 
                          <button className="sosre">   
                           
                            <Link to='/home' className='mewav'> 
                             <b>    Buy/Sell crypto
                             </b>
                               </Link>
                          </button>
                          <button className="sosre"> 
                            <Link to='/home' className='mewav'> 
                             <b>   
                            Create Ticket
                             </b>
                               </Link>
                          </button>
                          <button className="sosre"> <Link to='/home' className='mewav'> 
                             <b>  Home
                             </b>
                               </Link>
                          </button>
                     </div>
                     <hr />
                </section>
            </div>
          )
         } 
} 
export default Proheader;