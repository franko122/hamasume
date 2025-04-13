import react,{ Component } from "react";  
import {Link,Outlet} from 'react-router-dom'
export class Navdown extends Component {
         render(){
          return(
            <div className='navert'>
            <div className='homnavs'> <Link  to={'/home'} className='homem'>Home</Link></div>  
            <div className='homnavs'>My Goods</div>  
            <div className='homnavs'>orderd <br /> Goods </div>  
            <div className='homnavs'>Profile</div>  
            </div> 
          )
         }

}

export default Navdown;