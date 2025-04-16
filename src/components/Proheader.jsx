import react,{ Component } from "react";  
import profile from '../pages/profile';
import proimg from'../img/prot.png'
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
                         / <b>Dashboard</b>
                      </div> 
                      <div >
                           <img src={proimg} alt="" className="pside"  />
                      </div>
                     </div>
                     <hr />
                     <div className="dowmsidert">
                     <button className="sosre">
                             My store
                          </button>
                          <button className="sosre">  
                            Create Ticket
                          </button>
                          <button className="sosre">  
                            Account Details
                          </button>
                          <button className="sosre"> 
                            Create Vote
                          </button>
                     </div>
                     <br />
                     <div className="dowmsidert">
                     <button className="sosre"> 
                      Banking
                          </button> 
                          <button className="sosre">   
                            Buy/Sell crypto
                          </button>
                          <button className="sosre">  
                            Create Ticket
                          </button>
                          <button className="sosre"> 
                            Create Vote
                          </button>
                     </div>
                </section>
            </div>
          )
         } 
} 
export default Proheader;