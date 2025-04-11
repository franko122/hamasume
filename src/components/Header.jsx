import react,{ Component } from "react";
import fistpic from'../img/CXP_PROTEST_712X384.png'
import secimg from '../img/712_x_384.png'  
export class Header extends Component {
  render(){
      return(
          <header  id='lopo' className="header">
          <div className='parentdivert'>

          <div className="oneslide">
                <img src={secimg} className='headimg' alt="" />
              </div> 
              <div className="oneslides">
                <img src={fistpic} className='headi mg' alt="" />
              </div> 

          </div>

          <div className='rightheader'>
                <div className='upper'>
                  <b>
                  0909447764
                  </b>
                </div>   
                <br />
                <div className='upper'>
                  <b>
                  Hammmasum@gmail.com
                    </b> 
                </div>
                <br /> 
                <div className='upper'>
                  <b>
                  Hammmasum@gmail.com
                    </b> 
                </div>
          </div>
     </header>
      )
  }
} 
export  default Header