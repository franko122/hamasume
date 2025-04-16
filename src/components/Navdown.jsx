import react,{ Component } from "react";  
import profile from '../pages/profile'
import {Link,Outlet} from 'react-router-dom'
export class Navdown extends Component {
         render(){
          return(
            <div className='navert'>
            <div className='homnavs'> <Link  to={'/home'} className='homem'>Home</Link></div>  
            <div className='homnavs'><Link  to={'/home'} className='homem'>My Store </Link></div>  
            <div className='homnavs'><Link  to={'/home'} className='homem'>orderd <br /> Goods  </Link>  </div>  
            <div className='homnavs'><Link  to={'/profile'} className='homem'>Profile </Link></div>  
            </div> 
          )
         } 
} 
export default Navdown;