import react,{ Component } from "react";  
import naira from '../img/naira.png';
import carriage from '../img/carriage.jpg'
import {Link,Outlet} from 'react-router-dom'
export class Topstores extends Component {
         render(){
          return( 
          <div> 
<div className='realki'> 
   <b className='tates'> 
    Top Stores/Companies
   </b>
</div>
<br />
<div className="rightdibtr"> 
<div className="holkis">

<div className="noiusin" id="liki">  
           <img src={carriage} alt="" width={100} />
           <br /> 
           <b className='oil'> Oko mart Store</b>
           <button className='carts'> 
            Explore Store
           </button>
           <br />
           </div> <div className="noiusin" id="liki">  
           <img src={carriage} alt="" width={100} />
           <br /> 
           <b className='oil'> Enoxo Company</b>
           <button className='carts'> 
            Explore Store
           </button>
           <br />
           </div> <div className="noiusin" id="liki">  
           <img src={carriage} alt="" width={100} />
           <br /> 
           <b className='oil'> Enoxo Company</b>
           <button className='carts'> 
            Explore Store
           </button>
           <br />
           </div> <div className="noiusin" id="liki">  
           <img src={carriage} alt="" width={100} />
           <br /> 
           <b className='oil'> Enoxo Company</b>
           <button className='carts'> 
            Explore Store
           </button>
           <br />
           </div>     
       
   </div>
</div>  
 </div>  
          )
         }

}

export default Topstores;