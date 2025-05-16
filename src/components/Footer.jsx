import { Component } from "react";
import opay from '../img/opay-removebg-preview.png'
import   palmpay from '../img/palm-removebg-preview.png'
import monipoint from '../img/poiy-removebg-preview.png'
import unionbank from '../img/union-removebg-preview.png' 
export class Footer extends Component{
    render(){
        return(
            <div>
                  <footer className='footer'>
          <h1 className='links'>
            Quick <label htmlFor="" className='kis'> Links </label>
          </h1>


        <a href="" className='us'> 
        <p>
            About Us
          </p>
        </a>
        <a href="" className='us'>
        <p>
            Contact Us
          </p>
        </a>
        <a href="" className='us'>
        <p>
            Developer
          </p>
        </a>
 
          <a href="" className='us'>
         <p>
            Real estate
          </p>
         </a>
         <a href="" className='us'>
         <p>
            Wears
          </p>
         </a>   <a href="" className='us'>
         <p>
            Log in 
          </p>
         </a>
         <a href="" className='us'>
         <p> 
          Sign Up
          </p>
         </a>
 <br />
 <br />
         <div className='us'>
           <b>Payment methods</b>
           <br />
         </div>
         
         <img src={opay} width={70} alt="" />
         <br />
           <img src={palmpay} width={70} alt="" />
           <br />
           <img src={monipoint} width={70} alt="" />
           <br />
           <img src={unionbank} width={70} alt="" />
           <div className='rightty'>
            <b>
              Alright Reserve Hammasume 2024 - 2027
            </b>
            <br />
            <br />
           </div>
       </footer>
            </div>
        )
    }
}
export default Footer