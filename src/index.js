import React from 'react'; 
import './index.css'; 
import { BrowserRouter, reactDom, Route, Routes, Routers } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'; 
import Create from './pages/create';
import Home from './pages/home';
import Notfound from './pages/404'; 
import ReactDOM from 'react-dom/client'
import { render } from '@testing-library/react'; 
import Login from './pages/login';
import Store from './pages/store';
import Profile from './pages/profile';
import Subsides from './pages/sub'
import Upload from './pages/upload';
export default function Apper(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/home' element={<Home/>}> </Route>
      <Route path='/store' element={<Store/>}> </Route>  
      <Route path='/upload' element={<Upload/>}> </Route>  
      <Route path='/profile' element={<Profile/>}> </Route> 
      <Route path='create' element={<Create/>}></Route>
    <Route path='/sub' element={<Subsides/>}> </Route> 
      <Route path='/login' element={<Login/>}> </Route>  
      <Route path='*' element={<Notfound/>}> </Route>  
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apper/>);